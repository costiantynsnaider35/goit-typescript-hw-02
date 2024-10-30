import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";
import React from "react";
import { LoaderProps } from "../types";

const Loader: React.FC<LoaderProps> = () => (
  <div className={s.loader}>
    <InfinitySpin
      visible={true}
      width="200"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
    />
  </div>
);

export default Loader;
