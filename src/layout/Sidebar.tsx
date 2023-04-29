import { IconLogo } from "../components/icons";
import { NavLink } from "react-router-dom";
import { ListSidebar } from "../utils/ListMenu";
const Sidebar = () => {
  return (
    <div className="fixed flex flex-col border-r bottom-0 top-0 flex-1 max-w-[250px] w-full border-gray-500 py-10 px-5">
      <div className="mb-8">
        <IconLogo></IconLogo>
      </div>
      <div className="flex flex-col gap-y-3">
        {ListSidebar.map((item) => (
          <NavLink
            to={item.to}
            key={item.title}
            className={({ isActive }) =>
              isActive
                ? "flex items-center font-bold  gap-x-5 hover:bg-slate-100 py-3 pl-3 rounded-lg"
                : "flex items-center gap-x-5 hover:bg-slate-100 py-3 pl-3 rounded-lg "
            }
          >
            <span>{item.icon()}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
