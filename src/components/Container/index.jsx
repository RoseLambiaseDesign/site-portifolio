import "@mui/icons-material"
import styles from './Contatos.module.css'
import "./Container"
 
function Container (GMail,FaWhatsapp,BsBehance,SiGithub,FaLinkedinIn, { children } ) {

    return (<>

<section className={styles.contatos}>
    <h2>Contatos</h2>
    <h3>Entre em contato</h3>
    <p>Para que possamos conversar mais sobre</p>
    <div className={styles.icones}>
        
       <a href = "mailto:rosangela.lambiase87@gmail.com" target="_blank" rel="noopener noreferrer">
            <GMail className={styles.icone}/>
        </a>

        <a href="https://w.app/pLRcxG"  target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp className={styles.icone}/>
        </a>

        <a href="https://www.behance.net/rosangelambias/" target='_blank' rel='noopener noreferrer'>
            <BsBehance className={styles.icone} />
        </a>

        <a href="https://github.com/RoseLambiaseDesign/" target='_blank' rel='noopener noreferrer'>
            <SiGithub className={styles.icone} />
        </a>

        <a href="https://www.linkedin.com/in/roselambiasedesign/" target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn className={styles.icone} />
        </a>
    </div>
</section>
<section className={styles.container}>
            {children}
        </section>

</>)} export default Container;



// eslint-disable-next-line react/prop-types

 

