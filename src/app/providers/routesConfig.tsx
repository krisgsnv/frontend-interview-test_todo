import { Routes, Route } from 'react-router-dom';

import { Tasks } from "../../pages/Tasks";
import { Categories } from "../../pages/Categories";

export const useRouts = () => {

  return (
    <Routes>
       <Route index element={<Tasks />} />
       <Route path="/tasks" element={<Tasks />} />
        <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};