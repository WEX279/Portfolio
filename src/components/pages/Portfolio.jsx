import { Technologies } from "../organisms/technologies"
import { Highbar } from "../molecules/Highbar"
import { Profile } from "../molecules/Profile"
import { Projects } from "../organisms/Projects"

function Portfolio(){
    return(
        <div>
            <Highbar/>
            <Profile/>
            <Technologies/>
            <Projects/>
        </div>
    )
}

export {
    Portfolio
}