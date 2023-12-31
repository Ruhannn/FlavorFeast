import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Review = ({ review, index }) => (
  <>
    <div
      style={{ top: `calc(1rem * ${index + 1})` }}
      className="sticky w-full max-w-xl px-8 py-12 mx-auto space-y-4 bg-white dark:bg-[#44475a] border dark:border-[#6272a4] rounded-lg shadow-lg">
      <h2 className="space-y-1 text-2xl font-bold leading-none">
        <span className="block text-sm dark:text-[#ffffffc6] text-blue-700">{`Reviewer: ${review.name} (${review.position})`}</span>
        <span className="block  dark:text-[#8be9fd]"> {review.title}</span>
      </h2>
      <div className="flex items-center space-x-4">
        <img
          src={review.avatar}
          alt={`${review.name}'s avatar`}
          className="w-12 h-12 object-cover rounded-full"
        />
        <p className="dark:text-[#ffffffc6]">{review.comment}</p>
      </div>
    </div>
  </>
);

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([
      {
        id: 1,
        name: "John Doe",
        position: "Food Critic",
        title: "Delicious Experience!",
        comment:
          "I absolutely loved the variety and flavors. The service was top-notch!",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      },
      {
        id: 2,
        name: "Neko Kaito",
        position: "Sushi Enthusiast",
        title: "Sushi Paradise!",
        comment:
          "The sushi here is divine! Every bite feels like a taste of Japan.",
        avatar:
          "https://cdn.discordapp.com/attachments/1151870132549865536/1160301761467265166/1675242775823.jpg?ex=65342a39&is=6521b539&hm=c1bfe95360778ee13ec630cb38106e74b6695e519ff7aec54f080a0ea02d4d5f&",
      },
      {
        id: 3,
        name: "Bob Johnson",
        position: "Executive Chef",
        title: "Exceptional Culinary Artistry!",
        comment:
          "The creativity and skill in the kitchen truly shine. A culinary masterpiece!",
        avatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      },
      {
        id: 4,
        name: "Alice Brown",
        position: "Dessert Connoisseur",
        title: "Sweet Delights Galore!",
        comment:
          "Indulged in heavenly desserts. Each one was a delightful journey for the taste buds.",
        avatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      },
      {
        id: 5,
        name: "Charlie Wilson",
        position: "Gastronomy Explorer",
        title: "Culinary Adventure Awaits!",
        comment:
          "A journey through diverse flavors. An absolute must-visit for food enthusiasts.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: 6,
        name: "Eva Davis",
        position: "Culinary Artist",
        title: "A Symphony of Flavors!",
        comment:
          "The perfect blend of ingredients, creating a symphony of flavors in every dish.",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      },
    ]);
  }, []);

  return (
    <div
      style={{ minHeight: "200vh" }}
      className="relative flex flex-col px-4 pt-24  sm:px-6 lg:px-8">
      <div className="flex-1 space-y-8">
        {reviews.map((review, index) => (
          <Review key={review.id} review={review} index={index} />
        ))}
      </div>
      <h1 className="text-center pb-8 text-2xl font-extrabold lg:text-5xl my-8 text-green-500">
        Join the <span className="text-yellow-500">500+</span> Foodies
        Delighted!
      </h1>
    </div>
  );
};

export default ReviewList;
