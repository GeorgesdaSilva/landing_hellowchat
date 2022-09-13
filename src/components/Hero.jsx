import styles from "../style";
import { connection, discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={` bg-pink-gradient-1 flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className=" bg-white flex flex-row items-center py-[6px] px-4  rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} text-secondary ml-2 font-semibold`}>
            <span className="text-secondary font-normal">20%</span> de desconto{" "}
            <span className="text-secondary font-normal">no 1° Mês</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Seu Atendimento <br className="sm:block hidden" />{" "}
            <span className="text-gradient">em outro</span>{" "}
          </h1>
{/*           <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Nivel.
        </h1>
        <p className={`${styles.paragraph} max-w-[580px] mt-5 text-white`}>
        Economize tempo gerenciando todas as mensagens do cliente em um aplicativo. 
        Acompanhe todas as conversas.
{/*         Economize tempo gerenciando todas as mensagens do cliente em um aplicativo. 
        Acompanhe todas as conversas, automatize tarefas repetitivas, trabalhe em equipe e tome melhores decisões 
        de negócios com base em insights de dados reais. */}
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={connection} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        {/* gradient end */}
      </div>

{      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>}
    </section>
  );
};

export default Hero;
