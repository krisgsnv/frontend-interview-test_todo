import { useDispatch } from "react-redux";

import { Modal } from "../../../../shared/hoc/Modal";
import { ModalHeader } from "../../../../entities/Modal";
import { ModalText } from "../../../../entities/Modal";
import { ModalFooter } from "../../../../entities/Modal";
import { tasksRemoved} from "../../../../shared/utils/store/reducers/tasksSlice";

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
  const text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={() => dispatch(tasksRemoved(item.id))
        }
      />
    </Modal>
  );
};
