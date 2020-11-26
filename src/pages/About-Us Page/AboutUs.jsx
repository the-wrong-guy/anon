import React from 'react'
import {Paper, Typography} from '@material-ui/core'
import ClientCard from './ClientsCard'
import styles from './AboutUs.module.css'
export default function AboutUs() {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.Header}>
             <p>About Us</p>
            </div>

            <div className={styles.subContainer1}>
                <Typography align="center" variant="h4" style={{color:"#333"}} >Who Are We!</Typography>
                <div style={{marginTop:"2rem"}}>
                    <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className={styles.subContainer2}>
                <Typography align="center" variant="h4" style={{color:"#333"}}  >Our Story</Typography>
                <div style={{marginTop:"2rem"}}>
                    <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className={styles.subContainer3}>
                <Typography align="center"  variant="h4" style={{color:"#333"}} >Clients</Typography>
                <ClientCard flip={false} img={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"} name="Nesbo Jwsrk" role="Frontend Developer"/>
                <ClientCard flip={true} img={"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"} name="Juan Gonzalez" role="Machine Learning"/>
            </div>

            <div>

            </div>

        </div>
    )
}
