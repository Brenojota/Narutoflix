import './Carrossel.css'
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'


 export default function Carrossel({titulo,galeria}) {
    const caroucel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(caroucel.current?.scrollWidth - caroucel.current?.offsetWidth)
    },[])
  

  return (
    <div className='full'>
        <div className='texto'>
          <h2>{titulo}</h2>
        </div>
        <div className='app'>
                <motion.div ref={caroucel} className='carrocel' whileTap={{cursor: "grabbing"}}>
                    <motion.div className='inner' 
                        drag="x" 
                        dragConstraints={{right: 0, left: -width}}
                        >

                        {galeria.map(foto => {
                        return(

                            <motion.div className='item' key={foto}>
                                <img className='imagem-carrossel' src={foto.path} alt={foto.id} />
                            </motion.div>

                        ) 
                        })}
                    </motion.div>
                </motion.div>
        </div>
    </div>
  )
}









// import { useState, useEffect, useRef } from 'react'
// import { motion } from 'framer-motion'

// export default function Carrossel({ titulo, galeria }) {

//     const carousel = useRef();
//     const [width , setWidth] = useState(0);

//     useEffect(() =>{

//         /* Largura total menos total deslocado */
//         setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

//     }, [])

//     return (
        
//         <div className='carrossel'>
//             <div className='texto'>
//                 <h2 className='titulo-carrossel'>{titulo}</h2>
//             </div>
//             <div className='app'>
//                 <motion.div ref={carousel} className='container' whileTap={{cursor:"grabbing"}} /*Caroucel*/  >

//                     <motion.div className='lista' drag="x"
//                     dragConstraints={{right: 0 , left: -width }}
//                      /* inner*/>

//                         {galeria.map((foto) => {
//                             return (
//                                 <motion.div className='item-imagem'>

//                                     <img className='imagem-carrossel' src={foto.path} alt={foto.id}
//                                         key={foto.id} />

//                                 </motion.div>
//                             )

//                         })}
//                    </motion.div> 

//                 </motion.div>

//             </div> 


//         </div>
//     )
// }