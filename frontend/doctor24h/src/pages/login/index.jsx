import { Link } from "react-router-dom"
import RoutesConstants from "../../constants/RoutesConstants"
function Login() {
  return (
    <div>Login

    <Link to={RoutesConstants.LOGIN}>
      <a>Hola</a>
      </Link>
    </div>
  )
}

export default Login