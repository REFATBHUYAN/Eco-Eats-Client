import React from 'react';

const Banner = () => {
    return (
        <div className='my-28'>
            <img className='w-full hidden md:block h-56 rounded-[10px] aspect-auto' src="/ecoeats/banner/banner-large.jpg" alt="" />
            <img className='w-full md:hidden block h-56 rounded-[10px] aspect-auto' src="/ecoeats/banner/banner-medium.jpg" alt="" />
        </div>
    );
};

export default Banner;