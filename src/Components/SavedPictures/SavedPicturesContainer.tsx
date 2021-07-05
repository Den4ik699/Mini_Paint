import React from 'react';
import SavedPictures from "./SavedPictures";

const style = require('./SavedPictures.Module.css')

const SavedPicturesContainer = () => {
    return (
        <div className={style.pictures}>
            <SavedPictures/>
            <SavedPictures/>
            <SavedPictures/>
            <SavedPictures/>
            <SavedPictures/>
            <SavedPictures/>

        </div>

    );
};

export default SavedPicturesContainer;