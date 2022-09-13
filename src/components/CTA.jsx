import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-pink-gradient-1 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col ">
      <h2 className={`${styles.heading2} text-white`}>Experimentar o<br/> HellowChat agora!</h2>
      <p className={`${styles.paragraph}  text-white max-w-[470px] mt-5`}>
      Tudo o que você precisa para escalar o seu atendimento e 
      seus negócios em qualquer lugar do planeta.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles={"bg-white text-secondary"}/>
    </div>
  </section>
);

export default CTA;
