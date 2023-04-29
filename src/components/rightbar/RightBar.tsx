import React from "react";

const RightBar: React.FC = () => {
  return (
    <aside className="flex flex-col flex-1">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-x-3">
          <img
            src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/339128116_3617236391939533_1398246439265100487_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I74xkTPGepEAX_8Pdl6&_nc_ht=scontent.fhph1-1.fna&oh=00_AfB0tBycGUDcIgfkWpTgqXqjjtRLMV3slK6WIj6HnIaT5Q&oe=645102B2"
            alt=""
            className="rounded-full w-14 h-14"
          />
          <div className="text-sm">
            <h3 className="font-semibold ">fi_anhh</h3>
            <p className="text-gray-400">Nguyễn Phi Anh</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-blue-500">Chuyển</span>
      </div>
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-semibold text-gray-400">
            Gợi ý cho bạn
          </span>
          <span className="text-xs font-medium">Xem tất cả</span>
        </div>
        {new Array(5).fill(0).map(() => (
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-x-3">
              <img
                src="https://images.unsplash.com/photo-1669490893279-4589b3b1cf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="text-sm">
                <h3 className="font-semibold ">fi_anhh</h3>
                <p className="text-gray-400">Nguyễn Phi Anh</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-blue-500">
              Theo dõi
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightBar;
