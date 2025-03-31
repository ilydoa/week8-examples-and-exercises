import { useNavigate  } from "react-router";
const Destinations = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };


    return (
        <>
        <h1>Destinations Page</h1>
        <p>Destinations here!</p>
        <button onClick = {handleClick}>
            Home
        </button>
        </>
    )
}

export default Destinations;