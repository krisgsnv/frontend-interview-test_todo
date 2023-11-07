import { useState } from "react";
import { useDispatch } from "react-redux";

import { Modal } from "../../../../shared/hoc/Modal";
import { ModalHeader } from "../../../../entities/Modal";
import { ModalRow } from "../../../../entities/Modal";
import { Textarea } from "../../../../shared/ui/Textarea";
import { ModalFooter } from "../../../../entities/Modal";
import { tasksAdded } from "../../../../shared/utils/store/reducers/tasksSlice";

interface ModalCreateItemProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");

  function clearState() {
    setName("");
    setDescription("");
    setSelected("");
  }

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title={"Создание задачи"}
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
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        onSubmit={
          name
            ? () => {
                dispatch(
                  tasksAdded({
                        name,
                        description,
                        category: selected,
                      })
                );
                clearState();
                setActive(false);
              }
            : () => {}
        }
      />
    </Modal>
  );
};
