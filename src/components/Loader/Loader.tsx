import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";
import React from "react";
import { LoaderProps } from "../types";

const Loader: React.FC<LoaderProps> = ({ width, color }) => (
  <div className={s.loader}>
    <InfinitySpin width={width} color={color} />
  </div>
);

export default Loader;
