import { useDispatch } from "react-redux";

import { Modal } from "../../../../shared/hoc/Modal";
import { ModalHeader } from "../../../../entities/Modal";
import { ModalText } from "../../../../entities/Modal";
import { ModalFooter } from "../../../../entities/Modal";
import { tasksClearedCategories } from "../../../../shared/utils/store/reducers/tasksSlice";
import { categoriesRemoved } from "../../../../shared/utils/store/reducers/categoriesSlice";

interface ModalRemoveItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  const text = `Вы уверены, что хотите удалить категорию "${item.name}"?`;

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление категории"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={() => {
                dispatch(categoriesRemoved(item.id));
                dispatch(tasksClearedCategories(item.id));
              }
        }
      />
    </Modal>
  );
};
