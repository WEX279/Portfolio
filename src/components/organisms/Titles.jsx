import m1 from '../../assets/titles/Fundamentos_Web_-_(HTML,_CSS,_JavaScript_y_Git-).png'
import m2 from '../../assets/titles/JavaScript_Avanzado,_Asincronía_y_Visualización_-.png'
import m3 from '../../assets/titles/Backend_con_Node.js,_Express_y_Bases_de_Datos_-.png'
import m4 from '../../assets/titles/Frontend_con_React_-.png'

function Titles(){
    return(
        <div>
            <div className="p-[1em] flex justify-center flex-col">
                <p className="flex justify-center font-bold text-[2em] pb-[0.5em]">Titles</p>
                <div className="flex self-center flex-col md:justify-around">

                    <div className="flex">
                        <img className=" w-[10em] " src={m1} alt="Fundamentos_Web_-_(HTML,_CSS,_JavaScript_y_Github)"/>
                        <img className=" w-[10em] " src={m2} alt="JavaScript_Avanzado, _Asincronía_y_Visualización_"/>
                    </div>

                    <div className="flex">
                        <img className=" w-[10em] " src={m3} alt="Backend_con_Node.js,_Express_y_Bases_de_Datos_"/>
                        <img className=" w-[10em] " src={m4} alt="Frontend_con_React_-"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Titles
}