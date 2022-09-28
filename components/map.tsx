import React from "react";
import Script from "next/script";
import { env } from "process";


export default function SimpleMap(){
  let url:string = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div>
       <Script
        src= {`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}/>
    </div>
    );
}