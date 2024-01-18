import { Link } from "react-router-dom"
import RoutesConstants from "../../constants/RoutesConstants"

function SideBar() {
  return (
    <div className="bg-blue-500 p-4 h-screen w-1/5 flex flex-col justify-between">
      
      <div className="mb-8 text-white">
        <img
          src="url_del_logo_del_perfil"
          alt="Perfil Logo"
          className="w-12 h-12 rounded-full mb-2"
        />
        <p>Nombre Apellido</p>
      </div>

      
      <div className="mb-8">
        <Link to={RoutesConstants.HOME}>
          <h1 className="text-white block mb-2">Inicio</h1>
        </Link>

        <Link to={RoutesConstants.APPOINTMENTS}>
          <h1 className="text-white block mb-2">Citas</h1>
        </Link>

        <Link to={RoutesConstants.PROFILE}>
          <h1 className="text-white block mb-2">Configuración</h1>
        </Link>
      </div>

    
      <button className="bg-white text-blue-500 py-2 px-4 rounded-full">
        Cerrar Sesión
      </button>
    </div>
  )
}

export default SideBar