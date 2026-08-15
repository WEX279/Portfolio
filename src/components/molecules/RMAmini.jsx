import RMmini from '../../assets/RYMmini.png'

function RMAmini(){
    return(
        <div>
            <div className="rounded-xl border-black border-2 w-3xs">
                <a href="https://wex279.github.io/Rick-MortyAPI/" target="blank">
                    <img src={RMmini} className="flex rounded-t-xl w-3xs"/>
                    <p>Developed with JavaScript, MongoDB, Express in backend and React, Vite, Tailwind in frontend using atomic design. </p>
                </a>
            </div>
        </div>
    )
}

export {
    RMAmini
}