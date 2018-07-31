import React, { Component } from 'react';
// import AssetCard from "./components/AssetCard";
import Wrapper from "./components/Wrapper";
import assets from "./assets.json";
import Jumbotron from "./components/Jumbotron";
import './App.css';
import { FormBtn } from './components/Form/FormBtn';
import { Col, Container, Rows} from "./components/Grid";
import {Form} from "./components/Form";



class App extends Component {
  state = {
    assets
  };
  removeAsset = id => {
    const assets = this.state.assets.filter(asset => asset.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ assets });

  }
  render() {
    return (
      <Wrapper>
        <Jumbotron> Asset Tracking app </Jumbotron>
        <Grid/>
        {/* {this.state.assets.map(asset => (
          <AssetCard
            removeAsset={this.removeAsset}
            id={asset.id}
            key={asset.id}
            modelNumber={asset.modelNumber}
            serialNumber={asset.serialNumber}
            assetTag={asset.assetTag}
            IPaddress={asset.IPaddress}
            rackId={asset.rackId}
          />
        ))} */} 
        <Form/>
        <FormBtn/>
      </Wrapper>
    );
  }
}

export default App;
