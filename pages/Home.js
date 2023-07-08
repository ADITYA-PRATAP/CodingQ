import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PicCards from '../Home/Piccards'
import Number from '../Home/Number'
import Footer from '../Home/Footer'
import Nav2 from '../Home/Nav2'
import Demo from '../Home/Demo'

const Home = () => {


  return (
    <>
      <Head>
        {/* Add necessary meta tags, title, etc. */}
      </Head>

      <section className={styles.main}>
        <Nav2></Nav2>
      </section>

      <section>
        <PicCards></PicCards>
      </section>

      <section className='mt-0'>
        <Number></Number>
      </section>

      <section>
        <Demo></Demo>
      </section>

      <section>
        <Footer></Footer>
      </section>
    </>
  )
}

export default Home
