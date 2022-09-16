import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Main = () => {
  const [volunteers, setVolunteers] = useVolunteers()
    
    return (
        <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 mt-12 '>
           {
            volunteers.map(volunteer => <Activity key={volunteer._id} volunteer={volunteer}></Activity>)
           }
        </div>
    );
};

export default Main;