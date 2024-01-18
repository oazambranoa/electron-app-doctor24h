import { Link } from "react-router-dom"
import RoutesConstants from "../../constants/RoutesConstants"

function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-0">
      
      <h2 className="text-2xl font-bold mb-4">Registro</h2>

      
      <form className="w-full md:w-96">
        
        <div className="mb-4">
          <label htmlFor="documentType" className="block text-gray-700 text-sm font-bold mb-2">
            Tipo de Documento:
          </label>
          <select
            id="documentType"
            name="documentType"
            className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
          >
            <option value="cedula">Cédula de ciudadanía</option>
            <option value="tarjetaI">Tarjeta de identidad</option>
            <option value="NIT">NIT</option>
          </select>
        </div>

        
        <div className="mb-4">
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

        
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            Nombres:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
          />
        </div>

        
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="lastName1" className="block text-gray-700 text-sm font-bold mb-2">
              Primer Apellido:
            </label>
            <input
              type="text"
              id="lastName1"
              name="lastName1"
              className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="lastName2" className="block text-gray-700 text-sm font-bold mb-2">
              Segundo Apellido:
            </label>
            <input
              type="text"
              id="lastName2"
              name="lastName2"
              className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        
        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-gray-700 text-sm font-bold mb-2">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
          />
        </div>

        
        <div className="mb-4">
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

        
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirmar Contraseña:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full bg-gray-200 border border-gray-300 p-2 rounded"
          />
        </div>

        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Registrarse
        </button>

        
        <Link to={RoutesConstants.START} >
          <h1 className="text-blue-500 hover:text-blue-900">
            Regresar
          </h1>
        </Link>

      </form>
    </div>
  )
}

export default Register