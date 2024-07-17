import MenuHeader from "./MenuHeader";
import { useState, useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import logo from "../assets/logo.png";

const Header = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // Eu ia criar um arquivo separado para guardar as frases, mas como é algo bem pequeno
  // optei por deixar aqui, caso eu fosse clonar a página toda, teria colocado em um arquivo
  // de dataBase para poder reutilizar caso necessário
  const phrases = [
    "Compra garantida com Mercado Pago",
    "Compre em um ambiente com a segurança do Mercado Livre",
    "Obrigado por nos visitar!",
  ];

  // Fiz o uso do useEffect para assistir e ficar rodando meu carrosel de frases, bem rápido e prático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((current) => (current + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-dark-washed-red">
      <div className="hidden sm:block w-full bg-mini-banner text-sm py-2 text-center font-montserrat text-white font-bold">
        {phrases[currentPhrase]}
      </div>
      <div className="w-full justify-around sm:max-w-[900px] sm:px-0 hi:max-w-[1200px] flex flex-col sm:flex-row items-center py-4 px-4 ">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center justify-between sm:justify-center w-full">
            <div className="sm:hidden flex items-center">
              <MenuHeader />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="h-16 sm:h-12 min-w-[258px] mx-4 lg:h-16"
              />
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
          {/* 
            Tentei usar as propriedades do tailwind invisible e visible aqui, mas como elas não retiram 
            de fato a div optei por deixar o hidden e block, resolveram o problema, mas não consegui retirar
            os alertas em hidden e block, não sei se é so no meu vscode por conta do tailwind ou por
            algum conflito do proprio tailwind, mas irei pesquisar mais sobre isso
        */}
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

      {/*
        A linha divisória amarela que tem na referência eu tentei colocar como borda, mas
        como minha habilidade com tailwind ainda não esta tão boa, acabei perdendo muito
        tempo e decidi colocar uma div
    */}
      <div className="hidden sm:flex w-full justify-center bg-dark-washed-red">
        <div className="w-full sm:w-[1200px] h-[1px] bg-[#FFCD4D]"></div>
      </div>

      {/* Decidi colocar o menu em um componente separado pois o código estava grande demais */}
      <div className="hidden sm:block">
        <MenuHeader />
      </div>
    </div>
  );
};

export default Header;
