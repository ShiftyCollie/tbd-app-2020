import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


/*
//var NAME = false;
function GetTestData(selectedValue) {
    if (selectedValue === "No") {
        NAME = true;
    }
};



function GetNextPage(){
  if(NAME)
  {
      return "/ClearingOfferMadeThirdPage";
  }
  else{

     return "/ClearingOfferMadeFourthPage";
};


}*/ 
const ClearingOfferMadeSecondPages = (props) => {

    var offerOptions = [
        { label: "Yes", id: "offerYes", value: "yes" },
        { label: "Yes (Partial Requirements met, this will be where student doesn't have all requirements)", id: "offerYesPart", value: "yespart" },
        { label: "Yes (Subject to Ell Status)", id:"Status", value: "yesstatus" },
        { label: "No", id: "offerNo",value: "No" },
        { label: "Interview Required (this may be due to students having industry experience rather than qualifications)", id: "offerInterviewRequired", value: "interviewrequired" },
        { label: "RPA (Highlight this with Emma Cave or Zoe", id: "offerInterviewRequired", value: "interviewrequired" }      
      ]
    ;
   
return ( 

<Container>
<h1>Offer</h1>
    <h4>* Required</h4>
<h3>37. Offer made? (YES/NO)</h3>
<p><i>Only UNCONDITIONAL Offers can be made (unless interview is needed)</i></p>
<RadioButton
            heading="Yes"
            options={offerOptions}
            name="offer"
           /*  oc={GetTestData()}
           onchange={GetNextPage()} */
  />
<Row>
<Col><UCPButton to='/ClearingOfferMade'
                primary="True"
                className="mediumbutton"
                buttonText="Go Back"
                href="/ClearingOfferMade"></UCPButton></Col>
                
    <Col><UCPButton to='/ClearingOfferMadeThirdPage'
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Continue"
                ></UCPButton></Col>
</Row>
</Container>
)
}
export default ClearingOfferMadeSecondPages;