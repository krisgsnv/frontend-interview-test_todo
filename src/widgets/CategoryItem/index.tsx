import { useState } from "react";
import { useSelector } from "react-redux";
import { TextItem, ButtonsItem } from "../../entities/Item";
import { selectAllCategories } from "../../shared/utils/store/reducers/categoriesSlice";
import { ModalEditItem, ModalRemoveItem } from "../../features/ModalCategories";
import { Item } from '../../shared/types/Item';
import style from "./item.module.css";

interface Props {
  item: Item;
}

export const CategoryItem: React.FC<Props> = ({ item }) => {
  const categories = useSelector(selectAllCategories);
  const [editModalActive, setEditModalActive] = useState(false)
  const [removeModalActive, setRemoveModalActive] = useState(false);

  return (
    <>
      <li className={style.item}>
        <TextItem 
          item={item}
          categories={categories}
        />
        <ButtonsItem 
          setEditModalActive={setEditModalActive}
          setRemoveModalActive={setRemoveModalActive}
        />
        <ModalEditItem
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveItem
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
