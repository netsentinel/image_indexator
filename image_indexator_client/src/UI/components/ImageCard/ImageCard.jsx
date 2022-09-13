import React from "react";
import { useState } from "react";
import cl from './ImageCard.module.css';
import ImageShowModal from "../ImageShowBlock/ImageShowModal";

const ImageCard = ({ imageUrl, metaText, ...props }) => {
    console.log(`Creating ImageCard with imageUrl=\'${imageUrl}\' and metaText=\'${metaText}\'.`)
    const [isImageDispalyed, setIsImageDisplayed] = useState(false);
    return (
        <div className={cl.imageCard} {...props}>
            <img src={imageUrl} className={cl.imageCardImage} alt={""} onClick={() => setIsImageDisplayed(true)}></img>
            <div className={cl.imageCardText}>{metaText}</div>
            <ImageShowModal
                imageData={{ url: imageUrl, metadata: metaText }}
                isOpen={isImageDispalyed}
                onRequestClose={() => setIsImageDisplayed(false)}
                style={{ content: { margin: 'auto', maxWidth: '600px', alignSelf: 'center' } }}
            />
        </div>
    )
}

export default ImageCard; 