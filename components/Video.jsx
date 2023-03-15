import styles from "../src/styles/Video.module.css"

export const Video = () => {
  return (
    <div className={styles.video}>
        <video src="/images/-117.mp4" loop autoPlay muted></video>
        <h2>CREATE THE CREATE</h2>
    </div>
  )
}
