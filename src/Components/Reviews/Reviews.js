
import useReviews from '../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'


const Reviews = () => {
    const [reviews , setReviews] = useReviews()
    // console.log(reviews);
    return (
        <div className='min-h'>
            <h1 className='my-4 text-center'>See Our Happy Customar</h1>
            <div className="container mt-5">
            <div className="row w-75 mx-auto mt-4 gap-4">
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
            </div>
        </div>
    );
};

export default Reviews;