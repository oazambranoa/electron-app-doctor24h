import { Link } from "react-router-dom"
import RoutesConstants from "../../constants/RoutesConstants"

function Login() {
  
  
  
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-0">
      {/* Título */}
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>


      <div className="mb-4 w-full md:w-64">
        <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
          Selecciona el tipo de documento:
        </label>
        <select
          id="role"
          name="role"
          className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
        >
          <option value="cedula">Cédula de ciudadanía</option>
          <option value="tarjetaI">Tarjeta de identidad</option>
          <option value="NIT">NIT</option>
        </select>
      </div>


      <div className="mb-4 w-full md:w-64">
        <label htmlFor="document" className="block text-gray-700 text-sm font-bold mb-2">
          Número de Documento:
        </label>
        <input
          type="text"
          id="document"
          name="document"
          className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
        />
      </div>


      <div className="mb-4 w-full md:w-64">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
        />
      </div>


      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ingresar
      </button>

      <Link to={RoutesConstants.START}>
        <h1 className="text-blue-500 hover:text-blue-900">
          Regresar
        </h1>
      </Link>
    </div>
  )
}

export default Login