import React, {useState, useEffect} from 'react';
import LaunchesAPI from '../api/launches';
import LaunchItem from '../components/LaunchItem';

import data from './DUMMY_DATA';

const Launch = (props) => {
  const [launches, setLaunches] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await LaunchesAPI.retrieve()
    setLaunches(data)
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading === true && <p>Loading data</p>}
      {isLoading === false && (
        launches && launches.map((l) => {
          return (
            <LaunchItem key={l.id} imgUrl={l.image} name={l.name} description={l.mission.description}/>
          )
        }
      ))}
    </div>
  )
}
export default Launch;