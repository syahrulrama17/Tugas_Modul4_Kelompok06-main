import React, { useState, useEffect } from "react";
import "./index.css";
import logo from "../logo.svg";

export default function Index() {
  let [dogImage, setDogImage] = useState([]);

  useEffect(() => {
    let mounting = true;
    getAPI().then((data) => {
      if (mounting) {
        setDogImage(data.message);
      }
      return () => (mounting = false);
    });
  }, []);

  return (
    <div className="Main">
        <p>Kelompok 06</p>
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))}
    </div>
  );
}
function getAPI() {
  return fetch("https://dog.ceo/api/breeds/image/random/1").then((response) =>
    response.json()
  );
}
