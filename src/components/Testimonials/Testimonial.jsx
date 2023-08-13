import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Container from "../Shared/Container";


const Testimonials = () => {
    const reviews = [
      {
        _id: "1",
        name: "Koushik Roy",
        image:
          "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rating: 4.2,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        _id: "2",
        name: "Rahyan Shamsi",
        image:
          "https://images.unsplash.com/photo-1560884117-8e9be30e4aec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 3.5,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        _id: "3",
        name: "MD Easin",
        image:
          "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rating: 4,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        _id: "4",
        name: "MD Eyakub",
        image:
          "https://plus.unsplash.com/premium_photo-1689708385255-fe5ee98674ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rating: 3.7,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        _id: "5",
        name: "Al Mahmud",
        image:
          "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4.7,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ];

    return (
      <Container>
        <Swiper className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 mb-5">
                <div className="avatar mt-10">
                  <div>
                    <img className="w-40 rounded-xl" src={review.image} />
                  </div>
                </div>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-gray-800">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    );
};

export default Testimonials;