import React,{useEffect} from 'react';




import Slider from "../inc/Slider";
import { Link } from 'react-router-dom';


import Script from 'react-load-script'
import "../../styles/bootstrap.min.css";
import "../../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/bootstrap-icons/bootstrap-icons.css";

import Ndd from '../images/rice.jpg'
import Vasa from '../images/VASA.jpg'
import Neds from '../images/NEDS.jpg'
import Nmis from '../images/NMIS.jpg'
import Nship from '../images/NSHIP.jpg'
import Vacs from '../images/VACS.jpg'
import Chea from '../images/CHEAECS.jpg'
import Im from '../images/IMSP.jpg'
import Nur from '../images/NURHI.jpg'

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Viewdetails from './viewdetails';
import Common from '../inc/Common';





   
Modal.show = true;

export function DataPage() {

   
  useEffect(() => {
    AOS.init();
  }, []);




    const [isOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Transitioning...");
  
    const showModalx = () => {
      setIsOpen(true);
    };
  
    const hideModalx = () => {
      setIsOpen(false);
      setTitle("Transitioning...");
    };
  
    const modalLoadedx = () => {
      setTitle("Modal Ready");
    };




    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
      setTitle("Transitioning...");
    };
  
    const modalLoaded = () => {
      setTitle("Modal Ready");
    };
  

    return (
      <div>
        <script src="http://localhost:3000/bootstrap.bundle.js"></script>

<Script  url="http://localhost:3000/aos/aos.js" />
<Script  url="http://localhost:3000/swiper/swiper-bundle.min.js" />
<Script  url="http://localhost:3000/purecounter/purecounter_vanilla.js" />
<Script  url="http://localhost:3000/glightbox/js/glightbox.min.js" />
<Script  url="http://localhost:3000/isotope-layout/isotope.pkgd.min.js" />


<Script  url="http://localhost:3000/main.js" />

       
     
<Common />
           
        <div className="container" style={{ }}>
          <br></br>
        <p>Home || <b  style={{color: 'green'}}>Data Insights</b></p>
        <div className="row">

       
      

        <br />
        <br />
        <br />
          <div className="col-sm-4" >
            <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block" >
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} type="button" onClick={showModal}  data-toggle="modal" data-target="#USG" src={Ndd} alt="" />
               
              </div>
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY GENDER</p><center>
                </center></center>
                
               
                
                </div>
  
              
            </div>
          </div>


        

          <div className="col-sm-4">
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} type="button" onClick={showModalx}  src={Vasa} alt="" />
                
              </div>
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT BY DWELLING (Urban and Rural)</p><center>
                </center></center></div>


            </div>
          </div>
          <div className="col-sm-4" >
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} type="button" onClick={showModal}  src={Neds} alt="" />
             
              </div>
             
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY AGE GROUP</p><center>
                </center></center></div>

            
            </div>
          </div>
          <br />

          <div className="col-sm-4" >
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} type="button" onClick={showModalx}  src={Nmis} alt="" />
               
              </div>

               
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY EDUCATIONAL GROUP</p><center>
                </center></center></div>


            </div>
          </div>
          <div className="col-sm-4">
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} src={Nship} alt="" />
                
              </div>

               
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY AGE GROUP</p><center>
                </center></center></div>


            </div>
          </div>
          <div className="col-sm-4" >
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} src={Vacs} alt="" />
               
              </div>

               
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY AGE GROUP</p><center>
                </center></center></div>


            </div>
          </div>
          
          <br />
          <div className="col-sm-4" >
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} src={Chea} alt="" />
               
              </div>

               
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY AGE GROUP</p><center>
                </center></center></div>


            </div>
          </div>
          <div className="col-sm-4">
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} src={Im} alt="" />
                
              </div>

               
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY AGE GROUP</p><center>
                </center></center></div>


            </div>
          </div>
          <div className="col-sm-4" >
          <div className="card"  style={{height: '300px', marginBottom: '45px',  marginTop: '15px'}}>
              <div className="card-block">
              <img style={{height: '300px', width:'420px', objectFit: 'cover'}} src={Nur} alt="" />
               
              </div>

                 
              <div className="" style={{backgroundColor: 'rgba(72, 129, 52, 1)', opacity: 1.0,  marginBottom: '105px', width:'420px'}}>
              <center>  <p style={{color: 'white',  paddingTop: '5px', fontSize: '14px'}}>UNEMPLOYMENT STATISTICS BY AGE GROUP</p><center>
                </center></center></div>
            </div>
          </div>

          
          
        </div>
        <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded} size="lg"  class="modal-content modal-xl"  style={{marginTop: '15%'}}>
        <Modal.Header class="modal-header">
          <Modal.Title>Unemployment Statistics by Gender</Modal.Title>
        </Modal.Header>
        <Modal.Body >During the quarter Q3 2018, 26.6% of women within the labour force (aged 16-64 and willing, able, and
actively seeking work) were unemployed. This is 6.3 percentage points higher than the unemployment rate
for men (20.3%), and 3.5 percentage points higher than the total labour force unemployment rate, which is
23.1%. For women, this also represents a 5.4 percentage point increase in the unemployment rate from the
same period of last year. </Modal.Body>
        <Modal.Footer>
          <div className='m-4'>
          <Link class="btn btn-success"  to={'/viewdetails'} >
         View Details</Link>
        </div>
          <button onClick={hideModal} class="btn"  style={{backgroundColor: 'red', color: 'lightgrey'}}>X</button>
        
        </Modal.Footer>
      </Modal>


      

   

   
      </div>

</div>

  
   

      




    )
}
export default DataPage;

