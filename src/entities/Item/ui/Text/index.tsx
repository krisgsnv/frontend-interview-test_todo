import { CategoriesState } from "../../../../shared/types/Categories";
import { Item } from "../../../../shared/types/Item";
import style from './text.module.css';

interface Props {
  item: Item;
  categories: CategoriesState[];
}

export const Text: React.FC<Props> = ({ item, categories }) => {

  return (
    <>
        <div className={style.wrapper}>
          <div className={style.content}>
            <h3 className={style.title}>{item.name}</h3>
            {item.category && (
              <span className={style.category}>
                {
                  categories.find((category) => category.id === item.category)
                    ?.name
                }
              </span>
            )}
          </div>
          <div className={style.description}>{item.description}</div>
        </div>
    </>
  );
};
