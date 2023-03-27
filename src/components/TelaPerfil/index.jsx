import Perfil from '../Perfil'
import './TelaPerfil.css'
import fotos from './perfis.json'
import Header from '../Header';
import Footer from '../Footer';


export default function TelaPerfil() {

    return (
        <main className='tela-inicio'>
            < Header />

            <section className='sessao-first'>
                <h3 className='titulo-perfil'>Quem está assistindo?</h3>
                <Perfil fotos={fotos} />

            </section>
            <Footer />
            

        </main>

    )
}