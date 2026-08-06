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
        <div>
            <br/>
            <hr/>
            <div className="flex p-2 flex-col items-center">  
                <p className="font-bold">Technologies</p>
                <div className="flex flex-row gap-[1em] md:flex md:flex-row md:gap-[1.5em]">
                    <GitIcon/>

                    <div>
                        <img className="w-[2.5em] md:w-[4em]" src="https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"/>
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
                    <hr/>
                </div>
            </div>
            </div>
    )
}

export {
    Technologies
}