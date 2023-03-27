import './Header.css'
import logo from '/assets/logo.png'

export default function Header(){
    return(
        <div className='header'>
            <div className='logo-principal'>
                <img src={logo} alt='logo-narutoflix' />
            </div>
        </div>
    )
}