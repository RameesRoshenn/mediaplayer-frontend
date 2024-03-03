import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='d-flex justify-content-center align-w-100 flex-column'>
      <div className="footer d-flex align-items-center justify-content-evenly">
        <div className="websites" style={{width:'400px'}}>
        <i class="fa-solid fa-video fa-beat me-3 text-warning"></i>{' '}
        Vidio Player

    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Odio reiciendis praesentium nobis tenetur veritatis rerum, optio accusamus 
      nesciunt fugit quod at, asperiores est incidunt quae iste enim! Recusandae, officia rem?</h6>
      </div>
  
         
       <div className="links d-flex flex-column">
        <h4>links</h4>
        <Link to={'./home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch history</Link>


         </div>
        
       <div className="guides d-flex flex-column"> 
        <h4>guides</h4>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React Bootstarp</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
       </div>

       <div className="contacts ">
        <h4 className='mb-3'>contacts us</h4>
        <div className= 'd-flex mb-3'>
          <input type="text" className='form-control' placeholder='enter your email id'/>
          <button className='btn btn-warning ms-2'>Subscribe</button>
        </div>

        <div className='d-flex justify-content-evenly align-items-center'>
        <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
        class="fa-brands fa-instagram fa-2x"></i></Link>

        <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
        class="fa-brands fa-twitter fa-2x"></i></Link>

        <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
        class="fa-brands fa-linkedin fa-2x"></i></Link>

        <Link to={'https://bootswatch.com'}style={{textDecoration:'none',color:'white',}}><i
        class="fa-brands fa-facebook fa-2x"></i></Link>








       


        </div>
       </div>
      

       
      </div>
      <p className='mt-5'>Copyright © 2023 Media Player . Built with React. </p>
    </div>
  )
}

export default Footer