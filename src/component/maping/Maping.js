
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import './map.css'

const Maping = () => {

    mapboxgl.accessToken = "pk.eyJ1Ijoia2F3Y2hlcjU3OCIsImEiOiJja3Foa3dnZ2cwMmh4Mm9vN3dzcnE2MHlkIn0.2v9uR-x-DqEIAf1gyLsEzw";

    useEffect(() => {
       const map = new mapboxgl.Map({
          container: "mapContainer",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-74.5, 40],
          zoom: 9,
        });
        const nav = new mapboxgl.NavigationControl()
        map.addControl(nav);

        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true
          });
          console.log(geolocate)
          map.addControl(geolocate, "top-right")
        
      }, []);
      
      
      
     
   

    
    return (
        
        <div className="container mt-5">
            <h3 className="text-center mb-4"> <span className="text-danger">Find</span> Us</h3>
             <div id="mapContainer" className="map "></div>;

        </div>
    );
};

export default Maping;