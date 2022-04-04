import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='min-h ' style={{ background: 'radial-gradient(#fff,#ffd6d6)' }}>
            <div className="row px-2 px-lg-5  mx-auto d-flex justify-content-between align-content-center">
                <div className="col-12 col-lg-7 d-flex align-align-content-between justify-content-center px-5 flex-column">
                    <h1 className='text-start'>
                        Give Your Workout
                        A New Style!
                    </h1>
                    <h1>
                        Earn Your New Style
                    </h1>
                    <p className=' my-3 '>
                    Honoring a history in tennis culture, the Nike Court Legacy blends classic style with a modern, street-worthy design. <br></br> Crisp leather and intricate needlework add to your courtside vibe.
                    </p>
                    <button className='py-2 mt-3 submit home-btn w-auto px-5 border-0 rounded-2 text-2xl outline-0 '>Add Your Cart</button>
                </div>
                <div className="col-12 col-lg-4 home-img mb-4 me-0 me-lg-5">
                    <img src="https://i.postimg.cc/0QZpXCMG/air-force-1-07-mens-shoes-5-QFp5-Z-removebg-preview.png" className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};
export default Home;