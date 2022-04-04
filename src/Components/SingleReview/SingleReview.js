import React from 'react';
import { FaQuoteLeft} from 'react-icons/fa';
import './SingleReview.css'

const SingleReview = ({review}) => {
    const {name,feedback,img,ratings} = review
    return (
        <div className='col-3 review shadow-lg px-4 py-2 ms-5'>
            <FaQuoteLeft className='quote text-white'></FaQuoteLeft>
            <p className='px-2'>{feedback}</p>
            <h6>Ratings {ratings}</h6>
            <img src={img} className='my-3' alt='user'></img>
            <h5>{name}</h5>
        </div>
    );
};

export default SingleReview;