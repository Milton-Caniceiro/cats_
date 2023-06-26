import React, { useEffect, useState } from "react";

const Favourites = () => {
    const [favouriteId, setFavouriteId] = useState("");
    const [image_id, setImage_id] = useState("");
    const [sub_id, setSub_id] = useState("");
    const [favImages, setFavImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const api_key = "live_VYI8wtyvJogkdlvXJTWS60VgI5HQOh5vsI2it9VOwu8ZYyWVf1A1rNssJDBmgXsn";

    const deleteFav = (id) => {

        const requestOptions = {
            method: "DELETE",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            },
        };
        fetch(`https://api.thecatapi.com/v1/favourites/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("aqui")
                if (data) {
                    setFavImages(prevFavImages => prevFavImages.filter(favImage => favImage.id !== id))
                }
            })
            .catch((error) => { setErrorMessage("An error occurred while submit a image") })

    };

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": api_key,
                "Content-Type": "application/json"
            }
        }

        fetch("https://api.thecatapi.com/v1/favourites", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setFavImages(data)

                }
            })
            .catch((error) => { setErrorMessage("An error occurred") })
    }, []);


    return (
        <div>
            <div className='images d-flex justify-content-center align-items-center' style={{ color: "#324A5F", fontSize: "70px" }} >- Your favourite cats -</div>
            <div className="boxFavourite">
                
                <br />
                <div className='favourite'>
                    {favImages.map((favImage) => (
                        <div>
                            <img key={favImage.id} src={favImage.image.url} alt={favImage.sub_id} style={{ width: "200px", height: "200px" }} />
                            <br />
                            <button type="delete" style={{ color: "Black", fontSize: "25px", borderColor: "#C3A995", borderRadius: "10%", backgroundColor: "#D64933" }} onClick={() => deleteFav(favImage.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Favourites;