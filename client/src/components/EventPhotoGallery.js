import React, { useContext } from "react";
import { UserContext } from "../context/user";

function EventPhotoGallery() {

    const { user } = useContext(UserContext);

    const images = user.pinned_photos;

    return (
        <div className="photo-gallery">
            {images.map((image, index) => (
                <div key={index} className="photo-item">
                    <img src={image} alt={index} />
                </div>
            ))}
        </div>
    );
};

export default EventPhotoGallery;
