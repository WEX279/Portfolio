// import MSthumbnail from '../../assets/mangaSyncThumbnail.png'
import MSthumbnail from '../../assets/MSThumbnail.png'

function MSmini(){
    return(
        <div>
            <div className="rounded-xl border-black border-2 w-3xs">
            <a href="https://manga-react-rouge.vercel.app/" target="blank">
                <img src={MSthumbnail} className="flex rounded-t-xl w-3xs"/>
                <div className="p-[0.5em]">
                        <p>Manga platform with secure user auth (Bcrypt/JWT) and detailed manga cards fetched asynchronously from a custom backend.</p>
                        <p>Developed with JavaScript, MongoDB, Express in backend and React, Vite, Tailwind in frontend using atomic design. </p>
                    </div>
                
            </a>
            </div>
        </div>
    )
}

export {
    MSmini
}