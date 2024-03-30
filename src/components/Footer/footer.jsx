import s from './footer.module.css'
import { IconsSvg } from '../../helpers/FooterIconsSvg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <Link to="/">
                <h2 className={s.logo}>QPICK</h2>
            </Link>
            <nav className={s.nav}>
                <ul className={s.ulNav}>
                    <li className={s.itemNav}>
                        <Link to="#">Избранное</Link>
                    </li>
                    <li className={s.itemNav}>
                        <Link to="/cart">Корзина</Link>
                    </li>
                    <li className={s.itemNav}>
                        <Link to="#">Контакты</Link>
                    </li>
                </ul>
            </nav>
            <section className={s.info}>
                <h3 className={s.terms}>Условия сервиса</h3>
                <ul className={s.ulInfo}>
                    <li className={s.itemInfo}>
                        <IconsSvg id={'global'} />
                    </li>
                    <li className={`${s.itemInfo}  ${s.focus}`}>Рус</li>
                    <li className={s.itemInfo}>Eng</li>
                </ul>
            </section>
            <address className={s.contacts}>
                <ul className={s.ulContacts}>
                    <li className={s.itemContact}>
                        <IconsSvg id={'vk'} />
                    </li>
                    <li className={s.itemContact}>
                        <IconsSvg id={'telegram'} />
                    </li>
                    <li className={s.itemContact}>
                        <IconsSvg id={'whatsApp'} />
                    </li>
                </ul>
            </address>
        </footer>
    )
}
