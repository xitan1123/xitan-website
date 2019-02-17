import React from 'react'

import carousel from './assets/img/wallhaven-165231.jpg'
import carousel1 from './assets/img/wallhaven-385770-01.jpg'

export const Footer = props => (
  <footer className="footer mt-auto py-3">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <span className="text-light">
            #TITLE#
          </span>
        </div>

        <div className="col">
        </div>

        <div className="col">
          <ul className="list-unstyled text-light text-right">
            <li>联系方式</li>

            <li>
              <i className="fa fa-fw fa-phone"></i>
              #12332112345#
            </li>

            <li>
              <i className="fa fa-fw fa-envelope-o"></i>
              #e-mail#
            </li>
          </ul>
        </div>

        <div className="col">
          <span className="pull-right">
            <a href="#" className="text-light">返回顶部</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
)

export const Carousel = props => (
  <div id="block-carousel" className="carousel slide carousel-fade" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#block-carousel" data-slide-to="0" className="active"></li>
      <li data-target="#block-carousel" data-slide-to="1"></li>
    </ol>

    <div className="carousel-inner">
      <div className="carousel-item active" data-interval="3000">
        <img src={carousel} className="d-block w-100" alt="..." />

        <div className="carousel-caption d-none d-md-block">
          <h2>IT咨询</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={carousel1} className="d-block w-100" alt="..." />

        <div className="carousel-caption d-none d-md-block">
          <h2>技术服务</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </div>

    <a className="carousel-control-prev" href="#block-carousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#block-carousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
)

export const Navbar = props => (
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">#TITLE#</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            首页
            <span className="sr-only">(current)</span>
          </a>
        </li>

        <li className="nav-item active">
          <a className="nav-link" href="#title-consult">IT咨询</a>
        </li>

        <li className="nav-item active">
          <a className="nav-link" href="#title-tech">技术服务</a>
        </li>

        <li className="nav-item active">
          <a className="nav-link" href="#title-hr">人才服务</a>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item active pull-right">
          <a className="nav-link" href="#title-contact">联系方式</a>
        </li>
      </ul>
    </div>
  </nav>
)