import React from 'react';


import Slider from "../inc/Slider";
import { Link } from 'react-router-dom';

import Rice from '../images/rice.jpg'
import Vasa from '../images/VASA.jpg'


import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Common from '../inc/Common';





   
Modal.show = true;

export function ToolsPage() {



    return (
       
                
        <>
        <Common />
        
        
           
        <div className="container">
          <br />
        <p>Home || More tools || <b  style={{color: 'green'}}>Online Tools</b></p>

      
             <center>
                <br />
                <h2>Online Tools</h2>
      </center>
        <div className="row">

       
      

        <br />
        <br />
        <br />
          <div className="col-md-3 mt-4">
          
             

          
        <div className="card profile-card-5">
     
            <img className="card-img-top" style={{height: '250px', width:'307px'}} src={Rice}  alt="Card image cap" />
      
          <div className="card-body pt-0">
            <br />
            <h5 className="card-title">World database on food</h5>
            <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Nigerians eats 90% everything. </b><br />
            <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅   Food is live . </b><br />
            <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
            <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Nigerians farm their own food. </b><br />
            
            <br />
            
            <Link className="btn btn-success" to="/viewtools">Go to ↳ ➤ </Link>
          </div>
        </div>
       
 
  
              
      
          </div>

          <div className="col-md-3 mt-4">
          
             

          
          <div className="card profile-card-5">
       
              <img className="card-img-top" style={{height: '250px', width:'307px'}} src="https://365datascience.com/resources/blog/w13dtmi1l4j-required-level-education-data-scientist-uk.jpeg"  alt="Card image cap" />
        
            <div className="card-body pt-0">
              <br />
              <h5 className="card-title">Key Indicators on VET</h5>
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Visualize and compare indciators</b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Access data by countries </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Export dataset</b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Learn about the methodology </b><br />
              
              <br />
              
              <Link className="btn btn-success" to="/viewtools">Go to ↳ ➤ </Link>
            </div>
          </div>
         
   
    
                
        
            </div>


            <div className="col-md-3 mt-4">
          
             

          
          <div className="card profile-card-5">
       
              <img className="card-img-top" style={{height: '250px', width:'307px'}} src="https://mc-bcdcbf23-962c-44b4-ae98-627791-cdn-endpoint.azureedge.net/-/media/project/emea/es/hero-video-stills/servicios-data-analytics-es-poster.jpg?cx=0.5&cy=0.5&cw=1200&ch=630&hash=2A1E561F78DFD7A403088D2DE749289A"  alt="Card image cap" />
        
            <div className="card-body pt-0">
              <br />
              <h5 className="card-title">Unemployment skills data</h5>
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Comparative skills of all states </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  3 dimensions </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  15 indivitual indiicators </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  36 states </b><br />
              
              <br />
              
              <Link className="btn btn-success" to="/viewtools">Go to ↳ ➤ </Link>
            </div>
          </div>
         
   
    
                
        
            </div>


            <div className="col-md-3 mt-4">
          
             

          
          <div className="card profile-card-5">
       
              <img className="card-img-top" style={{height: '250px', width:'307px'}} src="https://www.cio.com/wp-content/uploads/2021/12/statistics-stats-big-data-analytics-100613892-orig.jpg?quality=50&strip=all"  alt="Card image cap" />
        
            <div className="card-body pt-0">
              <br />
              <h5 className="card-title">Urban and Rural data</h5>
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Overview of all acrooss maps. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  126 current skills policies. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Nigerian guidelines chapter. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Niegrian inventory on validation </b><br />
              
              <br />
              
              <a href="#" className="btn btn-success">Go to ↳ ➤</a>
            </div>
          </div>
         
   
    
                
        
            </div>


            <div className="col-md-3 mt-4">
          
             

          
          <div className="card profile-card-5">
       
              <img className="card-img-top" style={{height: '250px', width:'307px'}} src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c"  alt="Card image cap" />
        
            <div className="card-body pt-0">
              <br />
              <h5 className="card-title">Unemployed citizens in Nigeira</h5>
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              
              <br />
              
              <Link className="btn btn-success" to="/viewtools">Go to ↳ ➤ </Link>
            </div>
          </div>
         
   
    
                
        
            </div>


            <div className="col-md-3 mt-4">
          
             

          
          <div className="card profile-card-5">
       
              <img className="card-img-top" style={{height: '250px', width:'307px'}} src="https://www.fels.upenn.edu/sites/default/files/2.6.18%20-%20720.jpg"  alt="Card image cap" />
        
            <div className="card-body pt-0">
              <br />
              <h5 className="card-title">World database on food</h5>
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              
              <br />
              
              <Link className="btn btn-success" to="/viewtools">Go to ↳ ➤ </Link>
            </div>
          </div>
         
   
    
                
        
            </div>


            <div className="col-md-3 mt-4">
          
             

          
          <div className="card profile-card-5">
       
              <img className="card-img-top" style={{height: '250px', width:'307px'}} src="https://www.incimages.com/uploaded_files/image/1024x576/getty_881350654_368270.jpg"  alt="Card image cap" />
        
            <div className="card-body pt-0">
              <br />
              <h5 className="card-title">World database on food</h5>
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              
              <br />
              
              <Link className="btn btn-success" to="/viewtools">Go to ↳ ➤ </Link>
            </div>
          </div>
         
   
    
                
        
            </div>

            <div className="col-md-3 mt-4">
          
             

          
          <div className="card profile-card-5">
       
              <img className="card-img-top" style={{height: '250px', width:'307px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQud2I2g-mviSwjlbGTkhX86CevkoETChlA&usqp=CAU"  alt="Card image cap" />
        
            <div className="card-body pt-0">
              <br />
              <h5 className="card-title">World database on food</h5>
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              <b style={{fontFamily:'verdana', fontSize: '12px'}} >✅  Some quick example tex. </b><br />
              
              <br />
              
              <Link className="btn btn-success" to="/viewtools">Go to ↳ ➤ </Link>
            </div>
          </div>
         
   
    
                
        
            </div>

  
          
        </div>

   
      </div>
      </>

    )
}
export default ToolsPage;

