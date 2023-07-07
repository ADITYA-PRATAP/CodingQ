// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Link from 'next/link'
// import {useRouter} from 'next/router'
// import styles from '@/styles/Home.module.css'
import PicCards from './HOME/Piccards'
// import Link from 'next/link'
import {useRouter} from 'next/router'
import Number from './HOME/Number'
import Footer from './HOME/Footer'
import Nav2 from './HOME/Nav2'
import Demo from './HOME/Demo'


const Home = () => {
   const router =useRouter();
  return (
    <>
    
    <section className='main'>
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
