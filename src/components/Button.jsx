import React from "react";

const Button = ({ styles }, props ) => (
  <a href={props.link}>
    <button
      type="button"
      className={`${styles}  py-4 px-6 font-poppins  font-medium text-[18px] text-primary rounded-[10px] outline-none `}
    >
      Iniciar agora
    </button>
  </a>
);

export default Button;
