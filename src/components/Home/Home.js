import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0)
  const number = 65;
    const increaseCount= ()=>{
        setCount(count+1)
    }
      return (
        <div>

            <button onClick={increaseCount}>Button</button>
            <h1>Count : {count}</h1>
            <p>Number :{number}</p>
            <h1>Count: {count*2}</h1>
            
        </div>
    );
};

export default Home;