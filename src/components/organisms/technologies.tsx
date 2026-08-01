import { CssIcon } from "../atoms/CssIcon"
import { ExpressIcon } from "../atoms/Express"
import { GitIcon } from "../atoms/GitIcon"
import { HtmlIcon } from "../atoms/HtmlIcon"
import { JsIcon } from "../atoms/JsIcon"
import { MongoIcon } from "../atoms/MongoIcon"
import { NodeIcon } from "../atoms/NodeIcon"
import { ReactIcon } from "../atoms/ReactIcon"
import { TailwindIcon } from "../atoms/TailwindIcon"

function Technologies(){
    return(
        <div className="">
            <div className="flex">    
                <div>
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