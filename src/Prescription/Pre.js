import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col, FormGroup, Label,Input,Button,Card,Table} from 'reactstrap';

import "./Pre.css";

function Pre(){

  return(
    <div><h1 className="text-center text-info font-weight-bold"><span>Ramaiah Ayurvedic Hospital</span></h1>


    <div class="sidebar">
      <a class="active" href="#home">Home</a>
      <a href="#">Lab</a>
      <a href="#contact">Patient Details</a>
      <a href="#contact">Reports</a>
      <a href="#contact">Prescription</a>

    </div>
    <div class="content">
    <h2 className="text-left font-weight-bold">Prescription for a patient</h2>
<Form>
<FormGroup row>
      <Label for="sel" sm={2}><h4>Medicine</h4></Label>
      <Col sm={3}>
        <Input type="select" name="select" id="selt">
          <option>medicine01</option>
          <option>medicine02</option>
          <option>medicine03</option>
          <option>medicine04</option>
          <option>medicine05</option>
          <option>medicine06</option>
          <option>medicine07</option>
</Input>
      </Col>
      <Col sm={2}><h4>No.of tablets</h4></Col>
      <Col sm={2}>
        <Input type="select" name="select" id="selt">
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
          <option>30</option>
          <option>35</option>
</Input>
      </Col>
</FormGroup>

</Form>

<Button size="lg" className="btn btn-info float-right">Add</Button>


    <Table id="patients">

      <tbody>
      <tr>
        <th scope="col">Medicines</th>
        <th>No.of Tablets</th>


          </tr>
        <tr>
          <td ></td>
          <td></td>
</tr>
<tr>
  <td ></td>
  <td></td>
</tr>
<tr>
  <td ></td>
  <td></td>
</tr>
<tr>
  <td ></td>
  <td></td>
</tr>
<tr>
  <td ></td>
  <td></td>
</tr>
      </tbody>

    </Table>
    <Button size="lg" className="btn btn-info float-right">Submit</Button>


</div>
</div>









    );
    }
    export default Pre;
