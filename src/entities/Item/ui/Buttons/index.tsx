import React from "react";

import edit from "../../../../app/assets/edit.svg";
import remove from "../../../../app/assets/remove.svg";
import style from "./button.module.css";

interface ListItemProps {
    setEditModalActive: React.Dispatch<React.SetStateAction<boolean>>;
    setRemoveModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Buttons: React.FC<ListItemProps> = ({ setEditModalActive, setRemoveModalActive }) => {

  return (
    <>
        <div>
          <button
            className={style.btn}
            onClick={() => {
              setEditModalActive(true);
            }}
          >
            <img src={edit} alt="edit" />
          </button>
          <button
            className={style.btn}
            onClick={() => {
              setRemoveModalActive(true);
            }}
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
    </>
  );
};
