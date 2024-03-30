import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import { MainIconsSvg } from '../../helpers/MainIconsSvg'
import s from './cart.module.css'

export default function Cart() {
    return (
        <>
            <Header />
            <main className={s.main}>
                <h1 className={s.title}>Корзина</h1>
                <div className={s.wrapperGrid}>
                    <section className={s.products}>
                        <div className={s.product}>
                            <button className={s.delete}>
                                <MainIconsSvg id={'delete'} />
                            </button>

                            <div className={s.wrapperInfo}>
                                <img
                                    className={s.img}
                                    src="./img/assets/BO4.png"
                                    alt=""
                                />
                                <div className={s.counter}>
                                    <button className={s.decrease}>-</button>
                                    <span className={s.count}>1</span>
                                    <button className={s.increase}>+</button>
                                </div>
                            </div>

                            <div className={s.info}>
                                <p className={s.name}>BO4</p>
                                <p className={s.price}>2638</p>
                            </div>

                            <span className={s.allPrice}>2658</span>
                        </div>
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
