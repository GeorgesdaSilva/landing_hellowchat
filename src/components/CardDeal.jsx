import { relatorios } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Mantenha-se informado com  <br className="sm:block hidden" /> relatórios. {/* gerados automaticamente. */}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Veja o que está acontecendo atualmente com suas conversas e agentes ou avalie quais 
      rótulos ou caixas de entrada são os mais ativos e analise vários indicadores 
      importantes de desempenho - no painel do HellowChat.
      </p>
      <a href="http://api.whatsapp.com/send?phone=5563991000032&text=Ol%C3%A1%2C%20Tudo%20bem%3F%20Como%20podemos%20te%20ajudar%20hoje%3F%20">
      <Button styles={`mt-10 bg-secondary text-white`} />
      </a>
    </div>

    <div className={layout.sectionImg}>
      <img src={relatorios} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
