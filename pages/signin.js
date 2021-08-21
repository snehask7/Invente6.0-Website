import React, {useState} from "react";
import Typewriter from "typewriter-effect";
import styles from "../styles/Signin.module.css"
import styles2 from "../styles/Signin.module.scss"
import Link from 'next/link'
function Signin() {

    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");

    return <div className={styles.container}>
            
        <div className={styles2.animation_wrapper}>
        <div className={styles2["particle"] + " " + styles2["particle_1"]} ></div>
        <div className={styles2["particle"] + " " + styles2["particle_2"]}></div>
        <div className={styles2["particle"] + " " + styles2["particle_3"]}></div>
        <div className={styles2["particle"] + " " + styles2["particle_4"]}></div>
        </div>

            <main className={styles2.page_wrapper}>
                <div className={styles.signinCard}>
                <h1 className={styles.typing}><Typewriter
                onInit={(typewriter)=>{
                    typewriter.changeDelay(100)
                    .typeString('Welcome back!')
                    .start()
                    .callFunction(()=>{
                        typewriter.stop().pauseFor(200)
                    })
                }}
                /></h1>
                 <form className="form">
                    <p className={styles.text_muted}>Please enter your email and password</p>
                    <input type="email" id="form-email" placeholder="Email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} className={styles.input} />

                    <input type="password" id="form-password" placeholder="Password" value={formPassword} onChange={(e) => setFormPassword(e.target.value)}  className={styles.input}/>

                    <button type="submit" className={styles.btn_signin}>Sign In</button>
                    </form>
                    <Link href="/signup"><a className={styles["text_muted"] + " " + styles["signup"]}> Don`t have an account?</a></Link>
                </div>
            </main>
            </div>
;
};

export default Signin;