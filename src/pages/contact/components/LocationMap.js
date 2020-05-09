import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react'

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={() => {}}
                        name={'Current location'} />
                <InfoWindow onClose={() => {}}>
                    <div>
                        <h1>{'Austin'}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCsic-21olVw7zgWjho6FtLGJgnYgvOpNo')
})(MapContainer)
