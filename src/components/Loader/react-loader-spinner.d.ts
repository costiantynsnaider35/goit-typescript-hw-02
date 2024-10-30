declare module "react-loader-spinner" {
  import { FC } from "react";

  export interface InfinitySpinProps {
    visible?: boolean;
    width?: string;
    color?: string;
    ariaLabel?: string;
  }

  export const InfinitySpin: FC<InfinitySpinProps>;
}
