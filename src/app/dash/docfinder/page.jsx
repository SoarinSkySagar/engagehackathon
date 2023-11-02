"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Map, { GeolocateControl, FullscreenControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const stores = {
  type: "FeatureCollection",
  features: [
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.2087, 28.5672]
        },
        "properties": {
          "description": '<strong><a href="https://www.aiims.edu/" target="_blank">AIIMS, New Delhi</a></strong><p> Rating: 4.6</p>',
          "name": "AIIMS, New Delhi",
          "address": "Sri Aurobindo Marg, Ansari Nagar, New Delhi",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.0270, 28.4595]
        },
        "properties": {
          "description": '<strong><a href="https://www.apollohospitals.com/" target="_blank">Apollo Hospital, Gurgaon</a></strong><p> Rating: 4.3</p>',
          "name": "Apollo Hospital, Gurgaon",
          "address": "Block C, Sushant Lok Phase I, Gurgaon, Haryana",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.0833, 28.4974]
        },
        "properties": {
          "description": '<strong><a href="https://www.fortishealthcare.com/india/hospitals-in-haryana/fortis-memorial-research-institute-gurugram" target="_blank">Fortis Hospital, Gurugram</a></strong><p> Rating: 4.1</p>',
          "name": "Fortis Hospital, Gurugram",
          "address": "Sector 44, Opposite HUDA City Centre, Gurugram, Haryana",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.0460, 28.4162]
        },
        "properties": {
          "description": '<strong><a href="https://www.medanta.org/gurugram/" target="_blank">Medanta - The Medicity, Gurgaon</a></strong><p> Rating: 4.4</p>',
          "name": "Medanta - The Medicity, Gurgaon",
          "address": "Sector 38, Gurugram, Haryana",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.2139, 28.5191]
        },
        "properties": {
          "description": '<strong><a href="https://www.maxhealthcare.in/hospital-network/max-super-specialty-hospital-saket" target="_blank">Max Super Speciality Hospital, Saket, New Delhi</a></strong><p> Rating: 4.0</p>',
          "name": "Max Super Speciality Hospital, Saket, New Delhi",
          "address": "1, 2, Press Enclave Road, Saket, New Delhi",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.1242, 28.7501]
        },
        "properties": {
          "description": '<strong><a href="https://www.fmri.in/" target="_blank">Fortis Memorial Research Institute, Gurugram</a></strong><p> Rating: 4.2</p>',
          "name": "Fortis Memorial Research Institute, Gurugram",
          "address": "Sector 44, Gurugram, Haryana",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.2229, 28.5670]
        },
        "properties": {
          "description": '<strong><a href="https://www.brahmanandahospital.com/" target="_blank">Brahmananda Narayana Multispeciality Hospital, Jamia Nagar, New Delhi</a></strong><p> Rating: 3.8</p>',
          "name": "Brahmananda Narayana Multispeciality Hospital, Jamia Nagar, New Delhi",
          "address": "Abul Fazal Enclave, Jamia Nagar, New Delhi",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.1144, 28.5831]
        },
        "properties": {
          "description": '<strong><a href="https://www.fortishealthcare.com/india/hospitals-in-delhi-ncr/fortis-flt-lt-rajans-gurgaon-real-surgery-hospital" target="_blank">Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi</a></strong><p> Rating: 4.1</p>',
          "name": "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
          "address": "Sector B, Pocket 1, Vasant Kunj, New Delhi",
          "distance": 0
        }
      },
      
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.1815, 28.6721]
        },
        "properties": {
          "description": '<strong><a href="https://www.blkhospital.com/" target="_blank">BLK Super Speciality Hospital, New Delhi</a></strong><p> Rating: 4.4</p>',
          "name": "BLK Super Speciality Hospital, New Delhi",
          "address": "Pusa Road, Karol Bagh, New Delhi",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.1133, 28.5054]
        },
        "properties": {
          "description": '<strong><a href="https://www.sgrh.com/" target="_blank">Sir Ganga Ram Hospital, New Delhi</a></strong><p> Rating: 4.3</p>',
          "name": "Sir Ganga Ram Hospital, New Delhi",
          "address": "Rajinder Nagar, New Delhi",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.1695, 28.6922]
        },
        "properties": {
          "description": '<strong><a href="https://www.moolchandhealthcare.com/" target="_blank">Moolchand Hospital, New Delhi</a></strong><p> Rating: 4.0</p>',
          "name": "Moolchand Hospital, New Delhi",
          "address": "Lajpat Nagar III, New Delhi",
          "distance": 0
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [77.2067, 28.6695]
        },
        "properties": {
          "description": '<strong><a href="https://www.cygnushospitals.com/" target="_blank">Cygnus Orthocare Hospital, New Delhi</a></strong><p> Rating: 3.9</p>',
          "name": "Cygnus Orthocare Hospital, New Delhi",
          "address": "Najafgarh Road, New Delhi",
          "distance": 0
        }
      },
      
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.354534, 22.514688],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Calcutta Heart Clinic & Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Calcutta Heart Clinic & Hospital",
          address: "125, Rash Behari Ave, Lake Market, Kalighat, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.310345, 22.586126],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Howrah General Hospital</a></strong><p> Rating: 4.7</p>',
          name: "Howrah General Hospital",
          address: "Dobson Road, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.328131, 22.583961],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Sanjivani Hospital</a></strong><p> Rating: 4.5</p>',
          name: "Sanjivani Hospital",
          address: "Shibpur, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.353554, 22.574110],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Howrah City Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Howrah City Hospital",
          address: "Nabagram, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.368355, 22.581527],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Kolkata Medical Center</a></strong><p> Rating: 4.6</p>',
          name: "Kolkata Medical Center",
          address: "Shalimar, Howrah, West Bengal",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.365188, 22.527843],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Rabindra Sadan Hospital</a></strong><p> Rating: 4.8</p>',
          name: "Rabindra Sadan Hospital",
          address: "Maidan, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.347476, 22.550458],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Kolkata Health Institute</a></strong><p> Rating: 4.7</p>',
          name: "Kolkata Health Institute",
          address: "Park Street, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.359704, 22.525835],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Kolkata Care Hospital</a></strong><p> Rating: 4.6</p>',
          name: "Kolkata Care Hospital",
          address: "Bhowanipore, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.370553, 22.561805],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Medical Square Hospital</a></strong><p> Rating: 4.7</p>',
          name: "Medical Square Hospital",
          address: "Chowringhee, Kolkata",
          distance: 0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [88.393588, 22.619337],
        },
        properties: {
          description: '<strong><a href="#" target="_blank">Salt Lake Hospital</a></strong><p> Rating: 4.5</p>',
          name: "Salt Lake Hospital",
          address: "Salt Lake, Kolkata",
          distance: 0,
        },
      },
        ],
};
const Explore = () => {
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [zoom, setZoom] = useState(10);
  const mapRef = useRef();
  const [distances, setDistances] = useState({});

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setLat(userLat);
          setLng(userLng);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []); // Run this effect once when the component mounts

  useEffect(() => {
    const updatedDistances = {};

    stores.features.forEach((store) => {
      const distance = getDistanceFromLatLonInKm(
        lat,
        lng,
        store.geometry.coordinates[1],
        store.geometry.coordinates[0]
      );

      updatedDistances[store.properties.name] = distance;
    });

    setDistances(updatedDistances);
  }, [lat, lng]);

  const onSelect = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 1500,
      zoom: 15,
    });
  }, []);

  return (
    <>
      <div className="bg-black w-full flex justify-around">
        <div className="bg-slate-200 w-1/3 h-screen flex flex-col shadow-xl overflow-y-scroll">
          <div className="bg-white p-5 rounded-lg w-full mb-2 h-fit flex justify-center font-semibold text-xl sticky top-0 shadow-xl">
            Nearby Stalls
          </div>
          {stores.features.map((store) => (
  <div key={store.properties.name} className="bg-white p-5 rounded-lg w-full h-fit border-slate-400 border-opacity-50 mb-2 shadow-md">
    <div className="flex justify-between">
      <span
        className="font-semibold text-lg cursor-pointer hover:text-black text-slate-600"
        onClick={() =>
          onSelect({
            longitude: store.geometry.coordinates[0],
            latitude: store.geometry.coordinates[1],
          })
        }
      >
        {store.properties.name}
      </span>
      <div className="font-semibold flex flex-row items-center text-[#24963F] hover:scale-105">
        <span className="m-1">4.5</span>
        <AiFillStar className="" />
      </div>
    </div>
    <div className="text-base text-slate-500">
      {store.properties.address}
    </div>
    <div className="text-sm font-medium text-slate-500">
      {distances[store.properties.name]} km away from your location
    </div>
    <span className="flex">
      <a className="text-blue-600 hover:text-blue-800 flex items-center mt-5">
        Get Directions
      </a>
      <a href="#" className="text-red-600 hover:text-red-800 flex items-center mt-5 ml-2">
        More Info
      </a>
    </span>
  </div>
))}
        </div>
        <div className="bg-slate-700 w-2/3 p-2">
          <div className="w-full h-full">
            <Map
              ref={mapRef}
              mapboxAccessToken="pk.eyJ1Ijoic2ltcGxlc29udTk4IiwiYSI6ImNsN3UxZzlhMjBvbWozcGxldTVheDFkdXMifQ.kdwiGRrDf_iMhE3r-V7kgw"
              initialViewState={{
                longitude: lng || 88.403088,
                latitude: lat || 22.513429,
                zoom: zoom,
              }}
              className="w-full h-full"
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              {stores.features.map((store) => (
                <Marker
                  key={store.properties.name}
                  longitude={store.geometry.coordinates[0]}
                  latitude={store.geometry.coordinates[1]}
                  anchor="bottom"
                />
              ))}
              <GeolocateControl />
              <FullscreenControl />
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
