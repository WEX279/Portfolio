import { GitIcon } from "../atoms/GitIcon"
import { VscodeIcon } from "../atoms/VscodeIcon"
import { HtmlIcon } from "../atoms/HtmlIcon"
import { CssIcon } from "../atoms/CssIcon"
import { TailwindIcon } from "../atoms/TailwindIcon"
import { JsIcon } from "../atoms/JsIcon"
import { ReactIcon } from "../atoms/ReactIcon"
import { NodeIcon } from "../atoms/NodeIcon"
import { ExpressIcon } from "../atoms/Express"
import { MongoIcon } from "../atoms/MongoIcon"

function Technologies(){
    return(
        <div>
            <div className="flex gap-1.5 p-2 flex-col items-center">  
                <p className="font-bold text">Technologies</p>
                <div className="border rounded-xl p-[1em]">
                    <p></p>
                    <div >
                        <GitIcon/>
                    </div>
                    <div>
                        <img src="https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png" className="w-[5em]"/>
                    </div>
                    <div>
                        <VscodeIcon/>
                    </div>
                </div>  

                <div className="border rounded-xl">
                    <div>
                        <HtmlIcon/>
                    </div>
                    <div>
                        <CssIcon/>
                    </div>
                    <div>
                        <TailwindIcon/>
                    </div>
                    <div>
                        <JsIcon/>
                    </div>
                    <div>
                        <ReactIcon/>
                    </div>
                </div>
                <div className="border rounded-xl p-[1em]">
                    <div>
                        <NodeIcon/>
                    </div>
                    <div>
                        <ExpressIcon/>
                    </div>
                    <div>
                        <MongoIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Technologies
}