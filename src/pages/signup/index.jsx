import React from 'react'
import styles from './index.module.css'
import img1 from '../../img/tacorootlogo2.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgwrapper}>
        <Link to="/"><img src={img1} alt="" width={'200px'} height={'200px'}></img></Link>
      </div>
      <h2>𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓣𝓪𝓬𝓸𝓻𝓸𝓸𝓽!</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input className={styles.inputs} type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="surname">Surname</label>
          <br />
          <input className={styles.inputs} type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input className={styles.inputs} type="email" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input className={styles.inputs} type="password" />
        </div>
        <div className={styles.formbtns}>
          <button className={styles.formsignup}>Sign Up</button>
          <p className={styles.formlogin}>Already have an account ? <Link to="/login"><span>Log In</span></Link> </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
