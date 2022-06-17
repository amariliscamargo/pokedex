import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/components/Navbar.module.css"


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image src={'/images/pokeball.png'} width='30' height='30' alt='pokedex'></Image>
            <h1>PokeNext</h1>
        </div>
        <ul className={styles.link_items}>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/about"><a>About</a></Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar