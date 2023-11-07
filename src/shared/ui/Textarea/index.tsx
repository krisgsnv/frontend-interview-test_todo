import style from "./textarea.module.css";

interface TextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const Textarea: React.FC<TextareaProps> = ({
  description,
  setDescription,
}) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className={style.modaltextarea}
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
