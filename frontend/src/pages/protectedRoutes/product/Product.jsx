import React from 'react'

export default function Product() {
  return (
   <div>
  <div>
    {/* Topbar Start */}
    <div className="container-fluid">
      <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center h-100">
            <a className="text-body mr-3" href>About</a>
            <a className="text-body mr-3" href>Contact</a>
            <a className="text-body mr-3" href>Help</a>
            <a className="text-body mr-3" href>FAQs</a>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">Sign in</button>
                <button className="dropdown-item" type="button">Sign up</button>
              </div>
            </div>
            <div className="btn-group mx-2">
              <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">EUR</button>
                <button className="dropdown-item" type="button">GBP</button>
                <button className="dropdown-item" type="button">CAD</button>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">FR</button>
                <button className="dropdown-item" type="button">AR</button>
                <button className="dropdown-item" type="button">RU</button>
              </div>
            </div>
          </div>
          <div className="d-inline-flex align-items-center d-block d-lg-none">
            <a href className="btn px-0 ml-2">
              <i className="fas fa-heart text-dark" />
              <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: 2}}>0</span>
            </a>
            <a href className="btn px-0 ml-2">
              <i className="fas fa-shopping-cart text-dark" />
              <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: 2}}>0</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <a href className="text-decoration-none">
            <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
          </a>
        </div>
        <div className="col-lg-4 col-6 text-left">
          <form action>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for products" />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-6 text-right">
          <p className="m-0">Customer Service</p>
          <h5 className="m-0">+012 345 6789</h5>
        </div>
      </div>
    </div>
    {/* Topbar End */}
    {/* Navbar Start */}
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, padding: '0 30px'}}>
            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2" />Categories</h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: 999}}>
            <div className="navbar-nav w-100">
              <div className="nav-item dropdown dropright">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1" /></a>
                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                  <a href className="dropdown-item">Men's Dresses</a>
                  <a href className="dropdown-item">Women's Dresses</a>
                  <a href className="dropdown-item">Baby's Dresses</a>
                </div>
              </div>
              <a href className="nav-item nav-link">Shirts</a>
              <a href className="nav-item nav-link">Jeans</a>
              <a href className="nav-item nav-link">Swimwear</a>
              <a href className="nav-item nav-link">Sleepwear</a>
              <a href className="nav-item nav-link">Sportswear</a>
              <a href className="nav-item nav-link">Jumpsuits</a>
              <a href className="nav-item nav-link">Blazers</a>
              <a href className="nav-item nav-link">Jackets</a>
              <a href className="nav-item nav-link">Shoes</a>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <a href className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <a href="index.html" className="nav-item nav-link">Home</a>
                <a href="shop.html" className="nav-item nav-link active">Shop</a>
                <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1" /></a>
                  <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <a href className="btn px-0">
                  <i className="fas fa-heart text-primary" />
                  <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: 2}}>0</span>
                </a>
                <a href className="btn px-0 ml-3">
                  <i className="fas fa-shopping-cart text-primary" />
                  <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: 2}}>0</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* Navbar End */}
    {/* Breadcrumb Start */}
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <a className="breadcrumb-item text-dark" href="#">Home</a>
            <a className="breadcrumb-item text-dark" href="#">Shop</a>
            <span className="breadcrumb-item active">Shop List</span>
          </nav>
        </div>
      </div>
    </div>
    {/* Breadcrumb End */}
    {/* Shop Start */}
    <div className="container-fluid">
      <div className="row px-xl-5">
        {/* Shop Sidebar Start */}
        <div className="col-lg-3 col-md-4">
          {/* Price Start */}
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                <label className="custom-control-label" htmlFor="price-all">All Price</label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-1" />
                <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-2" />
                <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-3" />
                <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="price-4" />
                <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="price-5" />
                <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
          {/* Price End */}
          {/* Color Start */}
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
                <label className="custom-control-label" htmlFor="price-all">All Color</label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-1" />
                <label className="custom-control-label" htmlFor="color-1">Black</label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-2" />
                <label className="custom-control-label" htmlFor="color-2">White</label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-3" />
                <label className="custom-control-label" htmlFor="color-3">Red</label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="color-4" />
                <label className="custom-control-label" htmlFor="color-4">Blue</label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="color-5" />
                <label className="custom-control-label" htmlFor="color-5">Green</label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
          {/* Color End */}
          {/* Size Start */}
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" defaultChecked id="size-all" />
                <label className="custom-control-label" htmlFor="size-all">All Size</label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-1" />
                <label className="custom-control-label" htmlFor="size-1">XS</label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-2" />
                <label className="custom-control-label" htmlFor="size-2">S</label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-3" />
                <label className="custom-control-label" htmlFor="size-3">M</label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input type="checkbox" className="custom-control-input" id="size-4" />
                <label className="custom-control-label" htmlFor="size-4">L</label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input type="checkbox" className="custom-control-input" id="size-5" />
                <label className="custom-control-label" htmlFor="size-5">XL</label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
          {/* Size End */}
        </div>
        {/* Shop Sidebar End */}
        {/* Shop Product Start */}
        <div className="col-lg-9 col-md-8">
          <div className="row pb-3">
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <button className="btn btn-sm btn-light"><i className="fa fa-th-large" /></button>
                  <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars" /></button>
                </div>
                <div className="ml-2">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">Popularity</a>
                      <a className="dropdown-item" href="#">Best Rating</a>
                    </div>
                  </div>
                  <div className="btn-group ml-2">
                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">10</a>
                      <a className="dropdown-item" href="#">20</a>
                      <a className="dropdown-item" href="#">30</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-1.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-2.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star-half-alt text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-3.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star-half-alt text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-4.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-5.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-6.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star-half-alt text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-7.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star-half-alt text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-8.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="assets/img/product-9.jpg" alt />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                    <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(99)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Shop Product End */}
      </div>
    </div>
    {/* Shop End */}
    {/* Footer Start */}
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
      <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
          <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Home</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Our Shop</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Shop Detail</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Shopping Cart</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Checkout</a>
                <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2" />Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Home</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Our Shop</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Shop Detail</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Shopping Cart</a>
                <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2" />Checkout</a>
                <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2" />Contact Us</a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
              <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
              <form action>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Your Email Address" />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </div>
              </form>
              <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top mx-xl-5 py-4" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
        <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-secondary">
            © <a className="text-primary" href="#">Domain</a>. All Rights Reserved. Designed
            by
            <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a>
          </p>
        </div>
        <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="assets/img/payments.png" alt />
        </div>
      </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up" /></a>
    {/* JavaScript Libraries */}
    {/* Contact Javascript File */}
    {/* Template Javascript */}
  </div>

</div>
  )}
