import { Outlet } from "react-router-dom"
import Header from "./components/Header"

export default function App() {
  return (
    <>
    <Header />
    <div className="px-20 py-10">
      <Outlet />
    </div>
    </>
  )
}