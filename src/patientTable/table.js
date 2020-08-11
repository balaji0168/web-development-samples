import React from 'react';
import { Table,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css';
const Tab = (props) => {
  return (<div>
<h1 className="text-center text-info font-weight-bold"><span>Ramaiah Ayurvedic Hospital</span></h1>
<h2 className="text-left font-weight-bold">Patient Details</h2>
<div class="sidebar">
  <a class="active" href="#home">MyHomePage</a>
  <a href="#">Lab</a>
  <a href="#contact">Patient Details</a>
  <a href="#contact">Reports</a>
  <a href="#contact">Prescription</a>

</div>
<div class="content">
    <Table id="patients">

      <tbody>
      <tr>
        <th scope="row">Pid</th>
        <td>Larry</td>
          </tr>
        <tr>
          <th scope="row">First Name</th>
          <td>Mark</td>  </tr>
        <tr>
          <th scope="row">Last Name</th>
          <td>Jacob</td>

        </tr><tr>
          <th scope="row">Address1</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">Address2</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">Gender</th>
          <td>female</td>
        </tr>
        <tr>
          <th scope="row">Age</th>
          <td>60</td>
        </tr>
        <tr>
          <th scope="row">City</th>
          <td>sjcnksjcnksjcn</td>
        </tr>
        <tr>
          <th scope="row">State</th>
          <td>Larrylsaskcnl</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>Larrylsaskcnl@gmail.com</td>
        </tr>

        <tr>
          <th scope="row">Pincode</th>
          <td>Larry</td>
        </tr>
      </tbody>

    </Table>

</div>  <Button size="lg" className="btn btn-info float-right">Submit</Button>
    </div>
  );
}

export default Tab;
