import kirk from "../../assets/kirk.jpg"

function Profile(){
    return(
        <div className="flex flex-col ">
            <div className="flex justify-center">
                <img src={kirk} className="rounded-full w-[10em] p-2"/>
            </div>
            <div className="flex flex-col">
                <h1 className="self-center font-bold text-[1.5em]">Yuri Legaz Brasil</h1>
                <div className="self-center">
                    ✉ legazyuri279@gmail.com | 
                    ☎ 612 20 82 45 |
                    🌏︎ Spain</div>
            </div>
            <div>
                <p className="p-[1em] text-center">Fullstack Developer focused on building intuitive, responsive web applications with React, Tailwind CSS, Node.js, and MongoDB. Passionate about clean code, problem-solving, and expanding into TypeScript and Computer Science. Eager to contribute to a dynamic team and deliver value from day one.</p>
            </div>
        </div>
    )
}

export{ 
    Profile
}