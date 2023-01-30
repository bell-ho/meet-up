import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { firebaseUrl } from '../constant/firebase';
const AllMeetups = () => {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(firebaseUrl)
      .then((rep) => {
        return rep.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>loading..</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList items={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
