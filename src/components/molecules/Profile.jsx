import kirk from "../../assets/kirk.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Profile(){
    return(
        <div className="flex flex-col">
            <div className="md:flex md:flex-row-reverse md:flex md:justify-around">
                <div className="flex justify-center ">
                    <img src={kirk} className="rounded-full w-[10em] p-2 md:w-[30em] "/>
                </div>
                <div className="flex flex-col md:flex md:self-center">
                    <h1 className="self-center font-bold text-[1.5em]">Yuri Legaz Brasil</h1>
                    <h2 className="self-center text-[1em]">Fullstack dev</h2>
                    <div className="self-center flex-wrap p-1">
                        <p>✉ legazyuri279@gmail.com</p>
                        <p>☎ 612 20 82 45</p>
                    </div>
                    <div className="flex justify-center gap-2">
                        <a href="https://github.com/WEX279" target="_blank">
                        <FaGithub className="w-10 h-10 text-black hover:text-slate-700 transition-colors"/>
                        </a>
                        <a href="https://www.linkedin.com/in/YuriLegaz" target="_blank">
                            <FaLinkedin className="w-10 h-10 text-black hover:text-sky-600 transition-colors"/>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                {/* <p className="p-[1em] text-center">Fullstack Developer focused on building intuitive, responsive web applications with React, Tailwind CSS, Node.js, and MongoDB. Passionate about clean code, problem-solving, and expanding into TypeScript and Computer Science. Eager to contribute to a dynamic team and deliver value from day one.</p> */}
            </div>
        </div>
    )
}

export{ 
    Profile
}