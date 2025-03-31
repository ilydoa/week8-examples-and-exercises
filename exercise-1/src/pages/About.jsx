import { useNavigate  } from "react-router";
const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };


    return (
        <>
        <h1>About Page</h1>
        <p>Learn about the blog here!</p>   
        <button onClick = {handleClick}>
            Home
        </button>
        </>
        
    )
}

export default About;