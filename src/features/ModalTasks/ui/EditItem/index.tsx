import { useState } from "react";
import { useDispatch } from "react-redux";

import { Modal } from "../../../../shared/hoc/Modal";
import { ModalHeader } from "../../../../entities/Modal";
import { ModalRow } from "../../../../entities/Modal";
import { Textarea } from "../../../../shared/ui/Textarea";
import { ModalFooter } from "../../../../entities/Modal";
import { tasksUpdated } from "../../../../shared/utils/store/reducers/tasksSlice";
import { Item } from "../../../../shared/types/Item";

interface ModalEditItemProps {
  item: Item;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(item.name);
  const [selected, setSelected] = useState(item.category || "");
  const [description, setDescription] = useState(item.description);

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title={"Редактирование задачи"}
      />
        <ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      <Textarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          dispatch(
            tasksUpdated({
                  id: item.id,
                  name,
                  description,
                  category: selected,
                })
          );
          setActive(false);
        }}
      />
    </Modal>
  );
};
