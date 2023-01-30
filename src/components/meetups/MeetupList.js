import React from 'react';
import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

const MeetupList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((value) => (
        <MeetupItem
          key={value.id}
          id={value.id}
          image={value.image}
          title={value.title}
          description={value.description}
          address={value.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
