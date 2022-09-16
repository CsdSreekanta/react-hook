import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Main = () => {
//   const [volunteers, setVolunteers] = useVolunteers()
  const [searchText, setSearchText] = useState('')
const [searchResult, setSearchResult] = useState([])

useEffect(()=>{
  fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const match = data.filter( d => d.title.includes(searchText))
    setSearchResult(match)
  })
},[searchText])



const handleSearchChange= event=>{
    setSearchText(event.target.value);
}
// const handleSearchChange= event=>{
//     setSearchText(event.target.value);
//     // const match = volunteers.filter(v => v.title.includes(searchText))
//     // setSearchResult(match)
// }

    
    return (

      <div>
        <div>
            <input onChange={handleSearchChange} className='p-3 border-2 border-orange-400 m-4' type="text" placeholder='Search'  />
        </div>
          <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 mt-12 '>
           {
            searchResult.map(volunteer => <Activity key={volunteer._id} volunteer={volunteer}></Activity>)
           }
        </div>
      </div>
    );
};

export default Main;