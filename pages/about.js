import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Nullam ullamcorper, neque non hendrerit pulvinar, nulla arcu auctor ligula, vitae viverra quam ipsum at enim. Fusce vitae cursus purus. Praesent laoreet et tortor a accumsan. Integer quam felis, convallis sit amet fringilla at, euismod sed justo.</p>
      <Image src={'/images/charizard.png'} width='300' height='300' alt='Charizard'/>
    </div>
  )
}

export default About