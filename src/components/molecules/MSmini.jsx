// import MSthumbnail from '../../assets/mangaSyncThumbnail.png'
import MSthumbnail from '../../assets/MSThumbnail.png'

function MSmini(){
    return(
        <div>
            <div className="rounded-xl border-black border-2 w-3xs">
            <a href="https://manga-react-rouge.vercel.app/" target="blank">
                <img src={MSthumbnail} className="flex rounded-t-xl w-3xs"/>
                <p>Developed with JavaScript, MongoDB, Express in backend and React, Vite, Tailwind in frontend using atomic design. </p>
            </a>
            </div>
        </div>
    )
}

export {
    MSmini
}