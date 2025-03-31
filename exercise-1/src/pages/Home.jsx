import { Link } from "react-router"
const Home = () => {

    return (
        <>
        <h1>Home Page</h1>
        <p>This is a blog!</p>
        <Link to = "/about">
            About Us
        </Link>
        <div> </div>
        <Link to = "/destinations">
            Destinations
        </Link>
        </>
    )
}

export default Home;