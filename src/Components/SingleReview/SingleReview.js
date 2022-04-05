import React from 'react';
import { FaQuoteLeft} from 'react-icons/fa';
import './SingleReview.css'

const SingleReview = ({review}) => {
    const {name,feedback,img,ratings} = review
    return (
        <div className='col-10 col-lg-3 review shadow-lg px-4 py-2 ms-4 ms-md-5' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500">
            <FaQuoteLeft className='quote text-white'></FaQuoteLeft>
            <p className='px-2'>{feedback}</p>
            <h6>Ratings: {ratings}</h6>
            <img src={img} className='my-3' alt='user'></img>
            <h5 className='mb-3'>{name}</h5>
        </div>
    );
};

export default SingleReview;