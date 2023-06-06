import React from "react";
import styles from "../style";
import { AiOutlineCheckCircle } from 'react-icons/ai'

const included = [
  {
    plano: "Inicial",
    price: "197",
    users: 6,
  arrayValues:  [
      "CRM multiagente",
      "Bate-papos gratuitos ilimitados",
      "Contatos ilimitados",
      "API WhatsApp enviar",
      "Agendamento",
      "Suporte do WhatsApp",
    ],
},
{
    plano: "Intermediário",
    price: "247",
    users: 11,
  arrayValues:  [
      "CRM multiagente",
      "Bate-papos gratuitos ilimitados",
      "Contatos ilimitados",
      "Histórico de bate-papo ilimitado",
      "API WhatsApp enviar",
      "Agendamento",
      "Suporte do WhatsApp",
    ],
},
{
    plano: "Avançado",
    price: "297",
    users: 21,
  arrayValues:  [
      "CRM multiagente",
      "Bate-papos gratuitos ilimitados",
      "Contatos ilimitados",
      "Histórico de bate-papo ilimitado",
      "API WhatsApp enviar",
      "Agendamento",
      "Suporte do WhatsApp",
    ],
},
{
    plano: "Avançado Plus",
    price: "347",
    users: 31,
  arrayValues:  [
      "CRM multiagente",
      "Bate-papos gratuitos ilimitados",
      "Contatos ilimitados",
      "Histórico de bate-papo ilimitado",
      "API WhatsApp enviar",
      "Agendamento",
      "Suporte do WhatsApp",
    ],
},
{
    plano: "Premium",
    price: "397",
    users: 40,
  arrayValues:  [
      "CRM multiagente",
      "Bate-papos gratuitos ilimitados",
      "Contatos ilimitados",
      "Histórico de bate-papo ilimitado",
      "API WhatsApp enviar",
      "Agendamento",
      "Suporte do WhatsApp",
    ],
},
];

const PriceCard = (props) => {
  return (
    <div className=" flex flex-col items-center border rounded-xl my-6">
      <div className=" bg-slate-200 w-full -mt-1 rounded-t-xl pl-4 py-4">
        <h2 className=" text-secondary font-bold text-xl">{props.plano}</h2>
        <h3 className=" text-2xl font-medium">
          {props.price} <span className=" text-slate-400">/ mês</span>
        </h3>
        <p className=" font-medium"> O que está incluído:</p>
      </div>
      <div className=" py-8 ">
        <p className={` font-poppins font-bold`}>Usuários: {props.users}</p>
        {props.arrayValues.map((item, index) => {
            return <p key={index} className={` my-2 ${styles.paragraph}`}><AiOutlineCheckCircle className=" inline-block mr-2"/> {`${item}`}</p>})
            }
      </div>
    </div>
  );
};

const PriceBox = () => {
  return (
    <>
    <div id="price">
        <h2 className={`${styles.heading2} text-center`}> Preços do HellowChat</h2>
        <p className={` text-center pb-3 ${styles.paragraph}`}>Software de helpdesk completo com automação avançada, bate-papo ao vivo, recursos de call center</p>
    </div>
    <div className=" grid md:grid-cols-3 grid-cols-1 gap-2">
        {included.map((values, index) => {

      return <PriceCard users={values.users} key={index} price={`R$ ${values.price}`} plano={`${values.plano}`} arrayValues={values.arrayValues}/>
        })}
{/*       <PriceCard price={"R$ 49"} plano={"Médio"} num={1}/>
      <PriceCard price={"R$ 49"} plano={"Avançado"} num={2}/> */}
    </div>
    </>
  );
};

export default PriceBox;
