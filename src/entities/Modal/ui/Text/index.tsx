import style from "./text.module.css";

interface ModalTextProps {
    text: string;
  }
  
  export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
    return <p className={style.text}>{text}</p>;
  };
  