import './BannerDestaque.css'
import {FaPlay, FaInfoCircle} from 'react-icons/fa'
import resumos from '../../../public/assets/paragrafo.json'

export default function BannerDestaque({id}) {

    return (
        <main>
            <div 
            className={`back${id}`}>
                <div className='box-shadow'>

                </div>
            </div>

            <section className='informacao'>
                <img src={`/assets/${id}/titulo-perfil.png` } alt='titulo do perfil' />

                <p className='descricao'>{resumos[id-1].resumo}</p>

                <div className='play'>
                    <FaPlay />
                    <p>Assistir</p>
                </div>   

                <div className='info'>
                    < FaInfoCircle />
                    <p>Saiba mais</p>
                </div>             

            </section>
        </main>

    )
}