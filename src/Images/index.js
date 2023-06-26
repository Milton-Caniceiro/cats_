import React, { useEffect, useState } from "react";
import {FavouriteButton} from "./style";

const Images = () => {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState([]);
    const [sub_id, setSub_id] = useState("");
    const [image_id, setImage_id] = useState("")
    const [id, setId] = useState("");
    const [favImages, setFavImages] = useState([]);
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

        fetch("https://api.thecatapi.com/v1/images/search?limit=21", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setImages(data)
                }
            })
            .catch((error) => { setErrorMessage("An error occurred") })
    }, []);

    const postFav = (image) => {

        const requestOptions = {
            method: "POST",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image_id: image,
            })
        };
        fetch("https://api.thecatapi.com/v1/favourites", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.status) {
                    setFavImages(data);
                }
            })
            .catch((error) => { setErrorMessage("An error occurred while submit a image") })

    };

    /*const findCats = () => {

        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            },

        };
        fetch(https://api.thecatapi.com/v1/images/${id}, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("aqui1")
                if (data.status) {
                    console.log("aqui2")
                }
            })
            .catch((error) => { setErrorMessage("An error occurred while submit a image") })

    };*/

    const deleteCats = () => {

        const requestOptions = {
            method: "DELETE",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            },
        };
        fetch(`https://api.thecatapi.com/v1/images/${image_id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("aquiDelete")
                if (data) {
                    console.log("delete Fav")
                }
            })
            .catch((error) => { setErrorMessage("An error occurred while submit a image") })
    }


    return (
        <div>
            <div className='images d-flex justify-content-center align-content-center; ' style={{ color: "#324A5F", fontSize: "70px" }} >- Images -</div>
            <br />
            <div>
                <div className="cats">
                    {images.map((image) => (
                        <div key={image.id}>
                            <img src={image.url} alt={image.id} />
                            <br />
                            <FavouriteButton type="submit" onClick={() => postFav(image.id)}>Add to favourites</FavouriteButton>

                        </div>
                    ))}
                </div>
                <br />
            </div>
        </div>

    );
}

export default Images;