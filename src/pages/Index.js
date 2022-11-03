            import React, {Fragment} from 'react';

            function Index(){
                return (
                    <Fragment>

  <div className="site-wrap" id="home-section">
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle" />
        </div>
      </div>
      <div className="site-mobile-menu-body" />
    </div>
    <div className="bg-primary py-3 top-bar shadow d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-md-left pl-0">
            <a href="#" className=" pr-3 pl-0">
              Home
            </a>
            <a href="#" className="p-3">
              Events
            </a>
            <a href="#" className="p-3">
              Become A Volunteer
            </a>
          </div>
          <div className="col-md-6 text-md-right">
            <a href="#" className="p-3">
              <span className="icon-twitter" />
            </a>
            <a href="#" className="p-3">
              <span className="icon-facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <header
      className="site-navbar site-navbar-target bg-secondary shadow"
      role="banner"
    >
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="site-logo">
            <a href="index.html" className="text-white">
              <img src="/amannatrustlogo.png" style={{borderRadius:"90px",width:"150px",height:"150px"}}/>
            </a>
          </div>
          <nav className="site-navigation text-left ml-auto " role="navigation">
            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
              <li className="active">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html" className="nav-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="causes.html" className="nav-link">
                  Our Causes
                </a>
              </li>
              <li>
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="ml-auto toggle-button d-inline-block d-lg-none">
            <a
              href="#"
              className="site-menu-toggle py-5 js-menu-toggle text-white"
            >
              <span className="icon-menu h3 text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
    <div className="owl-carousel-wrapper">
      <div className="box-92819">
        <h1 className="text-white mb-3">
          Join The Movement To end Child Poverty
        </h1>
        <p>
          <a href="#" className="btn btn-primary py-3 px-4 rounded-0">
            Donate Now
          </a>
        </p>
      </div>
      <div className="owl-carousel owl-1 ">
        <div
          className="ftco-cover-1 overlay"
          style={{ backgroundImage: 'url("assets/images/hero_1.jpg")' }}
        />
        <div
          className="ftco-cover-1 overlay"
          style={{ backgroundImage: 'url("assets/images/hero_2.jpg")' }}
        />
        <div
          className="ftco-cover-1 overlay"
          style={{ backgroundImage: 'url("assets/images/hero_3.jpg")' }}
        />
      </div>
    </div>
    <div className="container">
      <div
        className="feature-29192-wrap d-md-flex"
        style={{ marginTop: "-20px", position: "relative", zIndex: 2 }}
      >
        <a
          href="#"
          className="feature-29192 overlay-danger"
          style={{ backgroundImage: 'url("assets/images/img_3_gray.jpg")' }}
        >
          <div className="text">
            <span className="meta">Livelihood</span>
            <h3 className="text-cursive text-white h1">Livelihood</h3>
          </div>
        </a>
        <a
          className="feature-29192 overlay-success"
          style={{ backgroundImage: 'url("assets/img_2_gray.jpg")' }}
        >
          <div className="text">
            <span className="meta">Health</span>
            <h3 className="text-cursive text-white h1">Natural Remedies</h3>
          </div>
        </a>
        <div
          className="feature-29192 overlay-warning"
          style={{ backgroundImage: 'url("assets/img_1_gray.jpg")' }}
        >
          <div className="text">
            <span className="meta">School</span>
            <h3 className="text-cursive text-white h1">New Class Rooms</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row mb-5 align-items-st">
          <div className="col-md-4">
            <div className="heading-20219">
              <h2 className="title text-cursive">Latest Causes</h2>
            </div>
          </div>
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ea
              reprehenderit rerum magnam, ipsum aperiam. Earum, expedita
              ratione.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="cause shadow-sm">
              <a href="#" className="cause-link d-block">
                <img src="assets/images/img_1.jpg" alt="Image" className="img-fluid" />
                <div className="custom-progress-wrap">
                  <span className="caption">80% complete</span>
                  <div className="custom-progress-inner">
                    <div
                      className="custom-progress bg-danger"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
              </a>
              <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                <span className="badge-danger py-1 small px-2 rounded mb-3 d-inline-block">
                  School
                </span>
                <h3 className="mb-4">
                  <a href="#">Alias Odit Ipsam Quas Unde Obcaecati</a>
                </h3>
                <div className="border-top border-light border-bottom py-2 d-flex">
                  <div>Donated</div>
                  <div className="ml-auto">
                    <strong className="text-primary">$32,919</strong>
                  </div>
                </div>
                <div className="py-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      className="rounded-circle mr-3"
                      width={50}
                    />
                    <div className="">James Smith</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cause shadow-sm">
              <a href="#" className="cause-link d-block">
                <img src="assets/images/img_2.jpg" alt="Image" className="img-fluid" />
                <div className="custom-progress-wrap">
                  <span className="caption">80% complete</span>
                  <div className="custom-progress-inner">
                    <div
                      className="custom-progress bg-primary"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
              </a>
              <div className="px-3 pt-3 border-top-0 border border shadow-sm">
                <span className="badge-primary py-1 small px-2 rounded mb-3 d-inline-block">
                  Health
                </span>
                <h3 className="mb-4">
                  <a href="#">Alias Odit Ipsam Quas Unde Obcaecati</a>
                </h3>
                <div className="border-top border-light border-bottom py-2 d-flex">
                  <div>Donated</div>
                  <div className="ml-auto">
                    <strong className="text-primary">$32,919</strong>
                  </div>
                </div>
                <div className="py-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      className="rounded-circle mr-3"
                      width={50}
                    />
                    <div className="">James Smith</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cause shadow-sm">
              <a href="#" className="cause-link d-block">
                <img src="assets/images/img_3.jpg" alt="Image" className="img-fluid" />
                <div className="custom-progress-wrap">
                  <span className="caption">80% complete</span>
                  <div className="custom-progress-inner">
                    <div
                      className="custom-progress bg-warning"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
              </a>
              <div className="px-3 pt-3 border-top-0 border border ">
                <span className="badge-warning py-1 small px-2 rounded mb-3 d-inline-block">
                  Livelihood
                </span>
                <h3 className="mb-4">
                  <a href="#">Alias Odit Ipsam Quas Unde Obcaecati</a>
                </h3>
                <div className="border-top border-light border-bottom py-2 d-flex">
                  <div>Donated</div>
                  <div className="ml-auto">
                    <strong className="text-primary">$32,919</strong>
                  </div>
                </div>
                <div className="py-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      className="rounded-circle mr-3"
                      width={50}
                    />
                    <div className="">James Smith</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="bg-image overlay site-section"
      style={{ backgroundImage: 'url("assets/images/hero_1.jpg")' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row mb-5">
              <div className="col-md-7">
                <div className="heading-20219">
                  <h2 className="title text-white mb-4 text-cursive">
                    Why Choose Us
                  </h2>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt ipsam repellendus voluptatum, totam magni iusto
                    numquam quo eos dolor perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>1</span>
                  </div>
                  <div>
                    <h3>Odit Reiciendis</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi id sint explicabo odit reiciendis eaque accusamus
                      labore necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>2</span>
                  </div>
                  <div>
                    <h3>Nisi Sint Explicabo</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi id sint explicabo odit reiciendis eaque accusamus
                      labore necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>3</span>
                  </div>
                  <div>
                    <h3>Accusamus Labore Necessitatibus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi id sint explicabo odit reiciendis eaque accusamus
                      labore necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>4</span>
                  </div>
                  <div>
                    <h3>Consectetur Dolor Elit</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nisi id sint explicabo odit reiciendis eaque accusamus
                      labore necessitatibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="heading-20219 mb-5">
        <h2 className="title text-cursive">Latest Event</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="event-29191 mb-5">
            <a href="#" className="d-block mb-3">
              <img
                src="assets/images/img_1.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </a>
            <div className="px-3 d-flex">
              <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                <span className="text-white h3 m-0 d-block">22</span>
                <span className="text-white small">Oct 2019</span>
              </div>
              <div>
                <div className="mb-3">
                  <span className="mr-3">
                    {" "}
                    <span className="icon-clock-o mr-2 text-muted" />
                    9:30 AM — 11:30 AM
                  </span>
                  <span>
                    {" "}
                    <span className="icon-room mr-2 text-muted" />
                    Ghana Africa
                  </span>
                </div>
                <h3>
                  <a href="single.html">
                    Ratione Delectus Assumenda Rem Modi Quaerat Laborum
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="event-29191 mb-5">
            <a href="#" className="d-block mb-3">
              <img
                src="assets/images/img_2.jpg"
                alt="Image"
                className="img-fluid rounded"
              />
            </a>
            <div className="px-3 d-flex">
              <div className="bg-primary p-3 d-inline-block text-center rounded mr-4 date">
                <span className="text-white h3 m-0 d-block">22</span>
                <span className="text-white small">Oct 2019</span>
              </div>
              <div>
                <div className="mb-3">
                  <span className="mr-3">
                    {" "}
                    <span className="icon-clock-o mr-2 text-muted" />
                    9:30 AM — 11:30 AM
                  </span>
                  <span>
                    {" "}
                    <span className="icon-room mr-2 text-muted" />
                    Ghana Africa
                  </span>
                </div>
                <h3>
                  <a href="single.html">
                    Ratione Delectus Assumenda Rem Modi Quaerat Laborum
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="site-section bg-image overlay-primary"
    style={{ backgroundImage: 'url("assets/images/img_1.jpg")' }}
  >
    <div className="container">
      <div className="row align-items-stretch">
        <div className="col-md-6">
          <img
            src="assets/images/img_1.jpg"
            alt="Image"
            className="img-fluid shadow"
          />
        </div>
        <div className="col-md-6">
          <div className="bg-white h-100 p-4 shadow">
            <h3 className="mb-4 text-cursive">Donate Now</h3>
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Amount in dollar"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  defaultValue="Donate Now"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="d-md-flex cta-20101 align-self-center bg-light p-5">
        <div className="">
          <h2 className="text-cursive">
            Helping the Homeless, Hungry, and Hurtings Children
          </h2>
        </div>
        <div className="ml-auto">
          <a href="#" className="btn btn-primary">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  </div>
  <footer className="site-footer bg-white">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-7">
              <h2 className="footer-heading mb-4">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                modi, quaerat laborum id fugit blanditiis ratione delectus
                assumenda.
              </p>
            </div>
            <div className="col-md-4 ml-auto">
              <h2 className="footer-heading mb-4">Features</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 ml-auto">
          <div className="mb-5">
            <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
            <form action="#" method="post" className="footer-suscribe-form">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control rounded-0 border-secondary text-white bg-transparent"
                  placeholder="Enter Email"
                  aria-label="Enter Email"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary text-white"
                    type="button"
                    id="button-addon2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <h2 className="footer-heading mb-4">Follow Us</h2>
          <a href="#about-section" className="smoothscroll pl-0 pr-3">
            <span className="icon-facebook" />
          </a>
          <a href="#" className="pl-3 pr-3">
            <span className="icon-twitter" />
          </a>
          <a href="#" className="pl-3 pr-3">
            <span className="icon-instagram" />
          </a>
          <a href="#" className="pl-3 pr-3">
            <span className="icon-linkedin" />
          </a>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <div className="pt-5">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>



                  
                    </Fragment>
                )
            }

            export default Index;