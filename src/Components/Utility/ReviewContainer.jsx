import React from "react";
import Reviews from "./Reviews";
import ViewAllReviewHook from "./../../hook/review/view-all-review-hook";
import { useParams } from "react-router-dom";
import ReviewPost from "./ReviewPost";
import ReactPagination from "../../Components/Utility/ReactPagination";
import { ToastContainer } from "react-toastify";

const ReviewContainer = ({ rateAvg, rateNum }) => {
  const { id } = useParams();
  const [allReview, onPress] = ViewAllReviewHook(id);
  return (
    <div>
      <Reviews rateAvg={rateAvg} rateNum={rateNum} />
      <div className="flex flex-col  mt-4 gap-4 bg-gray-50 w-3/4  mb-8">
        {allReview.data ? (
          allReview.data.map((review, index) => {
            return <ReviewPost key={index} review={review} />;
          })
        ) : (
          <h6>لا يوجد تقيمات الان</h6>
        )}
      </div>

      {allReview.paginationResult &&
      allReview.paginationResult.numberOfPages >= 2 ? (
        <ReactPagination
          pageCount={
            allReview.paginationResult
              ? allReview.paginationResult.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default ReviewContainer;
