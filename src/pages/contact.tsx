import React from "react";
import { envelope, map, phone } from "../assets/contactimgs";


export const ContactPage: React.FC = () => {


    return (
        <section id="contact" className="contactWrapper">
            <div className="upperDiv">
                <span>Contato</span>
                <h1>Entre em contato</h1>
                <p>Estamos aqui para ouvir você!</p>
            </div>
            <div className="lowerDiv">
                <div className="contactBlock">
                    <img src={envelope} />
                    <h2>Email</h2>
                    <p>Envie suas dúvidas ou propostas de colaboraçao.</p>
                    <a href="#">contato@exemplo.com</a>
                </div>
                <div className="contactBlock">
                    <img src={phone} />
                    <h2>Telefone</h2>
                    <p>Estamos disponíveis para atender você a qualquer momento.</p>
                    <a href="">+55(11) 999999-9999</a>
                </div>
                <div className="contactBlock">
                    <img src={map} />
                    <h2>Localização</h2>
                    <p>Av. Paulista, 1000, São Paulo, SP</p>
                    <a href="">Rua Exemplo, 123, São Paulo, SP 00000-000</a>
                </div>
            </div>
        </section>
    );
};
