import { useState } from 'react'
import s from './counter.module.css'

export default function Counter(count) {
    const [counts, setCounts] = useState(count?.count)

    const increment = () => {
        if (counts >= 1) {
            setCounts((prevValue) => prevValue + 1)
        }
    }

    const decrement = () => {
        if (counts >= 2) {
            setCounts((prevValue) => prevValue - 1)
        }
    }

    return (
        <div className={s.counter}>
            <button className={s.decrease} onClick={decrement}>
                -
            </button>
            <span className={s.count}>{counts}</span>
            <button className={s.increase} onClick={increment}>
                +
            </button>
        </div>
    )
}
