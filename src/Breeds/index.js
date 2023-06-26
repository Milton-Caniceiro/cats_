import React, { useEffect, useState } from "react";
import Table from "react-bootstrap";

const Breeds = () =>{
    const [breeds, setBreeds] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const api_key = "live_VYI8wtyvJogkdlvXJTWS60VgI5HQOh5vsI2it9VOwu8ZYyWVf1A1rNssJDBmgXsn";

    useEffect(()=> {
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            }
        }

        fetch("https://api.thecatapi.com/v1/breeds?limit=10&page=0", requestOptions)
        .then((response)=> response.json())
        .then((data) => {
            if(data){
                setBreeds(data)
            }
        })
        .catch((error) => {setErrorMessage("An error occurred")})
    }, [])

    const imageBreed = (id) => {
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            }
        }

        fetch(`https://api.thecatapi.com/v1/images/${id}`, requestOptions)
        .then((response)=> response.json())
        .then((data) => {
            if(data){
                setBreeds(data)
            }
        })
        .catch((error) => {setErrorMessage("An error occurred")})

    }

    return (
        <div>
            <div className='images d-flex justify-content-center align-items-center' style={{ color: "#324A5F", fontSize: "70px" }} >- Breeds -</div>
            <br />
            <div className='images2 d-flex justify-content-center align-items-center'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Temperament</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {imagesBreeds.map((image) => (
                            <tr key={image.id}>
                                <td>{image.name}</td>
                                <td>{image.description}</td>
                                <td>{image.temperament}</td>
                            </tr>))}
                    </tbody>
                </Table>

            </div>
            <br />
        </div>

    );
}

export default Breeds;
