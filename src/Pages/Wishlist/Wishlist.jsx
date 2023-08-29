import React from 'react';
import Product from '../../Component/Product';
import {useLocation} from 'react-router-dom'

const Wishlist = () => {
    const {pathname} = useLocation()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto my-10'>
            <div className="max-w-[270px] h-[320px] mx-auto">
            <Product imgsrc="./assets/befff-865x1024.jpg" path={pathname} />
          </div>
            <div className="max-w-[270px] h-[320px] mx-auto">
            <Product imgsrc="./assets/Nido.jpg" path={pathname} />
          </div>
            <div className="max-w-[270px] h-[320px] mx-auto">
            <Product imgsrc="./assets/about.PNG" path={pathname} />
          </div>
        </div>
    );
};

export default Wishlist;