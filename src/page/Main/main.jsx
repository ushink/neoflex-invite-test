import { wiredHeadset, wirelessHeadset } from '../../mock/poducts'
import s from './main.module.css'

export default function Main() {
    return (
        <main className={s.main}>
            <section className={s.section}>
                <h2 className={s.title}>Наушники</h2>
                <div className={s.products}>
                    {wiredHeadset.map((el) => (
                        <div className={s.productCard} key={Math.random()}>
                            <img className={s.image} src={el.img} alt="" />
                            <div className={s.info}>
                                <h3 className={s.name}>{el.title}</h3>
                                <p className={s.price}>{el.price}</p>
                            </div>
                            <div className={s.info}>
                                <span className={s.rate}>{el.rate}</span>
                                <button className={s.buttonBuy}>Купить</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className={s.section}>
                <h2 className={s.title}>Беспроводные наушники</h2>
                <div className={s.products}>
                    {wirelessHeadset.map((el) => (
                        <div className={s.productCard} key={Math.random()}>
                            <img className={s.image} src={el.img} alt="" />
                            <div className={s.info}>
                                <h3 className={s.name}>{el.title}</h3>
                                <p className={s.price}>{el.price}</p>
                            </div>
                            <div className={s.info}>
                                <span className={s.rate}>{el.rate}</span>
                                <button className={s.buttonBuy}>Купить</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
