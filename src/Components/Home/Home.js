import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'recharts';
import useReviews from '../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews()
    const topThree = reviews.slice(0, 3)
    return (
        <div >
            <div className="row px-2 px-lg-5 mb-4 mx-auto d-flex justify-content-between align-content-center" style={{ background: 'radial-gradient(#fff,#ffd6d6)' }}>
                <div className="col-12 col-lg-7 d-flex  justify-content-center px-5 flex-column">
                    <h1 className='text-start' data-aos="fade-right">
                        Give Your Workout
                        A New Style!
                    </h1>
                    <h1 data-aos="fade-right">
                        Earn Your New Style
                    </h1>
                    <p className=' my-3 ' data-aos="fade-right">
                        Honoring a history in tennis culture, the Nike Court Legacy blends classic style with a modern, street-worthy design. <br></br> Crisp leather and intricate needlework add to your courtside vibe.
                    </p>
                    <button data-aos="fade-right" className='py-2 mt-3 submit home-btn w-auto px-5 border-0 rounded-2 text-2xl outline-0 '>Add Your Cart</button>
                </div>
                <div className="col-12 col-lg-5 home-img mb-4 pb-3" data-aos="fade-left">
                    <img src="https://i.postimg.cc/FFdyW4Z1/air-force-1-low-n7-shoes-wp1-Gf-W-removebg-preview.png" className='img-fluid' alt="" />
                </div>
            </div>
            <div className="container">
                <h3 className='my-4 text-center'>See Top Reviews : {topThree.length}</h3>
                <div className="container mt-5">
                    <div className="row w-75 mx-auto mt-4 gap-4 " data-aos="fade-up"
                        data-aos-duration="2000">
                        {
                            topThree.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                        }
                    </div>
                </div>
                <div className='w-75 mx-auto d-flex justify-content-center mb-5'>
                    <Link to='/reviews'>
                        <button className='py-2 mt-5 mb-5 ms-5 submit px-5 border-0 rounded-2 text-2xl outline-0 mx-auto'>See All Review</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};
export default Home;