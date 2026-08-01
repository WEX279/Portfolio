import kirk from "../../assets/kirk.jpg"

function Pfp(){
    return(
        <img src={kirk} className="rounded-full w-[10em] p-2 flex justify-self-center"/>
    )
}

export{ 
    Pfp
}