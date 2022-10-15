import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../style";
import Button from "./Button"


gsap.registerPlugin(ScrollTrigger);

const Sectiontwo = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#T1", {
        scrollTrigger: {
          trigger: ".B1",
          start: "center center",
          end: "+=50%",
          pin: "#T1",
          markers: false,
        },
      });
     gsap.to("#T2", {
        scrollTrigger: {
          trigger: ".B2",
          start: "+=20% center",
          end: "+=30%",
          pin: "#T2",
          markers: false,
        },
      });

      gsap.from(".subtitle_sec2", {
        y: 200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".B2",
          start: "center center",
          markers: false,
        },
      });
      gsap.to("#T2", {
        yPercent: -150,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".B2",
          start: "center center",
          markers: false,
        },
      });

      /* Scala */
      gsap.from("#T1", {
        scale: 50,
        opacity: 0,
      });
      gsap.to("#T1", {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          indent: 300,
          trigger: ".B1",
          scrub: true,
          start: "top bottom",
          end: "top center",
          markers: false,
        },
      });
      /* Opacity T1 */
      gsap.from("#T1", {
        opacity: 1,
      });
      gsap.to("#T1", {
        opacity: 0,
        scrollTrigger: {
          indent: 300,
          trigger: ".B1",
          scrub: true,
          start: "+=80% center",
          end: "center top",
          markers: false,
        },
      });

      gsap.from("#T2", {
        scale: 50,
        opacity: 0,
      });
      gsap.to("#T2", {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          indent: 300,
          trigger: ".B2",
          scrub: true,
          start: "top center",
          end: "top top",
          markers: false,
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className={`${styles.marginX}`}>
      <div className="mx-auto">
        <div className=" text-secondary font-bold font-poppins overflow-hidden text-[48px] leading-[48px] lg:text-[86px] lg:leading-[86px] text-center">
          <div className="B1 h-[50vh] flex flex-col justify-center items-center">
            <h1 id="T1" className=" overflow-hidden">
              Criação de chamados <br className="block lg:hidden" /> simples
            </h1>
          </div>

          <div className=" relative B2 h-[100vh] flex flex-col justify-top items-center">
            <div id="T2" className=" absolute top-[10%] opacity-0">
              <h1 className="overflow-hidden">
                Mas poderoso 
              </h1>
            </div>
            <div className="subtitle_sec2 absolute bottom-4 lg:bottom-1/4 sm:mx-16 mx-6">
              <h3 className=" text-3xl font-semibold lg:text-[36px]  lg:pb-2 lg:leading-[40px]">
              Encantamento do cliente e do agente facilitado
              </h3>
              <p className={styles.paragraph}>
              Economize tempo gerenciando todas as mensagens do cliente em um aplicativo.
              </p>
              <div>
              <a href="http://api.whatsapp.com/send?phone=5563991000032&text=Ol%C3%A1%2C%20Tudo%20bem%3F%20Como%20podemos%20te%20ajudar%20hoje%3F%20">
        <Button styles={"text-white bg-secondary py-0 leading-0"}/>
        </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiontwo;
