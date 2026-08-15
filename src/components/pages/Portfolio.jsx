import { Technologies } from "../organisms/technologies"
import { Highbar } from "../molecules/Highbar"
import { Profile } from "../molecules/Profile"
import { Projects } from "../organisms/Projects"
import { Titles } from "../organisms/Titles"

function Portfolio(){
    return(
        <div>
            <Highbar/>
            <Profile/>
            <Technologies/>
            <Projects/>
            <Titles/>
        </div>
    )
}

export {
    Portfolio
}