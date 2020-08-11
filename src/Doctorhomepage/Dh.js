import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col, FormGroup, Label,Input,Button,Card} from 'reactstrap';

import "./Dh.css";

function Dh(){

  return(
<div>
<div class="sidebar">
  <a class="active" href="#home">MyHomePage</a>
  <a href="#">Lab</a>
  <a href="#contact">Patient Details</a>
  <a href="#contact">Reports</a>
  <a href="#contact">Prescription</a>

</div>
<div class="content">
<div class="card-deck">
  <div class="card bg-info">
    <div class="card-body text-center">
    <h4 class="text-center bold">MySelf</h4>
    <img class="card-img-top" src="" alt="Card image"/>
      <p class="card-text">My name is Something </p>
      <p class="card-text">I know nothing</p>

    </div>
  </div>
  <div class="card bg-info">
    <div class="card-body text-center">
    <h4 class="text-center-top bold">Patient Details</h4>
    <img class="card-img-top" src="patient.jpg" alt="Card image"/>
      <p class="card-text">SWant to know some patient Details</p>
      <a href="#" class="btn btn-primary">See Details</a>
    </div>
  </div>
  <div class="card bg-info">
    <div class="card-body text-center">
    <h4 class="text-center bold">Reports</h4>
    <img class="card-img-top" src="reports.jpg" alt="Card image"/>
      <p class="card-text">Want to see some Reports</p>

      <a href="#" class="btn btn-primary">See Reports</a>
    </div>
  </div>
  <div class="card bg-info">
    <div class="card-body text-center">
    <h4 class="text-center bold">Question page</h4>
    <img class="card-img-top" src="question.jpg" alt="Card image"/>
      <p class="card-text">Want to know some Symptoms</p>
      <a href="#" class="btn btn-primary">Ask questions</a>
    </div>
    </div>
    <div class="card bg-info">
      <div class="card-body text-center">
      <h4 class="text-center bold">Write Description</h4>
      <img class="card-img-top" src="description.jpg" alt="Card image"/>
        <p class="card-text">Want to write Description</p>
        <a href="#" class="btn btn-primary">Description</a>
      </div>
      </div>

  </div>
</div>
</div>










);
}
export default Dh;
