import './HeaderPerfil.css'
import logo from '/assets/logo-icone.png'
import { FiCast } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'

export default function HeaderPerfil({id}) {
    return (
        <header className='cabecalho'>
            <div className='cabecalho-principal'>

                    <img className='logo empresa' src={logo} alt="logo empresa" />

                    <FiCast className='icones-1' color='white' size={22} />
                    <BiSearch className='icones'  color='white' size={23} />

                    <img className='perfil-usuario' src={`/assets/${id}/perfil.jpg`} alt='perfil usuario' />


            </div>
        </header>
    )
}