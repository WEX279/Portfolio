import { Technologies } from "../organisms/technologies"
import { Highbar } from "../molecules/Highbar"
import { Pfp } from "../molecules/Pfp"

function Portfolio(){
    return(
        <div>
            <Highbar/>
            <Pfp/>
            <Technologies/>
        </div>
    )
}

export {
    Portfolio
}