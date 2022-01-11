import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutPage from '../pages/AboutPage'
import DashboardPage from '../pages/DashboardPage'
import HomePage from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import UserPage from '../pages/UserPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/dashboard/*" element={<DashboardPage />}>
                    <Route path="welcome" element={<p>Welcome !!</p>} />
                </Route>

                <Route path="/about" element={<AboutPage />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
