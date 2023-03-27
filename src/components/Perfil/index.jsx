import { useNavigate } from 'react-router-dom'
import './Perfil.css'


export default function Perfil({fotos}) {

    
    const navigate = useNavigate()

    const click = (id) => {
        if(id == 1){
            navigate('/perfil/naruto')
        }
        if(id == 2){
            navigate('/perfil/sasuke')
        }
        if(id == 3){
            navigate('/perfil/kakashi')
        }
        if(id == 4){
            navigate('/perfil/sakura')
        }
    }

    return (
        <ul className='container-perfis'  >
            {
                fotos.map((foto) => {
                    return(
                        <li className='perfil' key={Date.now()+1} >
                            <img
                                key={Date.now()}
                                src={foto.imagem}
                                alt={foto.nome} 
                                onClick={() => click(foto.id)}
                            />
                            <p className='nome-perfil'  key={Date.now()+2}>{foto.nome}</p>

                        </li>
                    )
                })
            }
        </ul>
    )
}