import m1 from '../../assets/titles/Fundamentos_Web_-_(HTML,_CSS,_JavaScript_y_Git-).png'
import m2 from '../../assets/titles/JavaScript_Avanzado,_Asincronía_y_Visualización_-.png'
import m3 from '../../assets/titles/Backend_con_Node.js,_Express_y_Bases_de_Datos_-.png'
import m4 from '../../assets/titles/Frontend_con_React_-.png'

function Titles(){
    return(
        <div>
            <p className="font-bold flex justify-center text-[2em]">Titles</p>
            <img src={m1}/>
            <img src={m2}/>
            <img src={m3}/>
            <img src={m4}/>
        </div>
    )
}

export {
    Titles
}