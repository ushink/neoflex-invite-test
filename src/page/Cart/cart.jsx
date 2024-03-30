import { useState } from 'react'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import { MainIconsSvg } from '../../helpers/MainIconsSvg'
import s from './cart.module.css'

export default function Cart() {
    const [count, setCount] = useState(1)

    const increment = () => {
        if (count >= 1) {
            setCount((prevValue) => prevValue + 1)
        }
    }

    const decrement = () => {
        if (count >= 2) {
            setCount((prevValue) => prevValue - 1)
        }
    }

    const productsCart = JSON.parse(localStorage.getItem('cart'))

    return (
        <>
            <Header />
            <main className={s.main}>
                <h1 className={s.title}>Корзина</h1>
                <div className={s.wrapperGrid}>
                    <section className={s.products}>
                        {productsCart?.map((el) => (
                            <div className={s.product} key={el.id}>
                                <button className={s.delete}>
                                    <MainIconsSvg id={'delete'} />
                                </button>

                                <div className={s.wrapperInfo}>
                                    <img
                                        className={s.img}
                                        src={el.src}
                                        alt=""
                                    />
                                    <div className={s.counter}>
                                        <button
                                            className={s.decrease}
                                            onClick={decrement}
                                        >
                                            -
                                        </button>
                                        <span className={s.count}>{count}</span>
                                        <button
                                            className={s.increase}
                                            onClick={increment}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className={s.info}>
                                    <p className={s.name}>{el.name}</p>
                                    <p className={s.price}>{el.price}</p>
                                </div>

                                <span className={s.allPrice}>2658</span>
                            </div>
                        ))}
                    </section>
                    <section className={s.totalBox}>
                        <div className={s.total}>
                            <h2 className={s.totalTitle}>ИТОГО</h2>
                            <span className={s.totalPrice}>2658</span>
                        </div>
                        <button className={s.buy}>Перейти к оформлению</button>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
