import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';

function getData(){
}
// Hooks: functions provided by react
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
  return (<Button>The title is: {eventData} </Button>);
}

export default HomePage;
