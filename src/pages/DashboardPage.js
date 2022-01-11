import { Link, Outlet, useNavigate } from "react-router-dom"

const DashboardPage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={handleClick}>Logout</button>
            <hr />

            <Link to="welcome">Say welcome !!</Link>

            <Outlet />
        </div>
    )
}

export default DashboardPage
