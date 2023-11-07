import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./header.css";
import { ModalCreateItem as CreateCategory } from "../../features/ModalCategories";
import { ModalCreateItem as CreateTask } from "../../features/ModalTasks";


export const Header = () => {
  const { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [createModalActive, setCreateModalActive] = useState(false);

  return (
    <header className="header">
      <h1 className="header-title">ToDo List</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li
            className={ "header-list-item"}
          >
            <NavLink to="tasks">Задачи</NavLink>
          </li>
          <li
            className={ "header-list-item"}
          >
            <NavLink to="categories">Категории</NavLink>
          </li>
        </ul>
        <button
          className="header-button"
          onClick={() => {
            setCreateModalActive(true);
          }}
        >
          {isCategories ? "Добавить категорию" : "Добавить задачу"}
        </button>
      </nav>
      {isCategories ? 
      <CreateCategory
      active={createModalActive}
      setActive={setCreateModalActive}
    /> 
      : 
    <CreateTask
      active={createModalActive}
      setActive={setCreateModalActive}
    />
      }
    </header>
  );
};
