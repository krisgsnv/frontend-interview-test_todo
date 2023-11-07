import { useState } from "react";
import { useDispatch } from "react-redux";

import { Modal } from "../../../../shared/hoc/Modal";
import { ModalHeader } from "../../../../entities/Modal";
import { Input } from "../../../../shared/ui/Input";
import { Textarea } from "../../../../shared/ui/Textarea";
import { ModalFooter } from "../../../../entities/Modal";
import { categoriesUpdated } from "../../../../shared/utils/store/reducers/categoriesSlice";

interface ModalEditItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
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
  const [description, setDescription] = useState(item.description);

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title={"Редактирование категории"}
      />
      <Input name={name} setName={setName} size="large" /> 
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
            categoriesUpdated({ id: item.id, name, description })
          );
          setActive(false);
        }}
      />
    </Modal>
  );
};
