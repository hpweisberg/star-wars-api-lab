import styles from './StarshipList.module.css'

// import useState:
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services:
import { getAllStarships } from "../services/sw-api";


const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])
  // console.log(starshipList)
  
  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
      // console.log(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  
  return ( 
    <div className='centerEverything'>
      <nav className={styles.navbar}>
        <h3 className={styles.starshiph3}>STAR WARS STARSHIPS</h3>
      </nav>
        
      {starshipList.length ?
      <div className={styles.cardContainer}>
      {starshipList.map(starship =>
        <div className={styles.starshipCard} key={starship.name}>
          <Link className={styles.starshipCard} to='/starship' state=
          {{starship}} >{starship.name}
          </Link>
        </div>
        )}
      </div>
      :
      <>
        <div>Loading your vehchials...</div>
      </>
  }
    </div>
  )
}

export default StarshipList