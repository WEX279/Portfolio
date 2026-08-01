import { GithubIcon } from "../atoms/GithubIcon"

function Highbar(){
    return(
        <div className="sticky top-0 bg-slate-200/30 backdrop-blur-sm">
            <a href="https://github.com/WEX279" target="_blank" className="flex p-2 w-fit">
                <GithubIcon/>
                <p className="content-center text-2xl pl-2 ">WEX279</p>
            </a>
        {/* <div className="sticky top-0  "/> */}
        </div>
    )
}

export {
    Highbar
}
