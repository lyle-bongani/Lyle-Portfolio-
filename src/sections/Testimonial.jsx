import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-[280px] sm:w-[320px] md:w-[360px] cursor-pointer overflow-hidden rounded-xl border p-4 sm:p-6 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 object-cover"
          src={img}
          alt={name}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm sm:text-base font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs sm:text-sm font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-300 line-clamp-4">
        {body}
      </blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Testimonials</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-8 sm:mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
