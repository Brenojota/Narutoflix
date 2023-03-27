import './PaginaPadrao.css'
import { useNavigate } from "react-router-dom"
import { IoMdArrowBack } from 'react-icons/io'
import HeaderPerfil from "../../components/HeaderPerfil"
import BannerDestaque from '../../components/BannerDestaque'
import Carrossel from '../../components/Carrossel'
import galeria from '../../../public/assets/fotos.json'
import infancia from '../../../public/assets/infancia.json'

export default function PaginaPadrao({id}) {

    const navigate = useNavigate()

    const click = () => {
        navigate('/')
    }

    return (
        <section>
            <main className="destaque-pagina">
                < IoMdArrowBack 
                    color="white" 
                    onClick={click} 
                />

                < HeaderPerfil id={id} />
                < BannerDestaque id={id} />
                <Carrossel titulo={"Infância"} galeria={infancia[id-1]} />
                <Carrossel titulo={"Melhores momentos"} galeria={galeria[id-1]} />
                
            </main>


        </section>
    )
}