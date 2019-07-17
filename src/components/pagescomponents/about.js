import React  from 'react'
import { Link } from 'react-router-dom';


class About extends React.Component  {
  render(){
  return (


    <div>
      <section className="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">About Us</span>
          <h1 className="text-capitalize mb-4 text-lg">Our Company</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to={"/"}  className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to={"/about"} className="text-white-50">About Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    <section className="section about-2 position-relative">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="about-item pr-3 mb-5 mb-lg-0">
            <span className="h6 text-color">What we are</span>
            <h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
            <p className="mb-5">We provide consulting services in the area of Web and Mobile Application  and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
  
            <Link to={'/Contact'} className="btn btn-main btn-round-full">Get started</Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="about-item-img">
            <img src="images/about/home-7.jpg" alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  

   
  <section className="about-info section pt-0">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-info-item mb-4 mb-lg-0">
            <h3 className="mb-3"><span className="text-color mr-2 text-md ">01.</span>Our Mission</h3>
            <p>To provide Unique and Cost Efficient Product and Services to all our client, and make a good foot mark in this Software industry  .</p>
          </div>		
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-info-item mb-4 mb-lg-0">
            <h3 className="mb-3"><span className="text-color mr-2 text-md">02.</span>Vission</h3>
            <p>To make this world a better place to Survive with providing unique idea to implement with the IT industry .</p>
          </div>		
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="about-info-item mb-4 mb-lg-0">
            <h3 className="mb-3"><span className="text-color mr-2 text-md">03.</span>Our Approach</h3>
            <p>We always take project in taking requirement in detail with Agile approach to make the application better  .</p>
          </div>		
        </div>
      </div>
    </div>
  </section>
  
  
  <section className="section counter bg-counter">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <i className="ti-check color-one text-md"></i>
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">1730</span> +</h3>
            <p className="text-white-50">Project Done</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <i className="ti-flag color-one text-md"></i>
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">125 </span>M </h3>
            <p className="text-white-50">User Worldwide</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center mb-5 mb-lg-0">
            <i className="ti-layers color-one text-md"></i>
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">39</span></h3>
            <p className="text-white-50">Availble Country</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="counter-item text-center">
            <i className="ti-medall color-one  text-md"></i>
            <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">14</span></h3>
            <p className="text-white-50">Award Winner </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
 
  
  </div>

     
  );
}
}
export default About;
