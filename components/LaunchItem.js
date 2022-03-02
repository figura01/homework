import React from 'react';
import classes from './LaunchItem.module.css';

const LaunchItem = (props) => {
  const {imgUrl, name, description} = props
  return (
    <div className={classes.launch}>
      <img src={imgUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default LaunchItem;