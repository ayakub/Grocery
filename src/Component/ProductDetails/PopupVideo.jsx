import React from 'react';
import { useState } from 'react';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'
import Images from '../Images';

const PopupVideo = (props) => {
    const [popup, setPopup] = useState(false)
    return (
        <div>
            <div className='relative my-3 cursor-pointer transition duration-300 hover:scale-[1.2]' onClick={() => setPopup(true)}>

                <props.type className='w-36 h-36  overflow-hidden z-[116]' src={props.src} muted></props.type>
                {
                    props.type === 'video' && <AiOutlinePlaySquare className='text-5xl absolute top-[40%] right-[35%]' />
                }
            </div>
            <div style={{ display: popup ? 'block' : 'none' }} className='popup-media bg-[#000000cc] fixed top-0 left-0 z-[115] w-[100%] h-[100%] transition duration-300'>
                <h1 className='absolute top-5 right-5 z-[115] text-white cursor-pointer font-extrabold text-3xl select-none' onClick={() => setPopup(false)}> <ImCancelCircle /> </h1>
                <props.type id='popup-video' className=' mx-auto absolute top-[50%] left-[50%] block  max-w-[80%] max-h-[80%] object-contain translate-x-[-50%] translate-y-[-50%]' src={props.src} muted autoPlay controls></props.type>
            </div>
        </div>
    );
};

export default PopupVideo;