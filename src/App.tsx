import { Outlet } from "react-router-dom"
import Header from "./components/Header"

export default function App() {
  return (
    <>
    <Header />
    <div className="px-5 py-4 md:px-20 md:py-10">
      <Outlet />
    </div>
    </>
  )
}