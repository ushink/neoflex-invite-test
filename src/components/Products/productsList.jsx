/* eslint-disable react/prop-types */
import s from './productsList.module.css'
import { useMyContext } from '../../context/myContext'

export default function ProductsList({ products }) {
    const { cart, setCart } = useMyContext()

    const handleAddToCart = (select) => {
        const isItemInCart = cart.find((cartItem) => cartItem.id === select.id)

        if (isItemInCart) {
            const newCart = cart.map((el) =>
                el.id === select.id ? { ...el, quantity: el.quantity + 1 } : el
            )
            setCart(newCart)
        } else {
            setCart([...cart, { ...select }])
        }
    }

    return (
        <div className={s.products}>
            {products?.map((el) => (
                <div className={s.productCard} key={el.id}>
                    <img className={s.image} src={el.img} alt="" />
                    <div className={s.info}>
                        <h3 className={s.name}>{el.title}</h3>
                        <p className={s.price}>
                            {el.price.toLocaleString('ru-RU')}
                        </p>
                    </div>
                    <div className={s.info}>
                        <span className={s.rate}>{el.rate}</span>
                        <button
                            className={s.buttonBuy}
                            onClick={() => {
                                handleAddToCart({
                                    id: el.id,
                                    src: el.img,
                                    name: el.title,
                                    price: el.price,
                                    quantity: 1
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
