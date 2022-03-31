import React from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import logo from './img/sofra.png';
import abda from './img/ibd3.png';
import bold from './img/bold.png';


export const Home = () => {

  //dashord

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h3>software engineer</h3>

            <h1>mohamedhamed</h1>
          </div>

          <div className="col-12 col-lg-6 ">
            <h2>portfolio </h2>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div  class="carousel-item active">
      <a align='center' href="href='https://mohamedhamednour.github.io/Sofra-site/'">go in site</a>
      <img  src={logo} class="d-block " alt="..."/>
    </div>
    <div  class="carousel-item">
      <img src={abda} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={bold} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


          </div>
        </div>
      </div>
<pre>











</pre>
<br />
<br />
      <div className="container">
        <div className="row">
          <div className="col-6 ">
          <div class="card">
      <div class="card-body">
        <h5 class="card-title">React js </h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>

          </div>

          <div className="col-6  ">

          <div class="card">
      <div class="card-body">
        <h5 class="card-title">Django</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>

          </div>
        
        </div>
      </div>

    </>
  );
};
