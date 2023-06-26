import React, { useEffect, useState } from "react";
import {HomeImage} from "./style"

const Home = () => {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState([]);
    const [sub_id, setSub_id] = useState("");
    const [image_id, setImage_id] = useState("")
    const [id, setId] = useState("");
    const [favImages, setFavImages] = useState([]);
    //const [url, setUrl] = useState("");
    //const [pending, setPending] = useState();
    //const [approved, setApproved] = useState();
    //const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const api_key = "live_VYI8wtyvJogkdlvXJTWS60VgI5HQOh5vsI2it9VOwu8ZYyWVf1A1rNssJDBmgXsn";

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            }
        }

        fetch("https://api.thecatapi.com/v1/images/search?limit=", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setImages(data)
                }
            })
            .catch((error) => { setErrorMessage("An error occurred") })
    }, []);

    return (
        <HomeImage>
            <div>
                {images.map((image) => (
                    <div key={image.id}>
                        <img 
                        src={image.url} 
                        alt={image.id}
                        />
                        <br />
                    </div>
                ))}
            </div>
            <br />
        </HomeImage>
    );
}

export default Home;