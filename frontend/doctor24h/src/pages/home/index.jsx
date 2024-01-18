import { Link } from "react-router-dom"
import RoutesConstants from "../../constants/RoutesConstants"

function Home() {
  return (
    <div><Link to={RoutesConstants.LOGIN}>
    <a>Hola</a>
    </Link></div>
  )
}

export default Home