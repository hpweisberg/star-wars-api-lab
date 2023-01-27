import styles from './StarshipDetail.module.css'

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../services/sw-api";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await
        getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <nav className={styles.navbar}>
        <h3>STARSHIP DETAILS</h3>
      </nav>
      <div className={styles.centerEverything}>
        <div className={styles.starshipCard}>
          <div>NAME: {starshipDetails.name}</div>
          <div>MODEL: {starshipDetails.model}</div>
          <Link to='/'>RETURN</Link>
        </div>
      </div>
    </>
  )
}

export default StarshipDetails