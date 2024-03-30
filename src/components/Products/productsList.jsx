import s from './productsList.module.css'

export default function ProductsList(products) {
    return (
        <div className={s.products}>
            {products?.products?.map((el) => (
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
    )
}
