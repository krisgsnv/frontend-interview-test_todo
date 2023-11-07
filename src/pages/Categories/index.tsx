import { useSelector } from "react-redux";

import { CategoryItem } from "../../widgets/CategoryItem";
import { selectAllCategories } from "../../shared/utils/store/reducers/categoriesSlice";

export const Categories = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <CategoryItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
