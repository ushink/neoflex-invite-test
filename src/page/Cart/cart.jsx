import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import { MainIconsSvg } from '../../helpers/MainIconsSvg'
import s from './cart.module.css'
import Counter from '../../components/Counter/counter'

export default function Cart() {
    const productsCart = JSON.parse(localStorage.getItem('cart'))

    function getTotalPrice() {
        return productsCart.reduce((totalPrice, item) => {
            return totalPrice + item.price * item.quantity
        }, 0)
    }

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
                                    <Counter count={el.quantity} />
                                </div>

                                <div className={s.info}>
                                    <p className={s.name}>{el.name}</p>
                                    <p className={s.price}>{el.price}</p>
                                </div>

                                <span className={s.allPrice}>
                                    {el.price * el.quantity}
                                </span>
                            </div>
                        ))}
                    </section>
                    <section className={s.totalBox}>
                        <div className={s.total}>
                            <h2 className={s.totalTitle}>ИТОГО</h2>
                            <span className={s.totalPrice}>
                                {getTotalPrice()}
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
