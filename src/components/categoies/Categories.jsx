import { PlusOutlined, EditOutlined} from "@ant-design/icons";
import { useState } from "react";
import Add from "./Add";
import "./style.css";
import Eddit from "./Eddit";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setAddIsModalOpen] = useState(false);
  const [isEditModalOpen,  setIsEditModalOpen] = useState(false);
 

  return (
    <ul className="flex gap-4 text-lg md:flex-col">
      {categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))}
      <li
        onClick={() => setAddIsModalOpen(true)}
        className="!bg-purple-800 hover:opacity-90 category-item"
      >
        <span>
          <PlusOutlined className="md:text-2xl " />
        </span>
      </li>
      <li
        onClick={() =>  setIsEditModalOpen(true)}
        className="!bg-orange-800 hover:opacity-90 category-item"
      >
        <span>
          <EditOutlined className="md:text-2xl " />
        </span>
      </li>

      <Add
        isAddModalOpen={isAddModalOpen}
        setAddIsModalOpen={setAddIsModalOpen}
        categories={categories}
        setCategories={setCategories}
      />

      <Eddit 
      isEditModalOpen={isEditModalOpen}
      setIsEditModalOpen={ setIsEditModalOpen}
      categories={categories}
      setCategories={setCategories}
      />
    </ul>
  );
};

export default Categories;
