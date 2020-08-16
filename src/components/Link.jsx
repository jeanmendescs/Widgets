import React from "react";

const Link = ({ children, className, href }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      //as funcoes abaixo desativam o comportamento de abrir nova aba segurando control, por isso a condicional abaixo foi criada para reativar
      return;
    }

    event.preventDefault(); //impede pag de atualizar qd user clicar
    window.history.pushState({}, "", href); //altera a url de acordo com a aba clicada, sem atualizar a pag

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
