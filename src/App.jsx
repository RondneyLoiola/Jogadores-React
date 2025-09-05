import { Routes, Route, BrowserRouter } from "react-router"
import Home from "./Pages/Home"
import Void from "./Pages/Void"
import Messi from "./Pages/Messi"
import Cr7 from "./Pages/Cristiano"
import Neymar from "./Pages/Neymar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Messi'} element={<Messi />} />
          <Route path={'/Cr7'} element={<Cr7 />} />
          <Route path={'/Neymar'} element={<Neymar />} />
          <Route path={'*'} element={<Void/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
