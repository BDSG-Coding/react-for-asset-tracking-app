import axios from "axios";
const BASEURL = "https://www.google.com/maps/@37.87143,-122.2676187,15z";
const APIKEY = "AIzaSyB-DizNRFwI2lwbtpPeL24qmdolk1yIc2I";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyB-DizNRFwI2lwbtpPeL24qmdolk1yIc2I")
})(MapContainer)