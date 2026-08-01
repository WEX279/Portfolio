import { Route, Routes } from "react-router-dom"
import { Portfolio } from "../src/components/pages/Portfolio"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio/>}/>
      </Routes>
    </div>
  )
}

export {
  App
}
