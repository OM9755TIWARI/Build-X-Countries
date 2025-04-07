import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

const Card = ({name, flag}) => {
    return(
        <div style={{
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "200px",
            padding: "10px",
            border: "0.5px solid black",
            borderRadius: "5px",
            flexDirection : "column",
            margin: "10px",
            textAlign: "center"
            
        }}>
            <img src={flag} alt={name && flag} height="100px" width="100px" />
            <h4>{name}</h4>
             </div>
    )
}

const Countries = () => {
    const [countries, setCountries] = useState([]);


    const URL = "https://xcountries-backend.azurewebsites.net/all";
    const fetchData = async () => {
        try{
            const response = await axios.get(URL);
            setCountries(response.data);
        }
        catch(error){
            console.error("Error fetching data: " + error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
     
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "10px"}}>
        {countries.map(({name, flag, abbr}) => (<Card name = {name} flag = {flag} key = {abbr} />))}
        </div>

    )
}
export default Countries;