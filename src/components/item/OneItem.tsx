import { FC } from "react";

interface PropItem {
  src: string;
  name: string;
  round?: boolean;
  size?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const OneItem: FC<PropItem> = ({
  src,
  name,
  round,
  size,
  className,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center w-full gap-1 p-1 transition-all rounded-md cursor-pointer"
    >
      <img
        className={`${(size ||= "h-6 w-6 m-1")} ${
          round ? "rounded-full" : ""
        } ${className}`}
        src={src}
        alt=""
      />
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default OneItem;
