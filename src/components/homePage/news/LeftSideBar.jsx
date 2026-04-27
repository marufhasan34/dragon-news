import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-6">all category</h3>
      <ul className="flex flex-col text-gray-500 text-center gap-4">
        {categories.map((category) => (
          <li
            className={`${activeId === category.category_id && "bg-slate-400"}`}
            key={category.category_id}
          >
            <Link className="block p-2" href={`/category/${category.category_id}`}>
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
