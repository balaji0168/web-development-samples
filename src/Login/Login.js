import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input,Col ,Row} from 'reactstrap';
import "./Login.css";


function Login() {
  return (
<div id="login">

<h1 className="text-center text-info font-weight-bold"><span>Ramaiah Ayurvedic Hospital</span></h1>
<Form className="login-form text-center font-weight-bold">
   <Row form>
        <Col >
          <FormGroup>
            <Label className="text-center text-warning font-weight-bold" for="exampleEmail">Userid</Label>
            <Input type="email" name="email" id="exampleEmail"/>
          </FormGroup>


          <FormGroup>
            <Label className="text-center text-warning font-weight-bold" for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword"  />
          </FormGroup>
          <FormGroup>
          <Button className="btn btn-lg btn-dark btn-block" onClick='alert(`" + Hello successfully loged in + "`)'>Login</Button>
          </FormGroup>
        </Col>

</Row>
</Form>
</div>
);
}
export default Login;
