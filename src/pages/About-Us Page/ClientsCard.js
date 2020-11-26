import React from 'react'
import {Paper, Typography} from '@material-ui/core'
import styles from './AboutUs.module.css'
export default function ClientCard({name,role,flip,img}) {
    return (
        <div style={{width:"100%",display:"flex",justifyContent:"space-evenly",marginTop:"2rem"}}>
            {flip ? (
                <React.Fragment>
                    <Paper elevation={3} className={styles.Paper}>
                        <img className={styles.profilePic} src={img} alt="Client-profile-pic" />
                        <div style={{display:"grid",textAlign:"center"}}>
                            <Typography variant="h6" color="initial">{name}</Typography>
                            <p style={{color:"rgb(127, 60, 235)",margin:"0px"}}>{role}</p>
                        </div>
                    </Paper>
                    <div style={{width:"calc( 100% / 2.4)"}}>
                    <div style={{height:"100%",display:"flex",alignItems:"center",borderTop:" 1px solid rgb(255, 196, 0)"}}>
                    <p style={{lineHeight:"30px",margin:"0",fontSize:"18px",wordSpacing:"3px",color:"GrayText"}}><span style={{color:"#00bfff",fontWeight:"500",fontSize:"25px"}}> " </span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset<span style={{color:"#00bfff",fontWeight:"500",fontSize:"25px"}}> " </span></p>
                    </div>
                    </div>
                 </React.Fragment>   
            ) : (
                 <React.Fragment>
                        <div style={{width:"calc( 100% / 2.4)"}}>
                            <div style={{height:"100%",display:"flex",alignItems:"center",borderTop:" 1px solid rgb(255, 196, 0)"}}>
                            <p style={{lineHeight:"30px",margin:"0",fontSize:"18px",wordSpacing:"3px",color:"GrayText"}}><span style={{color:"#00bfff",fontWeight:"500",fontSize:"25px"}}> " </span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset<span style={{color:"#00bfff",fontWeight:"500",fontSize:"25px"}}> " </span></p>
                            </div>
                        </div>
                        <Paper className={styles.Paper}>
                            <img className={styles.profilePic} src={img}  alt="Client-profile-pic" />
                            <div style={{ display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
                                <Typography variant="h6" color="initial">David Krege</Typography>
                                <p style={{color:"rgb(127, 60, 235)",margin:"0px"}}>Frontend Developer</p>
                            </div>
                        </Paper>
                </React.Fragment>
            )}
        </div>
    )
}
