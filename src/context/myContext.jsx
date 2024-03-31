/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react'

const MyContext = createContext(null)

export function MyContextProvider({ children }) {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('cart')
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        if (cart.length !== 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    return (
        <MyContext.Provider value={{ cart, setCart }}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => {
    const context = useContext(MyContext)

    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}
