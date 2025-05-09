import React from 'react'
import styles from './EarthLoading.module.css'

const EarthLoading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.earth}>
        <div className={styles.earthSurface}></div>
      </div>
        {/* <Image priority unoptimized src="/Rotating_earth_animated_transparent.gif" alt="Loading Earth" width={200} height={200} /> */}
      <p className={styles.loadingText}>Loading Earth...</p>
    </div>
  )
}

export default EarthLoading