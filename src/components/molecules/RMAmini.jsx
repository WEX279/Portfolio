import RMmini from '../../assets/RYMmini.png'

function RMAmini(){
    return(
        <div>
            <div className="rounded-xl border-black border-2 w-3xs">
                <a href="https://wex279.github.io/Rick-MortyAPI/" target="blank">
                    <img src={RMmini} className="flex rounded-t-xl w-3xs"/>
                    <div className="p-[0.5em]">
                        <p>A web page where you can fetch information about characters as well as their details, such as status, genre or specie.</p>
                        <p>Developed with HTML5, CSS and JavaScript.</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export {
    RMAmini
}