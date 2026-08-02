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
                <p className="font-bold text-[1.5em] p-[0.5em]">Technologies</p>
                <div className="flex flex-col md:flex md:flex-row md:gap-[1.5em]">
                    <div className="border rounded-xl">
                        <p className="flex justify-center font-bold p-1">Development sources</p>
                        <div className="flex">
                            <div >
                                <GitIcon/>
                            </div>
                            <div>
                                <img className="w-[5em] m-[1em]" src="https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <VscodeIcon/>
                            </div>
                        </div>
                    </div>  

                    <div className="border rounded-xl">
                        <p className="flex justify-center font-bold">Frontend engines</p>
                        <div className="flex">
                            <div>
                                <HtmlIcon/>
                            </div>
                            <div>
                                <CssIcon/>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <TailwindIcon/>
                            </div>
                            <div>
                                <JsIcon/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <ReactIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-xl">
                        <p className="flex justify-center font-bold">Backend engines</p>
                        <div className="flex">
                            <div>
                                <NodeIcon/>
                            </div>
                            <div>
                                <ExpressIcon/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <MongoIcon/>
                            </div>
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