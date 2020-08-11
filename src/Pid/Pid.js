import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Form,Col, FormGroup, FormLabel,FormFeedback,Container,Row,Label,Input,Button,CustomInput} from 'reactstrap';
import "./Pid.css";
function Pid(){
  return(
    <div id="pid" class="pid">
    
<Form>
<h1 className="bold text-center text-info"><span>Ramaiah Ayurvedic Hospital</span></h1>
<h4 className="bold"><span>Upload the previous documents you have:</span></h4>
<FormGroup  row>
     <Label for="file" sm={2} >Document1</Label>
     <Col >
       <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
     </Col>
     </FormGroup>
     <FormGroup row>
     <Label for="file" sm={2} >Document2</Label>
     <Col >
       <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
     </Col>
   </FormGroup>
   <FormGroup row>
   <Label for="file" sm={2} >Document3</Label>
   <Col >
     <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
   </Col>
 </FormGroup>
 <FormGroup row>
 <Label for="file" sm={2} >Document4</Label>
 <Col >
   <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
 </Col>
</FormGroup>
<FormGroup row>
<Label for="file" sm={2} >Document4</Label>
<Col >
  <Input type="file" name="file" id="file" placeholder="Choose File" bsSize="default" />
</Col>
</FormGroup>
<div class="form-group">
<h4> <label for="info">Extra Information:</label></h4>
  <textarea class="form-control" rows="8" id="info"></textarea>
</div>

</Form>

  <Button size="lg" className="btn btn-info float-right">Submit</Button>


 </div>
);

}
export default Pid;
