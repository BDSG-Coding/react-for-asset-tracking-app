import React, { Component } from 'react';
// import Wrapper from "../components/Wrapper";
// import assets from "../assets.json";
import Jumbotron from "../components/Jumbotron";
import FormBtn from "../components/Form/FormBtn.js";
import InputForm from "../components/Form/InputForm.js";


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
            <Container fluid>
            <Jumbotron>
              <h1>Asset Tracking </h1>
            </Jumbotron>

        <Row>
          <Col size="md-6">
          <div>
            <form>
                <label> Model Number : 
              <InputForm name="ModelNumber" placeholder="Model Number (required)" />
              </label>
              <label> Serial Number : 
              <InputForm name="SerialNumber" placeholder="Serial Number (required)" />
              </label>
              <label> Asset Tag : 
              <InputForm name="AssetTag" placeholder="Asset Tag (required)" />
              </label>
              <label> IP Adress : 
              <InputForm name="IPAddress" placeholder="IP address(required)" />
              </label>
              <label> Rack Id : 
              <InputForm name="RackID" placeholder="Rack Id (required)" />
              </label>
              <FormBtn>Submit</FormBtn>
            </form>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            <div>
                <h1>
                    Map will be here
                </h1>
            </div>
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>



         );
    }
}
 
export default Servers;