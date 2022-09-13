import React from "react";
import styles from "../style";
import { BsCalendar2Date, BsBullseye, BsHeadset, BsExclamationTriangle, BsClockHistory, BsReply, BsTextareaT, BsDownload, BsFolder, BsFunnel, BsChatSquareText} from "react-icons/bs";
import { IconContext } from "react-icons";

const featured = [
  {
    icon: <BsHeadset />,
    title: "Atendentes",
    text: "Os atendentes gerenciam e respondem a todas as consultas em sua central",
  },
  {
    icon: <BsExclamationTriangle />,
    title: "Colisão de Atendendentes",
    text: "Impedir que vários Atendentes trabalhem no mesmo ticket",
  },
  {
    icon: <BsClockHistory />,
    title: "Horário comercial",
    text: "O horário comercial do HellowChat pode ser configurado para funcionar apenas durante peíodos de tempo especificados",
  },
  {
    icon: <BsReply />,
    title: "Mensagens predefinidas",
    text: "Crie mensagens rápidas para economizar tempo.",
  },
  {
    icon: <BsTextareaT />,
    title: "Campos de contato",
    text: "Reúna e armazene informações sobre seus contatos ou empresas.",
  },
  {
    icon: <BsDownload />,
    title: "Envie arquivos diversos",
    text: "Envie aúdio, video, imagens e o mais diversos tipos de arquivos.",
  },
  {
    icon: <BsFolder />,
    title: "Departamentos",
    text: "Distribua tickets e atendentes de suporte em departamentos.",
  },
  {
    icon: <BsFunnel />,
    title: "Filtros",
    text: "Crie filtros classificar facilmente os atendimentos.",
  },
  {
    icon: <BsBullseye />,
    title: "Informações de tickets/clientes",
    text: "Adicione campos a cada contato para armazenar dados personalizados.",
  },
  {
    icon: <BsChatSquareText />,
    title: "Histórico de conversa",
    text: "O histórico de bate-papo é armazenado, o que é extremamente útil.",
  },
  {
    icon: <BsCalendar2Date />,
    title: "Agendamento de eventos",
    text: "Envio automático de lembrete através do Whatsapp, e-mails lembrando de todos os seus agendamentos.",
  },
];

const FeaturedCard = (props) => {
  return (
    <div  className="border rounded-xl  p-7 hover:shadow-xl transition-shadow">
      <IconContext.Provider value={{ className: " text-secondary text-[52px]"}}>
      <div className=" ">
        {props.icon}
        </div>
      </IconContext.Provider>
      <div className=" ">
        <h3
          className={`font-poppins text-secondary font-semibold text-[18px] leading-[25.8px] my-5`}
        >
          {props.title}
        </h3>
        <p className=" text-slate-500 ">{props.value}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <>
      <h1 id="featured" className={`${styles.heading2} my-6 ml-8`}>Recursos </h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
        {featured.map((item, index) => {
          return (
            <FeaturedCard
              key={index}
              value={item.text}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default Features;
