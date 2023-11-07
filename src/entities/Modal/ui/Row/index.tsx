import { useState } from "react";
import { Input } from "../../../../shared/ui/Input";
import { useSelector } from "react-redux";
import down from "../../../../app/assets/down.svg";
import { selectAllCategories } from "../../../../shared/utils/store/reducers/categoriesSlice";
import { Select } from "../../../../shared/ui";
import style from "./row.module.css";

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false),
  options = useSelector(selectAllCategories);

  return (
    <div className={style.row}>
      <Input name={name} setName={setName} />
      <Select
      down={down}
      selected={selected}
      setSelected={setSelected}
      isActive={isActive}
      setIsActive={setIsActive}
      options={options}
    />
    </div>
  );
};
