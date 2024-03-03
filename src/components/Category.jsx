import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAvideo, getCategory, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row ,Col, Card } from 'react-bootstrap';
import VideoCard from './VideoCard'


function Category() {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState({})

  const [allCategory, setAllCategory] = useState([])




  //function to add category

  const handleAddCategory = async () => {

    console.log(categoryName);

    if (categoryName) {
      let name = {
        categoryName,
        allVideos: []
      }

      //make api call
      const response = await addCategory(name)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success(`Category successfullly added.`)
        //to make the state null after successfully added
        setCategoryName("")
        //to close modal
        handleClose();
      }
      else {
        console.log(response);
        toast.error('something went wrong,try again later')
      }
    }
    else {


      toast.warning('please fill the Category name')
    }


  }

  //function to get category
  const getallCategory = async () => {
    const { data } = await getCategory()
    console.log(`get category`,data);
    setAllCategory(data)
  }


  //dragover eventListerner
  const dragover = (e) => {
    e.preventDefault()
  }

  const videoDrop = async (e, categoryId) => {
    console.log(`dropped inside the CategoryID ${categoryId}`);
    const videoid = e.dataTransfer.getData("videoID")
    console.log(videoid);




  //api to get the particular video that is draged
  const {data}= await getAvideo(videoid)
console.log(data);


//to get the particular category with the specified id
let selectedCategory = allCategory?.find(item=>item.id===categoryId)
console.log(selectedCategory);

//data is added to all videos array in the particular category with specified id
selectedCategory.allVideos.push(data)
console.log(selectedCategory);

await updateCategory(categoryId,selectedCategory)
getallCategory()

}

const handleDelete =async (id)=>{
  await deleteCategory (id)
  getallCategory()
}




  useEffect(() => {
    getallCategory()
  }, [])



  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className=' btn btn-warning '>Add New Category</button>
      </div>


      { allCategory?.length > 0 ?
      allCategory?.map((item) => (
        <div className='m-5  border border-secondary  rounded  p-3'>
          <div className=' d-flex  justify-content-between  align-items-center ' droppable onDragOver={(e) => dragover(e)} onDrop={(e) => videoDrop(e, item?.id)}>
            <h6>{item.categoryName}</h6>
            <button className='btn  btn-danger ' onClick={()=>handleDelete(item?.id)}><i class="fa-solid fa-trash-can"></i></button>
          </div>
          <Row>
            <Col sm={12}>
              {
                item.allVideos?.length>0?
                item.allVideos.map(card=>(<VideoCard displayVideo={card}/>))
                : <p>nothing to display</p>
              }
            </Col>
          </Row>
        </div>)):
        <p>nothing to display</p>
      }

      
  

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning "></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className=' border  border-secondary p-3 rounded'>


            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control  onChange={(e)=>setCategory({...category,catName:e.target.value})} type="text" placeholder="Enter Category ID" />
      </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control onChange={(e) => setCategoryName(e.target.value )} type="text" placeholder="Enter Category Name" />
            </Form.Group>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="Warning" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />





    




    </>
  )
}

export default Category