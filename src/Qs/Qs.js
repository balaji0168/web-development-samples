import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col, FormGroup, Label,Input,Button,CustomInput} from 'reactstrap';
import "./Qs.css";
function Qs(){
  return(
    <div id="Qs" class="qs">
    <h1 className="bold text-center text-info"><span>Ramaiah Ayurvedic Hospital</span></h1>

<Form >
<FormGroup row >
    <h5> <Label  className="pid " for="Pid" sm={2} >Pid</Label></h5>
     <Col sm={2}>
       <Input type="text" name="pid" id="pid" bsSize="sm"/>
     </Col>
     </FormGroup>


        <h4 className="bold"><span>Answer the following Questions</span></h4>

        <FormGroup><div>
               <Label for="qs1"></Label>

                 <CustomInput type="checkbox" id="qa" label="Yes" inline />
                 <CustomInput type="checkbox" id="q1" label="No" inline />
               </div>
             </FormGroup>
             <FormGroup><div>
                    <Label for="qs2"></Label>

                      <CustomInput type="checkbox" id="qb" label="Yes" inline />
                      <CustomInput type="checkbox" id="q2" label="No" inline />
                    </div>
                  </FormGroup>
                  <FormGroup><div>
                         <Label for="qs3"></Label>

                           <CustomInput type="checkbox" id="qc" label="Yes" inline />
                           <CustomInput type="checkbox" id="q3" label="No" inline />
                         </div>
                       </FormGroup>
                       <FormGroup><div>
                              <Label for="qs4"></Label>

                                <CustomInput type="checkbox" id="qd" label="Yes" inline />
                                <CustomInput type="checkbox" id="q4" label="No" inline />
                              </div>
                            </FormGroup><FormGroup><div>
                                   <Label for="qs5"></Label>

                                     <CustomInput type="checkbox" id="qe" label="Yes" inline />
                                     <CustomInput type="checkbox" id="q5" label="No" inline />
                                   </div>
                 </FormGroup>
                 <FormGroup><div>
                        <Label for="qs6"></Label>

                          <CustomInput type="checkbox" id="qf" label="Yes" inline />
                          <CustomInput type="checkbox" id="q6" label="No" inline />
                        </div>
                      </FormGroup>
                      <FormGroup><div>
               <Label for="qs7"></Label>

                 <CustomInput type="checkbox" id="qg" label="Yes" inline />
                 <CustomInput type="checkbox" id="q7" label="No" inline />
               </div>
             </FormGroup>
             <FormGroup><div>
                    <Label for="qs8"></Label>

                      <CustomInput type="checkbox" id="qh" label="Yes" inline />
                      <CustomInput type="checkbox" id="q8" label="No" inline />
                    </div>
                  </FormGroup>
                  <FormGroup><div>
                         <Label for="qs9"></Label>

                           <CustomInput type="checkbox" id="qi" label="Yes" inline />
                           <CustomInput type="checkbox" id="q9" label="No" inline />
                         </div>
                         

                       </FormGroup>
                       <div>
                       <h4> <label for="info">Extra Information:</label></h4>
                         <textarea class="form-control" rows="8" id="info"></textarea>
                       </div>

   </Form>
    <Button size="lg" className="btn btn-info float-right">Print</Button>
    </div>

  );

}
export default Qs;
