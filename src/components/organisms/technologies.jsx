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
import { VercelIcon } from "../atoms/VercelIcon"
import { ViteIcon } from "../atoms/ViteIcon"

function Technologies(){
    return(
        <div className="flex flex-col">
            <p className="font-bold flex justify-center text-[2em]">Technologies</p>
            <div className="flex p-2 flex-col overflow-x-auto no-scrollbar w-100vw">
                <div className="animate-infinite-scroll  flex gap-5 w-max md:flex md:flex-row md:gap-[1.5em]">

                    <GitIcon/>

                    <div>
                        <img className="shrink-0 w-[8em] md:w-[4em]" src="https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"/>
                    </div>      

                    <VscodeIcon/>
                            
                    <HtmlIcon/>
                            
                    <CssIcon/>
                            
                    <TailwindIcon/>
                            
                    <JsIcon/>
                            
                    <ReactIcon/>
                            
                    <NodeIcon/>
                            
                    <ExpressIcon/>

                    <MongoIcon/>

                    <VercelIcon/>

                    <ViteIcon/>

                    <GitIcon/>

                    <div>
                        <img className="w-[8em] md:w-[4em]" src="https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"/>
                    </div>      

                    <VscodeIcon/>
                            
                    <HtmlIcon/>
                            
                    <CssIcon/>
                            
                    <TailwindIcon/>
                            
                    <JsIcon/>
                            
                    <ReactIcon/>
                            
                    <NodeIcon/>
                            
                    <ExpressIcon/>

                    <MongoIcon/>

                    <VercelIcon/>

                    <ViteIcon/>
                </div>
            </div>
        </div>
    )
}

export {
    Technologies
}