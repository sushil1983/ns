import React  from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

class Contact extends React.Component  {


        state = {
        name: '',
        email: '',
        message: '',
      }

      handleChange = (e) => {
        this.setState({
         [e.target.name] : e.target.value
        });
      }

     handleFormSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
  
        
          const  {name, email,message } = this.state
        axios.post('http://localhost:4000/api',
          {
            name:name,
            email:email,
            message:message
          })
          .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
       

             };

     

      

  render(){
   
  return (
   <div>
      <section className="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">Contact Us</span>
          <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to ={'/'} className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to ={'/contact'}className="text-white-50">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="contact-form-wrap section">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                 <form name="form" className="contact__form" onSubmit={this.handleFormSubmit}>
               
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-success contact__msg" style={{display: "none"}} role="alert">
                                Your message was sent successfully.
                            </div>
                        </div>
                    </div>
                  
                    <span className="text-color">Send a message</span>
                    <h3 className="text-md mb-4">Contact Form</h3>
                    <div className="form-group">
                        <input name="name" type="text" className="form-control" placeholder="Your Name"
                      
                        onChange={this.handleChange}
                        
                        />
                    </div>
                    <div className="form-group">
                        <input name="email" type="email" className="form-control" placeholder="Email Address"
                        
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group-2 mb-4">
                        <textarea name="message" className="form-control" rows="4" placeholder="Your Message"
                        
                        onChange={this.handleChange}
                        
                        /> </div>
                    <button className="btn btn-main" >Send Message</button>
                    <div>
               
</div>
                
                </form>
            </div>

            <div className="col-lg-5 col-sm-12">
                <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                    <span className="text-muted">We are Professionals</span>
                    <h2 className="mb-5 mt-2">Don’t Hesitate to contact with us for any kind of information</h2>

                    <ul className="address-block list-unstyled">
                        <li>
                            <i className="ti-direction mr-3"></i>jaiprakash Nagar,Nagpur Road Itarsi
                        </li>
                        <li>
                            <i className="ti-email mr-3"></i>Email: sushilpathariya@mail.com
                        </li>
                        <li>
                            <i className="ti-mobile mr-3"></i>Phone:+919111621119
                        </li>
                    </ul>

                    <ul className="social-icons list-inline mt-5">
                        <li className="list-inline-item">
                            <a href="http://www.facebook.com/sushilpathariya"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="http://www.twitter.com/sushilpathariya"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="http://www.linkedin.com/in/sushilpathariya"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
   </div>
  );
}
}
export default Contact;
