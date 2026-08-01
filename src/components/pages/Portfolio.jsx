import { Technologies } from "../organisms/technologies"
import { Highbar } from "../molecules/Highbar"
import { Profile } from "../molecules/Profile"

function Portfolio(){
    return(
        <div>
            <Highbar/>
            <Profile/>
            <Technologies/>
        </div>
    )
}

export {
    Portfolio
}