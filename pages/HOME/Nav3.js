import React from 'react'
import {HiHome} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineContactMail} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import styles from '@/styles/Nav.module.css'

import { Link } from 'react-router-dom'

const nav = () => {
  return (
    
    <nav className={styles.nav}>
    <Link href="/" >Home<HiHome className={styles.s}/></Link>
    <Link href="/About">About<AiOutlineUser className={styles.s}/></Link>
    <Link href="/Mycourses">Courses<BiBook className={styles.s}/></Link>
    
    <Link href="/Contact">Contact<MdOutlineContactMail className={styles.s}/></Link>
    </nav>
      
    
  )
}

export default nav