import React  from 'react'

import {Link}   from 'react-router-dom';
class HomePage extends React.Component  {
  render(){
  return (
    <div className="main-wrapper ">

<section className="slider">
	<div className="container">
		<div className="row">
			<div className="col-lg-9 col-md-10">
				<div className="block">
					<span className="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
					<h1 className="animated fadeInUp mb-5">Our work is <br/>presentation of our <br/>capabilities.</h1>
					<Link to='\' target="_blank" className="btn btn-main animated fadeInUp btn-round-full" >Get started<i className="btn-icon fa fa-angle-right ml-2"></i></Link>
				</div>
			</div>
		</div>
	</div>
</section>


<section className="section intro">
	<div className="container">
		<div className="row ">
			<div className="col-lg-8">
				<div className="section-title">
					<span className="h6 text-color ">We are creative & expert people</span>
					<h2 className="mt-3 content-title">We work with business & provide solution to client with their business problem </h2>
				</div>
			</div>
		</div>
		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 col-12">
				<div className="intro-item mb-5 mb-lg-0"> 
					<i className="ti-desktop color-one"></i>
					<h4 className="mt-4 mb-3">Modern & Responsive design</h4>
					<p>All the application that we build are compatible with all kind of mobile device .</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6">
				<div className="intro-item mb-5 mb-lg-0">
					<i className="ti-medall color-one"></i> 
					<h4 className="mt-4 mb-3"> licensed company</h4>
					<p>we are registered company working since from the last 10 years .</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6">
				<div className="intro-item">
					<i className="ti-layers-alt color-one"></i>
					<h4 className="mt-4 mb-3">Build your website Professionally</h4>
					<p>we are team of Professionals and provide you always a great solution .</p>
				</div>
			</div> 
		</div>
	</div>
</section>



<section className="section about position-relative">
	<div className="bg-about"></div>
	<div className="container">
		<div className="row">
			<div className="col-lg-6 offset-lg-6 offset-md-0">
				<div className="about-item ">
					<span className="h6 text-color">What we are</span>
					<h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
					<div className="about-content">
						<h4 className="mb-3 position-relative">We are Perfect Solution</h4>
						<p className="mb-5">We provide consulting services in the area of Software and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>

						<Link to={'/'} className="btn btn-main btn-round-full">Get started</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section className="section counter">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">1730</span> +</h3>
					<p className="text-muted">Project Done</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">125 </span>M </h3>
					<p className="text-muted">User Worldwide</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center mb-5 mb-lg-0">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">39</span></h3>
					<p className="text-muted">Availble Country</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="counter-item text-center">
					<h3 className="mb-0"><span className="counter-stat font-weight-bold">14</span></h3>
					<p className="text-muted">Award Winner </p>
				</div>
			</div>
		</div>
	</div>
</section>


<section className="section service border-top">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-color">Our Services</span>
					<h2 className="mt-3 content-title ">We provide a wide range of creative services </h2>
				</div>
			</div>
		</div>

		<div className="row justify-content-center">
			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-desktop"></i>
					<h4 className="mb-3">Web development.</h4>
					<p>We provide Unqiuq Eye Catching desing and user friendly features to your web Applications</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-layers"></i>
					<h4 className="mb-3">Interface Design.</h4>
					<p>We deal with all kind of Interface design all features are User friendly </p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-bar-chart"></i>
					<h4 className="mb-3">Business Consulting.</h4>
					<p>we provide you best technology Stack to develop your application and consult your business in marketing as well </p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-vector"></i>
					<h4 className="mb-3">Branding.</h4>
					<p>we design unique logos and provide a Professional branding for your Business</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-android"></i>
					<h4 className="mb-3">App development.</h4>
					<p>We design and develop your mobile application on Android and Ios in native as well Hybrid technology</p>
				</div>
			</div>

			<div className="col-lg-4 col-md-6 col-sm-6">
				<div className="service-item mb-5">
					<i className="ti-pencil-alt"></i>
					<h4 className="mb-3">Content creation.</h4>
					<p>we write and promote digital content for your product which helps to grow your audience day by day.</p>
				</div>
			</div>

			
		</div>
	</div>
</section>
<section className="section cta">
	<div className="container">
		<div className="row">
			<div className="col-lg-5">
				<div className="cta-item  bg-white p-5 rounded">
					<span className="h6 text-color">We create for you</span>
					<h2 className="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
					<p className="lead mb-4">Have any project on mind? For immidiate support :</p>
					<h3><i className="ti-mobile mr-3 text-color"></i>+919111621119</h3>
					
				</div>
				
			</div>
		</div>
	</div>
	
</section>



</div>

);
}
}
export default HomePage;


