import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";
import { LoaderProps } from "../types";

const Loader: React.FC<LoaderProps> = ({
  visible = true,
  width = "200",
  color = "#4fa94d",
  ariaLabel = "infinity-spin-loading",
}) => (
  <div className={s.loader}>
    <InfinitySpin
      visible={visible}
      width={width}
      color={color}
      ariaLabel={ariaLabel}
    />
  </div>
);

export default Loader;
