import React from "react";
import style from "./modal.module.css";
import cn from "classnames";
import { Item } from "../../types/Item";

interface Props {
  item?: Item;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<Props> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={cn(style.modal, active ? style.active : "")}
      onClick={() => {
        clearState && clearState();
        setActive(false);
      }}
    >
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
