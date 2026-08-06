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
            <div className="flex p-2 flex-col items-center">  
                <div className="flex flex-row gap-[1.5em] md:flex md:flex-row md:gap-[1.5em]">
                    <div className="flex">
                            <div >
                                <GitIcon/>
                            </div>
                            <div>
                                <img className="w-[5em] m-[1em]" src="https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"/>
                            </div>
                            <div>
                                <VscodeIcon/>
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
                                <MongoIcon/>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export {
    Technologies
}