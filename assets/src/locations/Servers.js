import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import FormBtn from "../components/Form/FormBtn.js";
import InputForm from "../components/Form/InputForm.js";
// import AssetCard from "../components/AssetCard/AssetCard.js";
import Footer from "../components/Footer/index"
// import asset from "../assets.json";


import { Col, Container, Row } from "../components/Grid";

class Servers extends Component {
    state = { 
        server : []
     }
    //  componentDidMount() {
    //     this.loadServers();
    //   }
    
    //   loadServers = () => {
    //     API.getServers()
    //       .then(res => this.setState({ server: res.data }))
    //       .catch(err => console.log(err));
    //   };
    
    render() { 
        return ( 
            <div>
            <Container fluid>
            <Jumbotron>
              <h1>Asset Tracking </h1>
            </Jumbotron>

        <Row>
          <Col size="md-6">
          <div>
              <h3>Add Asset</h3>
          </div>
          <div>
            <form>
                <form-group>
                    <label> Model Number  </label>
                    <InputForm name="ModelNumber" placeholder="Model Number (required)" />
                    <label> Serial Number  </label>
                    <InputForm name="SerialNumber" placeholder="Serial Number (required)" />              
                    <label> Asset Tag   </label>
                    <InputForm name="AssetTag" placeholder= "Asset Tag (required)"/>
                    <label> IP Adress   </label>
                    <InputForm name="IPAddress" placeholder="IP address(required)" />
                    <label> Rack Id 
                    <InputForm name="RackID" placeholder="Rack Id (required)" />
                    </label>
                </form-group>
                <FormBtn>Submit</FormBtn>
            </form>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            <div>
                <h1>
                    Map will be here
                </h1>
                {/* <AssetCard/> */}
            </div>
            {/* "https://maps.googleapis.com/maps/api/geocode/json?address=" + streetAddress1 + "," + city1 + "," + state1 + "&key=AIzaSyBIQJm-OUevDdIbHlZzj_TPv09iExwCGQg"; */}

          </Col>
        </Row>
       
      </Container>
      <Footer/>
    </div>


         );
    }
}
 
export default Servers;