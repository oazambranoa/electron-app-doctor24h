

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
        <a href="#" className="text-white block mb-2">Inicio</a>
        <a href="#" className="text-white block mb-2">Citas</a>
        <a href="#" className="text-white block mb-2">Configuración</a>
      </div>

      {/* Botón de Cerrar Sesión */}
      <button className="bg-white text-blue-500 py-2 px-4 rounded-full">
        Cerrar Sesión
      </button>
    </div>
  )
}

export default SideBar