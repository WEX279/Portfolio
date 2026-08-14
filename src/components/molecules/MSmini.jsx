import MSthumbnail from '../../assets/mangaSyncThumbnail.png'

function MSmini(){
    return(
        <div>
            <a href="https://manga-react-rouge.vercel.app/" target="blank">
                <img src={MSthumbnail} className="flex rounded-t"/>
            </a>
        </div>
    )
}

export {
    MSmini
}