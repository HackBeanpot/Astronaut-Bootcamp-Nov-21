import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';


function getData() {
  fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
  .then(response => {
    return response.json();
  }).then(data => {
     return data.title;
  })
}

function HomePage() {
  const [eventData, setEventData] = useState()
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
  .then(response => {
    return response.json();
  }).then(data => {
     setEventData(data.title);
  });
});
  return <Button variant="text"> Hello World {eventData}</Button>;
}

export default HomePage;
