import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoViewer = ({ imgSrc, className }) => {
    return (
        <PhotoProvider>
            <PhotoView src={imgSrc}>
                <img src={imgSrc} className={`${className} cursor-pointer mx-auto overflow-hidden transition duration-300 md:hover:scale-[1.1]`} alt="" />
            </PhotoView>
        </PhotoProvider>
    );
};

export default PhotoViewer;