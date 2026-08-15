import { MSmini } from "../molecules/MSmini"
import { RMAmini } from "../molecules/RMAmini"

function Projects(){
    return(
        <div>
            <p className="font-bold flex justify-center text-[2em]">Projects</p>
            <div className="flex justify-around gap-[2em] p-[1em]">
                <MSmini/>
                <RMAmini/>
            </div>
        </div>
    )
}

export {
    Projects
}