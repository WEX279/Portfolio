// import MSthumbnail from '../../assets/mangaSyncThumbnail.png'
import MSthumbnail from '../../assets/MSThumbnail.png'

function MSmini(){
    return(
        <div className="flex self-center rounded-xl border-black border-2 w-3xs">
            <a href="https://manga-react-rouge.vercel.app/" target="blank">
                <img src={MSthumbnail} className="flex rounded-t-xl w-3xs"/>
                <div className="p-[0.5em]">
                        <p>Manga platform with user auth (Bcrypt/JWT) and manga cards fetched from a custom backend.</p>
                        <p>Developed with JS, MongoDB, Express in backend and React, Vite, Tailwind in frontend. </p>
                </div>
                
            </a>
        </div>
    )
}

export {
    MSmini
}