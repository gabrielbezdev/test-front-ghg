import MenuHeader from "./MenuHeader";
import { useState, useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
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
      <div className="w-screen bg-mini-banner text-base py-2 text-center font-montserrat text-white font-bold">
        {phrases[currentPhrase]}
      </div>
      <div className="w-[1200px] flex items-center justify-between py-4">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <input className="ml-4" placeholder="O que você procura?" type="text" />
        <div className="ml-4 flex items-center">
          <div className="flex items-center">
            <div>
              <h1 className="text-white">
                <TbTruckDelivery size={41} />
              </h1>
            </div>
            <div className="ml-2 text-white">
              <h1 className="text-lg font-bold">Rastrear Pedidos</h1>
              <p className="text-xs">Minha Conta</p>
            </div>
          </div>
          <div className="flex ml-6 items-center">
            <div>
              <h1 className="text-white">
                <FaWhatsapp size={33} />
              </h1>
            </div>
            <div className="ml-2 text-white">
              <h1 className="text-lg font-bold">Atendimento</h1>
              <p className="text-xs">Fale Conosco</p>
            </div>
          </div>
          <div className="flex ml-6 items-center">
            <div>
              <h1 className="text-white">
                <RiShoppingBag4Line size={35} />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-dark-washed-red">
        <div className="w-[1200px] h-[1px] bg-[#FFCD4D] max-md:hidden"></div>
      </div>

      <div>
        <MenuHeader />
      </div>
    </div>
  );
};

export default Header;
