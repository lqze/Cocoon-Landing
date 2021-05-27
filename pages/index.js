import Head from 'next/head'
import ReactPlayer from 'react-player/youtube'
import styles from '../styles/Home.module.css'

// image + text
const Card = (props) => {
  const { image, link, children } = props;
  return <div className={styles.card}>
    <div className={styles.card_image}>
      <img src={image} loading="lazy" />
    </div>
    <div className={styles.card_content}>
      {children}
      <a className={styles.button} href={link}>Download Brochure</a>
    </div>
  </div>
}

const Header = () => {
  return <header className={styles.header}>
    <div className={styles.inner}>
      <div className={styles.header_image}>
        <img src={"images/Logo_Cocoon_Grey.jpg"} />
      </div>
    </div>
  </header>
}



const Content = () => {
  return (
    <p className={styles.content}>
      <span>Cocoon Medical is proudly
distributed in ANZ by < br/>Advanced 
Cosmeceuticals Capital Division</span>
    </p>
  )
}

const IntroContent = () => {
  const COCOON_TEXT = 
`Our company’s medical aesthetic technologies are backed by years of research from our R&D&I department, numerous satisfied 
physicians worldwide and scientific studies. We want to bring the latest technology to your clinic so that you can offer a wide 
range of fast, reliable and efficient medical aesthetic treatments.`
  return (
    <div className={styles.intro_content}>
      <h1>
        COCOON MEDICAL DEVICES
      </h1>
      <p>
      {COCOON_TEXT}
      </p>
    </div>
  )
}
const VideoBlock = () => {
  const youtubeUrl = "https://www.youtube.com/embed/1yWgTz4xL8I?autohide=1&autoplay=0&cc_load_policy=0&controls=0&enablejsapi=1&fs=0&modestbranding=1&origin=https%3A%2F%2Fwww.cocoonmedical.com&iv_load_policy=1&loop=1&showinfo=0&rel=0&wmode=opaque&hd=1&mute=1&widgetid=1";
  return <div className={styles.video_wrapper}>
    <div className={styles.video} style={{"--aspect-ratio": 3 / 4}}>
      <ReactPlayer url={youtubeUrl} loop muted playing />
    </div>
  </div>
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cocoon Medical Australia</title>
        <meta name="description" content="Cocoon Medical Australia Landing Page" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;700&display=swap" rel="stylesheet" /> 
        <link rel="icon" href="/favicon.png" />
      </Head>

        <Header />
        <VideoBlock />
      <main className={styles.main}>
        <div className={styles.inner}>
          <IntroContent />
          <div className={styles.card_wrapper}>
            <Card image={"images/products/cooltech.png"} link={`https://www.advancedcosmeceuticals.com.au/wp-content/uploads/Cooltech-Define-B2B-Brochure.pdf`}>
              <p><b>cool</b>tech</p>
              <span>DEFINE</span>
            </Card>
            <Card image={"images/products/elysion.jpg"} link={`https://www.advancedcosmeceuticals.com.au/wp-content/uploads/Primelase-B2B-Brochure.pdf`}>
              <p><b>prime</b>lase</p>
              <span>EXCELLENCE</span>
            </Card>
            <Card image={"images/products/primelase.png"} link={`https://www.advancedcosmeceuticals.com.au/wp-content/uploads/Elysion-pro-B2B_AUS.pdf`}>
              <p>elysion <b>pro</b></p>
            </Card>
          </div>
          <Content />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.footer_bar} />
          <div className={styles.footer_inner}>
            <div className={styles.footer_left}>
              <p className={styles.footer_heading}>Start a conversation</p>
              <p>Phone: <a href="tel:1800242011">1800242011</a></p>
              <p>Email: <a href="mailto:info@cocoonmedicalaustralia.com.au">info@cocoonmedicalaustralia.com.au</a></p>
            </div>
            <div className={styles.footer_right}>
              <p className={styles.footer_heading}>Headquarters</p>
              <p>38 Automotive Drive,</p>
              <p>Wangara WA 6065, Australia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
