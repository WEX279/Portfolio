import { GitIcon } from "../atoms/GitIcon"
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
            <div className="flex gap-1.5 p-2">    
                <div >
                    <GitIcon/>
                </div>
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
    )
}

export {
    Technologies
}