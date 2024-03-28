import { Route, Routes } from 'react-router'
import Main from './page/Main/main'
import Cart from './page/Cart/cart'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}
