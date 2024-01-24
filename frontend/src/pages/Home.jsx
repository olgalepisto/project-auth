import "../index.css"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
        <div className="homePage">
            <h1>Task planner</h1>
        <Link to="/signup"><button className="naviButton">Sign up</button></Link>       
        <Link to="/login"><button className="naviButton">Log in</button></Link>
        </div>
        </>
    )
}

export default Home 