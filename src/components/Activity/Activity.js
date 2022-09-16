import React from 'react';

const Activity = ({volunteer}) => {
    const {title, img} = volunteer;

    return (
        <div className='border-2 border-orange-400 rounded-md w-72 m-auto shadow-lg' >
            <img className='w-60 m-auto p-2' src={img} alt="" />
            <h1 className='font-bold text-xl p-2'>{title}</h1>
        </div>
    );
};

export default Activity;