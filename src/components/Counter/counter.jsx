/* eslint-disable react/prop-types */
import { useMyContext } from '../../context/myContext'
import s from './counter.module.css'

export default function Counter({ counts, id }) {
    const { cart, setCart } = useMyContext()

    const increment = (id) => {
        // react придерживается принципа иммутабельности
        // поэтому чтобы не мутировать создаем новый массив
        if (counts >= 1) {
            const updatedCart = cart.map((el) =>
                el.id === id ? { ...el, quantity: el.quantity + 1 } : el
            )
            setCart(updatedCart)
        }
    }

    const decrement = (id) => {
        if (counts >= 2) {
            const updatedCart = cart.map((el) =>
                el.id === id ? { ...el, quantity: el.quantity - 1 } : el
            )
            setCart(updatedCart)
        }
    }

    return (
        <div className={s.counter}>
            <button className={s.decrease} onClick={() => decrement(id)}>
                -
            </button>
            <span className={s.count}>{counts}</span>
            <button className={s.increase} onClick={() => increment(id)}>
                +
            </button>
        </div>
    )
}
