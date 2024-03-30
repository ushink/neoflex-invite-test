import { useEffect, useState } from 'react'
import s from './productsList.module.css'

export default function ProductsList(products) {
    const [cart, setCart] = useState([])

    const handleAddToCart = (select) => {
        if (cart.length === 0) {
            setCart([...cart, { ...select }])
        } else {
            setCart([
                ...JSON.parse(localStorage.getItem('cart')),
                { ...select }
            ])
        }
    }

    useEffect(() => {
        if (cart.length !== 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    return (
        <div className={s.products}>
            {products?.products.map((el) => (
                <div className={s.productCard} key={Math.random()}>
                    <img className={s.image} src={el.img} alt="" />
                    <div className={s.info}>
                        <h3 className={s.name}>{el.title}</h3>
                        <p className={s.price}>{el.price}</p>
                    </div>
                    <div className={s.info}>
                        <span className={s.rate}>{el.rate}</span>
                        <button
                            className={s.buttonBuy}
                            onClick={() => {
                                console.log(el.id)
                                handleAddToCart({
                                    id: el.id,
                                    src: el.img,
                                    name: el.title,
                                    price: el.price
                                })
                            }}
                        >
                            Купить
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
