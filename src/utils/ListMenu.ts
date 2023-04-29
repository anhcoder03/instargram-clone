import {
  IconExplore,
  IconHeart,
  IconHome,
  IconMessage,
  IconPlusBorder,
  IconReel,
  IconSearch,
} from "../components/icons";

interface IListSidebar {
  icon: typeof IconHome;
  title: string;
  to: string;
}

export const ListSidebar: IListSidebar[] = [
  {
    title: "Trang chủ",
    to: "/",
    icon: IconHome,
  },
  {
    title: "Tìm kiếm",
    to: "/search",
    icon: IconSearch,
  },
  {
    title: "Khám phá",
    to: "/explore",
    icon: IconExplore,
  },
  {
    title: "Reels",
    to: "/reels",
    icon: IconReel,
  },
  {
    title: "Tin nhắn",
    to: "/message",
    icon: IconMessage,
  },
  {
    title: "Thông báo",
    to: "/news",
    icon: IconHeart,
  },
  {
    title: "Tạo",
    to: "/news",
    icon: IconPlusBorder,
  },
];
