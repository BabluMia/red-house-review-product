import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='min-h'>
            <h2 className='text-4xl text-center mt-5 fw-bold  p-4'>Contact us</h2>
            <div className='w-50 mx-auto'>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label mt-3">Your Name</label>
                    <input type="Text" className="form-control" placeholder="Mr. Bablu"></input>
                    <label for="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input type="email" className="form-control" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3 mt-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className='py-2 submit px-5 border-0 rounded-2 text-2xl outline-0 mx-auto'>Submit</button>
            </div>
        </div>
    );
};

export default Contact;