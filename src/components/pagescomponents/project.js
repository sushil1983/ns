import React  from 'react'
import { Link } from 'react-router-dom';


class Project extends React.Component  {
  render(){
  return (

<div className="main-wrapper ">
<section className="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">Latest works</span>
          <h1 className="text-capitalize mb-4 text-lg">Portfolio</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to={'/'} className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to ={"/project"} className="text-white-50">Latest works</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section portfolio pb-0">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<span className="h6 text-color">Our works</span>
					<h2 className="mt-3 content-title ">We have done lots of works, lets check some</h2>
				</div>
			</div>
		</div>
	</div>

	<div className="container-fluid">
		<div className="row portfolio-gallery">
			<div className="col-lg-4 col-md-6">
				<div className="portflio-item position-relative mb-4">
					<a href="images/portfolio/1.png" className="popup-gallery">
						<img src="images/portfolio/1.png" alt=""  className="img-fluid w-100"/>

						<i className="ti-plus overlay-item"></i>
						<div className="portfolio-item-content">
							<h3 className="mb-0 text-white">Project Matrimony</h3>
							<p className="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>

			<div className="col-lg-4 col-md-6">
				<div className="portflio-item position-relative mb-4">
					<a href="images/portfolio/2.png" target="_blank" className="popup-gallery">
						<img src="images/portfolio/2.png" alt="" className="img-fluid w-100"/>

						<i className="ti-plus overlay-item"></i>
						<div className="portfolio-item-content">
							<h3 className="mb-0 text-white">Project London & Kent</h3>
							<p className="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>

			<div className="col-lg-4 col-md-6">
				<div className="portflio-item position-relative mb-4">
					<a href="images/portfolio/3.png" className="popup-gallery">
						<img src="images/portfolio/3.png" alt="" className="img-fluid w-100"/>

						<i className="ti-plus overlay-item"></i>
						<div className="portfolio-item-content">
							<h3 className="mb-0 text-white">Project Education</h3>
							<p className="text-white-50">Web Development</p>
						</div>
					</a>
				</div>
			</div>


			
		</div>
	</div>
</section>


</div>



 );
}
}
export default Project;
