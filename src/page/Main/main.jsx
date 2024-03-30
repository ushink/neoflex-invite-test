import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import ProductsList from '../../components/Products/productsList'
import { wiredHeadset, wirelessHeadset } from '../../mock/poducts'
import s from './main.module.css'

export default function Main() {
    return (
        <>
            <Header />
            <main className={s.main}>
                <section className={s.section}>
                    <h2 className={s.title}>Наушники</h2>
                    <ProductsList products={wiredHeadset} />
                </section>
                <section className={s.section}>
                    <h2 className={s.title}>Беспроводные наушники</h2>
                    <ProductsList products={wirelessHeadset} />
                </section>
            </main>
            <Footer/>
        </>
    )
}
