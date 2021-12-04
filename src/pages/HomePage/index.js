import React, { useEffect, useState } from "react";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
// function getData(){}

export default function HomePage() {
  const [textToBeDisplayed, setTextToBeDisplayed] = useState('loading...');
  useEffect(() => {
    fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      .then(response => {
        return response.json();
      })
      .then(data => {
        //data = {title :'', link: '', events: []}
        setTextToBeDisplayed(data.title);
      });
  });
  return <div>Environmental Events Currently Occurring in the World : {textToBeDisplayed} </div>;
}

//export default HomePage;


//functional components RETURN how to draw <div> <div> <div>

//useState keeps track of your state, actual_value, functionToUpdateYourValue
//useEffect just does something, fetches nasa, turns into an object, and sets our state :) 