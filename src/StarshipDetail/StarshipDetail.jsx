// import styles from './StarshipDetial.module.css'

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
    <h3>STARSHIP DETAILS</h3>
      <div>NAME: {starshipDetails.name}</div>
      <div>MODEL: {starshipDetails.model}</div>
      <Link to='/'>RETURN</Link>
    </>
  )
}

export default StarshipDetails