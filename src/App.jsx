import { Route, Routes } from "react-router-dom"
import { Technologies } from "./components/organisms/technologies"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Technologies/>}/>
      </Routes>
    </div>
  )
}

export {
  App
}
