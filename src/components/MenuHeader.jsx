import { useState } from "react";
import menuData from "../menu.json";
import {
  MdKeyboardArrowUp,
  MdMenu,
  MdClose,
  MdOutlineMail,
  MdEventAvailable,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

// Decidi criar um componente separado para os menus pois o código estava ficando
// maior do que eu esperava e estava visualmente feio e difícil de compreender junto
// do header

const MenuHeader = () => {
  // O useState foi usado basicamente para receber quem foi selecionado
  // e quem foi aberto, referente a menu, categorias e subcategorias

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // Criei as funções MouseEnter e MouseLeave pra conseguir controlar a questão
  // da permanência do hover mesmo após tirar o mouse de cima da categoria ou
  // subcategoria selecionada

  const handleCategoryMouseEnter = (categoryName) => {
    setHoveredCategory(categoryName);
    setHoveredSubcategory(null);
  };

  const handleSubcategoryMouseEnter = (subcategoryName) => {
    setHoveredSubcategory(subcategoryName);
  };

  const handleCategoryMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredSubcategory(null);
  };

  const handleSubcategoryMouseLeave = () => {};

  // Já as toggles foram criadas para controlar a abertura do menu no mobile
  // e das categorias e subcategorias no desktop

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveCategory(null);
    setActiveSubcategory(null);
  };

  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const toggleSubcategory = (subcategoryName) => {
    setActiveSubcategory(
      activeSubcategory === subcategoryName ? null : subcategoryName
    );
  };

  return (
    <div className="relative">
      {/*
        Nos meus menus, tive um pouco de dificuldade principalmente nesse da versão mobile
        com posicionamento, em grande parte por nunca ter usado o tailwind, mas no final
        saiu, o código ficou bem grande e eu particularmente não fiquei tão feliz com ele,
        mas o menu ficou funcional e resolvi parar de mexer pois o resultado final esta ok
    */}
      <div className="sm:hidden top-full left-0">
        <button
          onClick={toggleMenu}
          className="text-white transition-transform duration-300 transform hover:scale-110"
        >
          {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
        {/*
        Eu não coloquei a função de abrir e fechar o as categorias e subcategorias com o click do mouse
        porque por algum motivo que ainda não decifrei estava conflitando com a de abrir ao passar o mouse
        então optei pela função que foi solicitada, ai nesse caso para testar e ver o resultado certinho eu
        indico diminuir a janela do navegador, pois se utilizar a toggle device do DevTools para simular o
        celular ele vai abrir com os clicks mas não vai fechar, apenas se clicar para abrir outra categoria
    */}
        <div
          className={`fixed mt-[101px] left-0 h-full w-[300px] bg-dark-washed-red z-50 transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-center mb-3 mt-3">
            <div>
              <div className="text-white">
                <TbTruckDelivery size={45} />
              </div>
            </div>
            <div className="ml-2 text-white">
              <h1 className="text-base si:text-lg">Rastrear Pedidos</h1>
            </div>
          </div>
          <ul className="h-screen bg-dark-washed-red">
            {menuData.map((item, index) => (
              <li
                key={index}
                className="relative group border-t-2 border-dark-washed-red bg-white"
                onMouseEnter={() => handleCategoryMouseEnter(item.nome)}
                onMouseLeave={handleCategoryMouseLeave}
              >
                <button
                  className="flex w-full justify-between text-black text-sm font-bold px-4 py-3 cursor-pointer"
                  onClick={() => toggleCategory(item.nome)}
                >
                  {item.nome}
                  <MdKeyboardArrowUp
                    className={`inline-block ml-2 transform ${
                      hoveredCategory === item.nome ||
                      activeCategory === item.nome
                        ? "rotate-0"
                        : "rotate-180"
                    } transition-transform duration-200`}
                  />
                </button>
                {item.subcategorias &&
                  item.subcategorias.length > 0 &&
                  (hoveredCategory === item.nome ||
                    activeCategory === item.nome) && (
                    <ul className="ml-4 mt-2">
                      {item.subcategorias.map((subcategoria, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-2 flex flex-col items-start"
                          onMouseEnter={() =>
                            handleSubcategoryMouseEnter(subcategoria.nome)
                          }
                          onMouseLeave={handleSubcategoryMouseLeave}
                        >
                          <button
                            className="flex w-4/5 justify-between text-black ml-3"
                            onClick={() => toggleSubcategory(subcategoria.nome)}
                          >
                            {subcategoria.nome}
                            <MdKeyboardArrowUp
                              className={`inline-block ml-2 transform ${
                                hoveredSubcategory === subcategoria.nome ||
                                activeSubcategory === subcategoria.nome
                                  ? "rotate-0"
                                  : "rotate-180"
                              } transition-transform duration-200`}
                            />
                          </button>
                          {hoveredSubcategory === subcategoria.nome ||
                          activeSubcategory === subcategoria.nome
                            ? subcategoria.subcategorias && (
                                <ul className="ml-4 mt-2">
                                  {subcategoria.subcategorias.map(
                                    (subsubcategoria, subsubIndex) => (
                                      <li
                                        key={subsubIndex}
                                        className="py-2 flex border-b"
                                      >
                                        <button className="text-black ml-3">
                                          {subsubcategoria.nome}
                                        </button>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )
                            : null}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
            {/* Essa parte foi só pra tentar me aproximar da referência */}
            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex items-center mb-2">
                <div className="text-white">
                  <FaWhatsapp size={20} />
                </div>
                <div className="ml-1 text-white">
                  <h1 className="text-base si:text-lg">(11) 3300-5462</h1>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-white">
                  <MdOutlineMail size={20} />
                </div>
                <div className="ml-1 text-white">
                  <h1 className="text-base si:text-lg">
                    gabrielbvl2024@gmail.com
                  </h1>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-white">
                  <MdEventAvailable size={20} />
                </div>
                <div className="ml-1 text-white">
                  <h1 className="text-base si:text-lg">
                    Disponível para início imediato
                  </h1>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

      {/*
        O menu da versão desktop foi razoavelmente mais tranquilo de fazer do que
        o sanduiche da versão mobile, o código ficou mais enxuto e melhor de entender
        
        Esse menu respeita tudo que foi pedido no teste, como a renderização dos itens
        como dropdown apenas quando o mouse estiver em cima e o destaque visual no que
        esta ativo no momento, além de seguir a referência claro, digo isso pois o
        menu do mobile não abre apenas passando o mouse e não mantem o destaque na
        subcategoria, mas fiz dessa forma para seguir a referência certinho
    */}
      <div
        className={`hidden sm:flex w-screen justify-center bg-dark-washed-red`}
      >
        <ul className="flex flex-col sm:flex-row">
          {menuData.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleCategoryMouseEnter(item.nome)}
              onMouseLeave={handleCategoryMouseLeave}
            >
              <button
                className={`min-w-[200px] text-white text-sm font-bold px-15 py-4 cursor-pointer block ${
                  hoveredCategory === item.nome ? "bg-opacity-20 bg-black" : ""
                }`}
                onClick={() => toggleCategory(item.nome)}
              >
                {item.nome}
                <MdKeyboardArrowUp
                  className={`inline-block ml-2 transform ${
                    hoveredCategory === item.nome ? "rotate-0" : "rotate-180"
                  } transition-transform duration-200`}
                />
              </button>
              {item.subcategorias &&
                item.subcategorias.length > 0 &&
                (hoveredCategory === item.nome ||
                  activeCategory === item.nome) && (
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
      </div>
    </div>
  );
};

export default MenuHeader;
