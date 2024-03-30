import { Link } from 'react-router-dom'
import s from './header.module.css'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

export default function Header() {
    return (
        <header className={s.header}>
            <Link to="/">
                <h1 className={s.logo}>QPICK</h1>
            </Link>
            <nav className={s.nav}>
                <ul className={s.ul}>
                    <li className={s.li}>
                        <Link to="#">
                            <HeartOutlined className={s.icon} />
                        </Link>
                        <div className={s.circle}>2</div>
                    </li>
                    <li className={s.li}>
                        <Link to="/cart">
                            <ShoppingCartOutlined
                                className={s.icon}
                                style={{ fontSize: '28px' }}
                            />
                        </Link>
                        <div className={s.circle}>1</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
