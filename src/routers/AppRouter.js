import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
