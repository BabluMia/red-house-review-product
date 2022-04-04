import React, { useEffect } from 'react';
import './Reviews.css'


const Reviews = () => {
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1 className='my-4 text-center'>See Our Happy Customar</h1>
        </div>
    );
};

export default Reviews;