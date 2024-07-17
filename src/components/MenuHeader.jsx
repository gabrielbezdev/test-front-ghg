import { useState } from "react";
import menuData from "../menu.json";
import { MdKeyboardArrowUp } from "react-icons/md";

const MenuHeader = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  const handleCategoryMouseEnter = (categoryName) => {
    setHoveredCategory(categoryName);
    setHoveredSubcategory(null);
  };

  const handleCategoryMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredSubcategory(null);
  };

  const handleSubcategoryMouseEnter = (subcategoryName) => {
    setHoveredSubcategory(subcategoryName);
  };

  const handleSubcategoryMouseLeave = () => {};

  return (
    <nav className="w-screen flex justify-center bg-dark-washed-red">
      <ul className="flex">
        {menuData.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => handleCategoryMouseEnter(item.nome)}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <button
              className={`text-white text-sm font-bold px-20 py-4 cursor-pointer flex items-center ${
                hoveredCategory === item.nome ? "bg-opacity-20 bg-black transition duration-300" : "transition duration-300"
              }`}
            >
              {item.nome}
              <MdKeyboardArrowUp
                className={`ml-1 size-4 ${
                  hoveredCategory === item.nome ? "rotate-180 transition duration-500" : "transition duration-500"
                }`}
              />
            </button>
            {item.subcategorias &&
              item.subcategorias.length > 0 &&
              hoveredCategory === item.nome && (
                <div className="absolute left-0 bg-[#111010] cursor-pointer rounded-bl-lg">
                  <div className="h-[150px] min-w-[300px]">
                    <ul>
                      {item.subcategorias.map((subcategoria, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-2 flex hover:bg-gray-500/25"
                          onMouseEnter={() =>
                            handleSubcategoryMouseEnter(subcategoria.nome)
                          }
                          onMouseLeave={handleSubcategoryMouseLeave}
                        >
                          <button className="text-white ml-3">
                            {subcategoria.nome}
                          </button>
                          {hoveredSubcategory === subcategoria.nome &&
                            subcategoria.subcategorias && (
                              <div className="flex absolute left-full top-0 bg-[#111010] cursor-pointer rounded-r-lg">
                                <div className="h-[150px] w-[1px] bg-gray-400"></div>
                                <ul className="h-[150px] min-w-[200px]">
                                  {subcategoria.subcategorias.map(
                                    (subsubcategoria, subsubIndex) => (
                                      <li
                                        key={subsubIndex}
                                        className="py-2 flex hover:bg-gray-500/25"
                                      >
                                        <button className="text-white ml-3">
                                          {subsubcategoria.nome}
                                        </button>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuHeader;
