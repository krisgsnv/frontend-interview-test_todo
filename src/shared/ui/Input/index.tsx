import important from "../../../app/assets/important.svg";
import cn from "classnames";
import style from "./input.module.css";

interface InputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  setName,
  size,
}) => {
  return (
    <div
      className={cn(style.wrapper, size === "large" ? style.large : "")}
    >
      <input
        id="modalinput"
        className={style.input}
        placeholder="Введите имя задачи/категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={important} alt="important" className={style.icon} />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
