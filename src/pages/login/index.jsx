import React from 'react'
import img1 from '../../img/tacorootlogo2.png'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.imgwrapper1}>
        <Link to="/"><img src={img1} alt="" width={'200px'} height={'200px'}></img></Link>
      </div>
      <form>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input className={styles.inputs} type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input className={styles.inputs} type="email" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input className={styles.inputs} type="password" />
        </div>
        <div className={styles.formbtns}>
          <button className={styles.formlogin1}>Log In</button>
          <p className={styles.formsignup1}>Don't have an account ? <Link to="/signup"><span>Sign Up</span></Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
