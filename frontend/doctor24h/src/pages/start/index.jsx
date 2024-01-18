import { Link } from "react-router-dom"
import RoutesConstants from "../../constants/RoutesConstants"

function Start() {
  return (
    <div className="start-page flex flex-col items-center justify-center h-screen mt-8 overflow-hidden space-y-60">
        <div className="logo grid items-center">
            <h1>Doctor24H</h1>
        </div>

        <div className="lg-buttons flex flex-col space-y-4">
            <Link to={RoutesConstants.LOGIN}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Iniciar sesion
                </button>
            </Link>

            <Link to={RoutesConstants.REGISTER}>
                <button className="bg-white hover:border-blue-500 border hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 roundedz">
                    Registrarse
                </button>
            </Link>
        </div>

    </div>
  )
}

export default Start