import React from "react";
import "./Header.css";
import shopping_cart from "../../svgs/shopping-cart.svg";
import banner_img from "../../img/banner-img.png";
import icon_comfort from "../../img/icon-yoga.png";
import icon_up from "../../img/icon-up.png";
import icon_box from "../../img/icon-box.png";
import icon_twitter from "../../img/icon-twitter.png";

const Header: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <a href="#">
            <div className="header-logo">Cozy</div>
          </a>
          <div className="header-menu-empty"></div>
          <ul className="header-menu">
            <li>
              <a href="#" className="header-link">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="header-link">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="header-link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="header-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="header-btns">
            <button className="header-signIn">Sign In</button>
            <button className="header-signUp">Sign Up</button>
            <a href="">
              <div className="shop-line"></div>
              <img src={shopping_cart} className="header-shop" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="header-line"></div>
      <div className="container">
        <div className="header-banner ">
          <div className="banner-content">
            <h1 className="banner-title">
              Perfect <br />
              Harmony: <br />
              Comfort & Style
            </h1>
            <div className="banner-desc">
              Explore furniture that harmoniously combines comfort and style to
              elevate your home
            </div>
            <button className="banner-btn">Explore Our Offers</button>
            <div className="banner-extra">
              <div className="banner-card">
                <div className="bannerCard-tit">Comfort</div>
                <div className="banner-img">
                  <img src={icon_comfort} alt="" />
                  <span className="bannerCard-span">Cozy Seating</span>
                </div>
              </div>
              <div className="banner-card">
                <div className="bannerCard-tit">Quality Assurance</div>
                <div className="banner-img">
                  <img src={icon_up} alt="" />
                  <span className="bannerCard-span">Cozy Seating</span>
                </div>
              </div>
              <div className="banner-card">
                <div className="bannerCard-tit">Free Shipping</div>
                <div className="banner-img">
                  <img src={icon_box} alt="" />
                  <span className="bannerCard-span">No-Cost Delivery</span>
                </div>
              </div>
              <hr className="banner-hr" />
              <div className="banner-card">
                <div className="bannerCard-tit">Secure Checkout</div>
                <div className="banner-img">
                  <img src={icon_twitter} alt="" />
                  <span className="bannerCard-span">Secure Payments</span>
                </div>
              </div>
              <button className="banner-btn banner-btn-size">See More</button>
            </div>
          </div>
          <div className="banner-img">
            <img src={banner_img} alt="" />
          </div>
        </div>
      </div>
      <section className="header-sponsors">
        
      </section>
    </>
  );
};

export default Header;
