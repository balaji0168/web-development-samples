import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col, FormGroup,Row, Label,Input,Button} from 'reactstrap';
import "./Details.css";
function Details(){

  return(<div id="details">



<h1 className="text-center font-weight-bold"><span>Ramaiah Ayurvedic Hospital</span></h1>
<Form className="details-form">
<FormGroup row>
<Label for="opid" sm={4}><h4>Already old patient:</h4></Label><Col sm={2}>


   <Button id="opid" className="btn-dark btn ">Click here</Button></Col>
   </FormGroup>
   <h3>New patient enter the details below</h3>

<Row form>
       <Col md={4}>
         <FormGroup>
           <Label for="fname">First Name</Label>
           <Input type="text" name="fname" id="fname" placeholder="abc" />
         </FormGroup>
       </Col>
       <Col md={4}>
         <FormGroup>
           <Label for="lname">Last Name</Label>
           <Input type="lname" name="lname" id="lname" placeholder="z" />
         </FormGroup>
       </Col>
     </Row>
     <Row form>
     <Col md={4}>
     <FormGroup>
       <Label for="exampleAddress">Address</Label>
       <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
     </FormGroup>
     </Col>
     <Col md={4}>
     <FormGroup>
       <Label for="exampleAddress2">Address 2</Label>
       <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
     </FormGroup>
     </Col>
     </Row>
     <Row form>
       <Col md={2}>
         <FormGroup>
           <Label for="gender">Gender</Label>
           <Input type="gender" name="gander" id="gender"/>
         </FormGroup>
       </Col>
       <Col md={2}>
         <FormGroup>
           <Label for="age">Age</Label>
           <Input type="text" name="age" id="age"/>
         </FormGroup>
         </Col>
         <Col md={2}>
           <FormGroup>
             <Label for="phno">Phone No.</Label>
             <Input type="text" name="phno" id="phno" placeholder="1234567890"/>
           </FormGroup>
       </Col>

     </Row>
     <Row form>
       <Col md={2}>
         <FormGroup>
           <Label for="exampleCity">City</Label>
           <Input type="text" name="city" id="exampleCity"/>
         </FormGroup>
       </Col>
       <Col md={2}>
         <FormGroup>
           <Label for="exampleState">State</Label>
           <Input type="text" name="state" id="exampleState"/>
         </FormGroup>
         </Col>
         <Col md={4}>
           <FormGroup>
             <Label for="email">email</Label>
             <Input type="email" name="email" id="email" placeholder="abc@gmail.com"/>
           </FormGroup>
       </Col>

     </Row>
     <Row form>
       <Col md={2}>
         <FormGroup>
           <Label for="pid">PId</Label>
           <Input type="text" name="pid" id="pid"/>
         </FormGroup>
       </Col>
       </Row>
  <Button size="lg" className="btn btn-info float-right">Submit</Button>
</Form>
</div>
);
}
export default Details;
