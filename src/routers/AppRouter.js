import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
