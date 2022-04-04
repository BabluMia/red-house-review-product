
import useReviews from '../hooks/useReviews';
import './Reviews.css'


const Reviews = () => {
    const [reviews , setReviews] = useReviews()
    console.log(reviews);
    return (
        <div>
            <h1 className='my-4 text-center'>See Our Happy Customar</h1>
            <div className="container ">
            <div className="row w-75 mx-auto mt-4">
                {reviews.map(review =><div className="col-lg-3 mx-4 my-3 bg-danger text-center">
                    <p>{review.id}</p>
                </div> )}
            </div>
            </div>
        </div>
    );
};

export default Reviews;