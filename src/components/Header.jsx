import MenuHeader from "./MenuHeader";
import { useState, useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import logo from "../assets/logo.png";

const Header = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = [
    "Compra garantida com Mercado Pago",
    "Compre em um ambiente com a segurança do Mercado Livre",
    "Obrigado por nos visitar!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((current) => (current + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-dark-washed-red">
      {/* Phrases */}
      <div className="hidden sm:block w-full bg-mini-banner text-base py-2 text-center font-montserrat text-white font-bold">
        {phrases[currentPhrase]}
      </div>

      {/* Logo and Icons */}
      <div className="w-full justify-around sm:max-w-[900px] sm:px-0 hi:max-w-[1200px] flex flex-col sm:flex-row items-center py-4 px-4 ">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center justify-between sm:justify-center w-full">
            <div className="sm:hidden flex items-center">
              <MenuHeader />
            </div>
            <div className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-16 sm:h-12 min-w-[258px] mx-4 lg:h-16" />
            </div>
            <div className="sm:hidden flex items-center">
              <h1 className="text-white">
                <RiShoppingBag4Line size={35} />
              </h1>
            </div>
          </div>
        </div>

        <div className="relative mt-4 sm:mt-0 sm:ml-4 flex-1 sm:flex-none w-full sm:max-w-[250px] md:max-w-[250px]">
          <input
            className="w-full h-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none sm:rounded-lg"
            placeholder="O que você procura?"
            type="text"
          />
          <button className="absolute top-0 right-0 h-full w-10 bg-dark-washed-red text-white border-solid border-2 border-white rounded-full flex items-center justify-center sm:border-none sm:bg-black sm:rounded-lg">
            <MdSearch size={30} />
          </button>
        </div>

        <div className="mt-4 sm:mt-0 flex items-center">
          <div className="hidden hi:flex items-center block">
            <div>
              <div className="text-white">
                <TbTruckDelivery size={41} />
              </div>
            </div>
            <div className="ml-2 text-white">
              <h1 className="text-xs font-bold si:text-lg">Rastrear Pedidos</h1>
              <p className="text-xs">Minha Conta</p>
            </div>
          </div>
          <div className="hidden hi:flex ml-6 items-center block">
            <div>
              <div className="text-white">
                <FaWhatsapp size={33} />
              </div>
            </div>
            <div className="ml-2 text-white">
              <h1 className="text-xs font-bold si:text-lg">Atendimento</h1>
              <p className="text-xs">Fale Conosco</p>
            </div>
          </div>
          <div className="hidden sm:flex ml-6 items-center">
            <div>
              <h1 className="text-white">
                <RiShoppingBag4Line size={35} />
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:flex w-full justify-center bg-dark-washed-red">
        <div className="w-full sm:w-[1200px] h-[1px] bg-[#FFCD4D]"></div>
      </div>

      {/* Menu Header */}
      <div className="hidden sm:block">
        <MenuHeader />
      </div>
    </div>
  );
};

export default Header;
