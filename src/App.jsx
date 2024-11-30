import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Abouts from "./Pages/Abouts"
import Courses from "./Pages/Courses"
import Contacts from "./Pages/Contacts"
import Signups from "./Pages/SignUps"


function App() {

  return (
    <><div className="">
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<Abouts />}>About</Route>
        <Route path="/courses" element={<Courses />}>Courses</Route>
        <Route path="/contact" element={<Contacts />}>Contact</Route>
        <Route path="/signup" element={<Signups />}>Signup</Route>
      </Routes>
    </div>
    </>
  )
}

export default App
