import React, { Component } from "react";
// import AssetCard from "./components/AssetCard";


import Servers from "./locations/Servers";
import './App.css';

const App = () => (
  // removeAsset = id => {
  //   const assets = this.state.assets.filter(asset => asset.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ assets });

  // }
  
   
    
        <div>
          <Servers/>
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
       </div>
      );

export default App;
