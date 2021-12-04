import React, { useEffect, useState } from "react";

function getData(){
}

function HomePage() {
  const [eventData, setEventData] = useState()
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
    .then(response => {
      return response.json();
    })
    .then(data => {
      setEventData(data.link)
    });
  });
  return <div>The title is: {eventData} </div>;
}

export default HomePage;
