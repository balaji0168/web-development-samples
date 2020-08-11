import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col, FormGroup, Label,Input,Button} from 'reactstrap';
import "./Lab.css";
function Lab(){

  return(
<div>

<div class="sidebar">
  <a class="active" href="#home">Home</a>
  <a href="#">Lab</a>
  <a href="#contact">Patient Details</a>
  <a href="#contact">Reports</a>
  <a href="#contact">Prescription</a>
  
</div>
<div class="content">
  <h2 className="text-center bold"><span>WELCOME</span></h2>
  <p>Some info about the lab.</p>
  <p>Some info about the lab.</p>
  <p>Some info about the lab.</p>
<h2>Upload the files after checkup:</h2>

<Form>

<FormGroup  row>
     <Label for="file" sm={2} >Document1</Label>
     <Col >
       <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
     </Col>
     </FormGroup>
 <FormGroup  row>
      <Label for="file" sm={2} >Document1</Label>
      <Col >
        <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
      </Col>
      </FormGroup>
      <FormGroup  row>
           <Label for="file" sm={2} >Document1</Label>
           <Col >
             <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
           </Col>
           </FormGroup>
           <FormGroup  row>
                <Label for="file" sm={2} >Document1</Label>
                <Col >
                  <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
                </Col>
                </FormGroup>
                <div class="form-group">
                      <label for="info">Information about the checkup:</label>
                      <textarea class="form-control" rows="5"  id="info"></textarea>
                    </div>

  <FormGroup  row>
           <Label for="pid" sm={2}>PId:</Label><Col sm={2}>
           <Input type="text" name="pid" id="pid" /></Col>


             </FormGroup>

</Form>
<Button size="lg" className="btn btn-info float-right">Submit</Button>

</div>

</div>


  );
}
export default Lab;
