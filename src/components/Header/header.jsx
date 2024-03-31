import { Link } from 'react-router-dom'
import s from './header.module.css'
import { useMyContext } from '../../context/myContext'
import { HeaderIconsSvg } from '../../helpers/HeaderIconsSvg'

export default function Header() {
    const { cart } = useMyContext()

    function getCartLength() {
        return cart.reduce((length, item) => {
            return length + item.quantity
        }, 0)
    }

    return (
        <header className={s.header}>
            <Link to="/">
                <h1 className={s.logo}>QPICK</h1>
            </Link>
            <nav className={s.nav}>
                <ul className={s.ul}>
                    <li className={s.li}>
                        <Link to="#">
                            <HeaderIconsSvg id={'heart'} />
                        </Link>
                        <div className={s.circle}>2</div>
                    </li>
                    <li className={s.li}>
                        <Link to="/cart">
                            <HeaderIconsSvg id={'cart'} />
                        </Link>
                        {getCartLength() !== 0 && (
                            <div className={s.circle}>{getCartLength()}</div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
