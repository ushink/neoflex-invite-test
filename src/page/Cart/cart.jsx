import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import { MainIconsSvg } from '../../helpers/MainIconsSvg'
import s from './cart.module.css'
import Counter from '../../components/Counter/counter'
import { useMyContext } from '../../context/myContext'

export default function Cart() {
    const { cart, setCart } = useMyContext()

    function getTotalPrice() {
        return cart.reduce((totalPrice, item) => {
            return totalPrice + item.price * item.quantity
        }, 0)
    }

    function deleteProduct(id) {
        setCart(cart.filter((item) => item.id !== id))
    }

    return (
        <>
            <Header />
            <main className={s.main}>
                <h1 className={s.title}>Корзина</h1>
                <div className={s.wrapperGrid}>
                    <section className={s.products}>
                        {cart?.map((el) => (
                            <div className={s.product} key={el.id}>
                                <button
                                    className={s.delete}
                                    onClick={() => deleteProduct(el.id)}
                                >
                                    <MainIconsSvg id={'delete'} />
                                </button>

                                <div className={s.wrapperInfo}>
                                    <img
                                        className={s.img}
                                        src={el.src}
                                        alt={el.name}
                                    />
                                    <Counter counts={el.quantity} id={el.id} />
                                </div>

                                <div className={s.info}>
                                    <p className={s.name}>{el.name}</p>
                                    <p className={s.price}>
                                        {el.price.toLocaleString('ru-RU')}
                                    </p>
                                </div>

                                <span className={s.allPrice}>
                                    {(el.price * el.quantity).toLocaleString(
                                        'ru-RU'
                                    )}
                                </span>
                            </div>
                        ))}
                    </section>
                    <section className={s.totalBox}>
                        <div className={s.total}>
                            <h2 className={s.totalTitle}>ИТОГО</h2>
                            <span className={s.totalPrice}>
                                {getTotalPrice().toLocaleString('ru-RU')}
                            </span>
                        </div>
                        <button className={s.buy}>Перейти к оформлению</button>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
