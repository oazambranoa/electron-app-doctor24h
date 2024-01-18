// import { Link } from "react-router-dom"
// import RoutesConstants from "../../constants/RoutesConstants"
import SideBar from "../../components/sidebar"

function Home() {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1 p-4">
        Hola y bienvenido
      </div>
    </div>
  )
}

export default Home