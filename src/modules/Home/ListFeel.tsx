import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import {
  IconComment,
  IconHeart,
  IconSave,
  IconShare,
} from "../../components/icons";
import { Link } from "react-router-dom";

const ListFeel = () => {
  return (
    <div className="max-w-[500px] mx-auto flex flex-col justify-center gap-y-5">
      {new Array(10).fill(0).map((item) => (
        <div className="flex flex-col border-b border-gray-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <img
                src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/339128116_3617236391939533_1398246439265100487_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I74xkTPGepEAX_8Pdl6&_nc_ht=scontent.fhph1-1.fna&oh=00_AfB0tBycGUDcIgfkWpTgqXqjjtRLMV3slK6WIj6HnIaT5Q&oe=645102B2"
                alt=""
                className="border-[3px] border-pink-500 rounded-full w-10 h-10 p-[2px]"
              />
              <h3 className="text-sm font-medium">hongocha</h3>
              <span className="text-sm text-gray-400">• 2 ngày</span>
            </div>
            <span className="text-2xl font-semibold">...</span>
          </div>
          <div className="mt-5">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/images/hongocha.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/hongocha.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/hongocha.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center gap-x-3">
              <IconHeart></IconHeart>
              <IconComment></IconComment>
              <IconShare></IconShare>
            </div>
            <div>
              <IconSave></IconSave>
            </div>
          </div>
          <p className="text-sm font-medium">
            <span>7.121</span> lượt thích
          </p>
          <div className="mb-3">
            <p className="text-sm">
              <Link to={"/"} className="font-semibold">
                hongocha{" "}
              </Link>
              See you guys on my Livestream tonight at 8:30 on my Fanpage. We
              gonna talk more details about my Lovesongs concert in 3 Of June
              ❤️❤️❤️❤️❤️
            </p>
          </div>
          <p className="text-sm text-gray-400 cursor-pointer">
            Xem tất cả 38 bình luận
          </p>
          <div className="relative flex">
            <input
              type="text"
              placeholder="Thêm bình luận..."
              className="w-full p-3 pl-0 outline-none"
            />
            <button className="text-sm font-semibold text-blue-500">
              Đăng
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListFeel;
