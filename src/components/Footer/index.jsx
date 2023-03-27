import "./Footer.css"
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import {} from 'react-icons/ai'

export default function Footer(){
    return(
        <footer className="rodape">
            <div className="texto">
                <h3>Desenvolvido por Breno Juan</h3>
            </div>
            <div className="icones">
                <a href="https://www.linkedin.com/in/breno-juan-2050411b5/" target="_blank">
                    <AiFillLinkedin size={26} />
                </a>
                <a href="https://github.com/Brenojota?tab=repositories" target="_blank" >
                    <AiFillGithub size={26} />
                </a>
            </div>
        </footer>
    )
}