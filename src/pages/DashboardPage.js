import { useNavigate } from "react-router-dom"

const DashboardPage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Dashboard</h1> 

            <button onClick={handleClick}>Logout</button>          
        </div>
    )
}

export default DashboardPage
