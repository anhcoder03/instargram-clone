import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const ListStory = () => {
  return (
    <div className="mb-8">
      <Swiper
        spaceBetween={5}
        slidesPerView={8}
        modules={[Navigation]}
        loop={true}
        navigation
        breakpoints={{
          // when window width is >= 640px
          1440: {
            slidesPerView: 8,
          },
          970: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 2,
          },
        }}
      >
        {new Array(10).fill(0).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center gap-y-2">
              <img
                src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/339128116_3617236391939533_1398246439265100487_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I74xkTPGepEAX_8Pdl6&_nc_ht=scontent.fhph1-1.fna&oh=00_AfB0tBycGUDcIgfkWpTgqXqjjtRLMV3slK6WIj6HnIaT5Q&oe=645102B2"
                alt=""
                className="border-[3px] border-pink-500 rounded-full w-14 h-14 p-[2px]"
              />
              <span className="text-xs ">_hippp._</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListStory;
