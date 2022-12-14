import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';



export default function ProductDetails() {
	const [category,setCategory]=useState(['Products','Products Details','Checkout','Cart','Login'])
		const [Blogcategory,setBlogCategory]=useState(['Blog List', 'Blog Single'])
  return (
   
<>
<header id="header">
		<div className="header_top">
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<div className="contactinfo">
							<ul className="nav nav-pills">
								<li><a href=""><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
								<li><a href=""><i className="fa fa-envelope"></i> info@domain.com</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="social-icons pull-right">
							<ul className="nav navbar-nav">
								<li><a href=""><i className="fa fa-facebook"></i></a></li>
								<li><a href=""><i className="fa fa-twitter"></i></a></li>
								<li><a href=""><i className="fa fa-linkedin"></i></a></li>
								<li><a href=""><i className="fa fa-dribbble"></i></a></li>
								<li><a href=""><i className="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="header-middle">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="logo pull-left">
							<a href="index.html"><img src="assests/images/home/logo.png" alt="" /></a>
						</div>
						<div className="btn-group pull-right">
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									USA
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><a href="">Canada</a></li>
									<li><a href="">UK</a></li>
								</ul>
							</div>
							
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									DOLLAR
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><a href="">Canadian Dollar</a></li>
									<li><a href="">Pound</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-8">
						<div className="shop-menu pull-right">
							<ul className="nav navbar-nav">
								<li><a href=""><i className="fa fa-user"></i> Account</a></li>
								<li><a href=""><i className="fa fa-star"></i> Wishlist</a></li>
								<li><a href="checkout.html"><i className="fa fa-crosshairs"></i> Checkout</a></li>
								<li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Cart</a></li>
								<li><a href="login.html"><i className="fa fa-lock"></i> Login</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div className="header-bottom">
			<div className="container">
				<div className="row">
					<div className="col-sm-9">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="mainmenu pull-left">
							<ul className="nav navbar-nav collapse navbar-collapse">
								<li><Link to="/">Home</Link></li>
								<li className="dropdown"><Link to="/shop">Shop<i className="fa fa-angle-down"></i></Link>
                                    <ul role="menu" className="sub-menu">
									{category?.map((cat,ind)=>
            
            <li key={ind}><Link className="dropdown-item" to={`/category/${cat}`}>{cat}</Link></li>
            
            )}
                                        {/* <li><a href="shop.html">Products</a></li>
										<li><a href="product-details.html" className="active">Product Details</a></li> 
										<li><a href="checkout.html">Checkout</a></li> 
										<li><a href="cart.html">Cart</a></li> 
										<li><a href="login.html">Login</a></li>  */}
                                    </ul>
                                </li> 
								<li className="dropdown"><Link to="/blog">Blog<i className="fa fa-angle-down"></i></Link>
                                    <ul role="menu" className="sub-menu">
                                        <li><a href="blog.html">Blog List</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li> 
								<li><Link to="/404">404</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<section>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<div className="left-sidebar">
						<h2>Category</h2>
						<div className="panel-group category-products" id="accordian">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Sportswear
										</a>
									</h4>
								</div>
								<div id="sportswear" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a href="">Nike </a></li>
											<li><a href="">Under Armour </a></li>
											<li><a href="">Adidas </a></li>
											<li><a href="">Puma</a></li>
											<li><a href="">ASICS </a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#mens">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Mens
										</a>
									</h4>
								</div>
								<div id="mens" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a href="">Fendi</a></li>
											<li><a href="">Guess</a></li>
											<li><a href="">Valentino</a></li>
											<li><a href="">Dior</a></li>
											<li><a href="">Versace</a></li>
											<li><a href="">Armani</a></li>
											<li><a href="">Prada</a></li>
											<li><a href="">Dolce and Gabbana</a></li>
											<li><a href="">Chanel</a></li>
											<li><a href="">Gucci</a></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title">
										<a data-toggle="collapse" data-parent="#accordian" href="#womens">
											<span className="badge pull-right"><i className="fa fa-plus"></i></span>
											Womens
										</a>
									</h4>
								</div>
								<div id="womens" className="panel-collapse collapse">
									<div className="panel-body">
										<ul>
											<li><a href="">Fendi</a></li>
											<li><a href="">Guess</a></li>
											<li><a href="">Valentino</a></li>
											<li><a href="">Dior</a></li>
											<li><a href="">Versace</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Kids</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Fashion</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Households</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Interiors</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Clothing</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Bags</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title"><a href="#">Shoes</a></h4>
								</div>
							</div>
						</div>
					
						<div className="brands_products">
							<h2>Brands</h2>
							<div className="brands-name">
								<ul className="nav nav-pills nav-stacked">
									<li><a href=""> <span className="pull-right">(50)</span>Acne</a></li>
									<li><a href=""> <span className="pull-right">(56)</span>Gr??ne Erde</a></li>
									<li><a href=""> <span className="pull-right">(27)</span>Albiro</a></li>
									<li><a href=""> <span className="pull-right">(32)</span>Ronhill</a></li>
									<li><a href=""> <span className="pull-right">(5)</span>Oddmolly</a></li>
									<li><a href=""> <span className="pull-right">(9)</span>Boudestijn</a></li>
									<li><a href=""> <span className="pull-right">(4)</span>R??sch creative culture</a></li>
								</ul>
							</div>
						</div>
						
						<div className="price-range">
							<h2>Price Range</h2>
							<div className="well">
								 <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
								 <b>$ 0</b> <b className="pull-right">$ 600</b>
							</div>
						</div>
						
						<div className="shipping text-center">
							<img src="assests/images/home/shipping.jpg" alt="" />
						</div>
						
					</div>
				</div>
				
				<div className="col-sm-9 padding-right">
					<div className="product-details">
						<div className="col-sm-5">
							<div className="view-product">
								<img src="assests/images/product-details/1.jpg" alt="" />
								<h3>ZOOM</h3>
							</div>
							<div id="similar-product" className="carousel slide" data-ride="carousel">
								
								  
								    <div className="carousel-inner">
										<div className="item active">
										  <a href=""><img src="assests/images/product-details/similar1.jpg" alt=""/></a>
										  <a href=""><img src="assests/images/product-details/similar2.jpg" alt=""/></a>
										  <a href=""><img src="assests/images/product-details/similar3.jpg" alt=""/></a>
										</div>
										<div className="item">
										  <a href=""><img src="assests/images/product-details/similar1.jpg" alt=""/></a>
										  <a href=""><img src="assests/images/product-details/similar2.jpg" alt=""/></a>
										  <a href=""><img src="assests/images/product-details/similar3.jpg" alt=""/></a>
										</div>
										<div className="item">
										  <a href=""><img src="assests/images/product-details/similar1.jpg" alt=""/></a>
										  <a href=""><img src="assests/images/product-details/similar2.jpg" alt=""/></a>
										  <a href=""><img src="assests/images/product-details/similar3.jpg" alt=""/></a>
										</div>
										
									</div>

								  
								  <a className="left item-control" href="#similar-product" data-slide="prev">
									<i className="fa fa-angle-left"></i>
								  </a>
								  <a className="right item-control" href="#similar-product" data-slide="next">
									<i className="fa fa-angle-right"></i>
								  </a>
							</div>

						</div>
						<div className="col-sm-7">
							<div className="product-information">
								<img src="assests/images/product-details/new.jpg" className="newarrival" alt="" />
								<h2>Anne Klein Sleeveless Colorblock Scuba</h2>
								<p>Web ID: 1089772</p>
								<img src="assests/images/product-details/rating.png" alt="" />
								<span>
									<span>US $59</span>
									<label>Quantity:</label>
									<input type="text" value="3" />
									<button type="button" className="btn btn-fefault cart">
										<i className="fa fa-shopping-cart"></i>
										Add to cart
									</button>
								</span>
								<p><b>Availability:</b> In Stock</p>
								<p><b>Condition:</b> New</p>
								<p><b>Brand:</b> E-SHOPPER</p>
								<a href=""><img src="assests/images/product-details/share.png" className="share img-responsive"  alt="" /></a>
							</div>
						</div>
					</div>
					
					<div className="category-tab shop-details-tab">
						<div className="col-sm-12">
							<ul className="nav nav-tabs">
								<li><a href="#details" data-toggle="tab">Details</a></li>
								<li><a href="#companyprofile" data-toggle="tab">Company Profile</a></li>
								<li><a href="#tag" data-toggle="tab">Tag</a></li>
								<li className="active"><a href="#reviews" data-toggle="tab">Reviews (5)</a></li>
							</ul>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade" id="details" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="companyprofile" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade" id="tag" >
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery1.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery2.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery3.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="assests/images/home/gallery4.jpg" alt="" />
												<h2>$56</h2>
												<p>Easy Polo Black Edition</p>
												<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="tab-pane fade active in" id="reviews" >
								<div className="col-sm-12">
									<ul>
										<li><a href=""><i className="fa fa-user"></i>EUGEN</a></li>
										<li><a href=""><i className="fa fa-clock-o"></i>12:41 PM</a></li>
										<li><a href=""><i className="fa fa-calendar-o"></i>31 DEC 2014</a></li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
									<p><b>Write Your Review</b></p>
									
									<form action="#">
										<span>
											<input type="text" placeholder="Your Name"/>
											<input type="email" placeholder="Email Address"/>
										</span>
										<textarea name="" ></textarea>
										<b>Rating: </b> <img src="assests/images/product-details/rating.png" alt="" />
										<button type="button" className="btn btn-default pull-right">
											Submit
										</button>
									</form>
								</div>
							</div>
							
						</div>
					</div>
					
					<div className="recommended_items">
						<h2 className="title text-center">recommended items</h2>
						
						<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner">
								<div className="item active">	
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="assests/images/home/recommend1.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="assests/images/home/recommend2.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="assests/images/home/recommend3.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">	
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="assests/images/home/recommend1.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="assests/images/home/recommend2.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="product-image-wrapper">
											<div className="single-products">
												<div className="productinfo text-center">
													<img src="assests/images/home/recommend3.jpg" alt="" />
													<h2>$56</h2>
													<p>Easy Polo Black Edition</p>
													<button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							 <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
								<i className="fa fa-angle-left"></i>
							  </a>
							  <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
								<i className="fa fa-angle-right"></i>
							  </a>			
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
	
	<footer id="footer">
		<div className="footer-top">
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
						<div className="companyinfo">
							<h2><span>e</span>-shopper</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
						</div>
					</div>
					<div className="col-sm-7">
						<div className="col-sm-3">
							<div className="video-gallery text-center">
								<a href="#">
									<div className="iframe-img">
										<img src="assests/images/home/iframe1.png" alt="" />
									</div>
									<div className="overlay-icon">
										<i className="fa fa-play-circle-o"></i>
									</div>
								</a>
								<p>Circle of Hands</p>
								<h2>24 DEC 2014</h2>
							</div>
						</div>
						
						<div className="col-sm-3">
							<div className="video-gallery text-center">
								<a href="#">
									<div className="iframe-img">
										<img src="assests/images/home/iframe2.png" alt="" />
									</div>
									<div className="overlay-icon">
										<i className="fa fa-play-circle-o"></i>
									</div>
								</a>
								<p>Circle of Hands</p>
								<h2>24 DEC 2014</h2>
							</div>
						</div>
						
						<div className="col-sm-3">
							<div className="video-gallery text-center">
								<a href="#">
									<div className="iframe-img">
										<img src="assests/images/home/iframe3.png" alt="" />
									</div>
									<div className="overlay-icon">
										<i className="fa fa-play-circle-o"></i>
									</div>
								</a>
								<p>Circle of Hands</p>
								<h2>24 DEC 2014</h2>
							</div>
						</div>
						
						<div className="col-sm-3">
							<div className="video-gallery text-center">
								<a href="#">
									<div className="iframe-img">
										<img src="assests/images/home/iframe4.png" alt="" />
									</div>
									<div className="overlay-icon">
										<i className="fa fa-play-circle-o"></i>
									</div>
								</a>
								<p>Circle of Hands</p>
								<h2>24 DEC 2014</h2>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="address">
							<img src="assests/images/home/map.png" alt="" />
							<p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="footer-widget">
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
						<div className="single-widget">
							<h2>Service</h2>
							<ul className="nav nav-pills nav-stacked">
								<li><a href="">Online Help</a></li>
								<li><a href="">Contact Us</a></li>
								<li><a href="">Order Status</a></li>
								<li><a href="">Change Location</a></li>
								<li><a href="">FAQ???s</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="single-widget">
							<h2>Quock Shop</h2>
							<ul className="nav nav-pills nav-stacked">
								<li><a href="">T-Shirt</a></li>
								<li><a href="">Mens</a></li>
								<li><a href="">Womens</a></li>
								<li><a href="">Gift Cards</a></li>
								<li><a href="">Shoes</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="single-widget">
							<h2>Policies</h2>
							<ul className="nav nav-pills nav-stacked">
								<li><a href="">Terms of Use</a></li>
								<li><a href="">Privecy Policy</a></li>
								<li><a href="">Refund Policy</a></li>
								<li><a href="">Billing System</a></li>
								<li><a href="">Ticket System</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="single-widget">
							<h2>About Shopper</h2>
							<ul className="nav nav-pills nav-stacked">
								<li><a href="">Company Information</a></li>
								<li><a href="">Careers</a></li>
								<li><a href="">Store Location</a></li>
								<li><a href="">Affillate Program</a></li>
								<li><a href="">Copyright</a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-3 col-sm-offset-1">
						<div className="single-widget">
							<h2>About Shopper</h2>
							<form action="#" className="searchform">
								<input type="text" placeholder="Your email address" />
								<button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
								<p>Get the most recent updates from <br />our site and be updated your self...</p>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					<p className="pull-left">Copyright ?? 2013 E-SHOPPER Inc. All rights reserved.</p>
					<p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
				</div>
			</div>
		</div>
		
	</footer>
	

</>



  )
}
