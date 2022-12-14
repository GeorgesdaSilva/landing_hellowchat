import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Recursos de bate-papo <br className="sm:block hidden" /> ao vivo
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lide com todas as perguntas de seus clientes a partir de uma interface! Conheça o sistema de de tickets do HellowChat.
      </p>
      <a href="http://api.whatsapp.com/send?phone=5563991000032&text=Ol%C3%A1%2C%20Tudo%20bem%3F%20Como%20podemos%20te%20ajudar%20hoje%3F%20">
      <Button styles={`mt-10 bg-secondary text-white`} />
      </a>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
