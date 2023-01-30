import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';
import { firebaseUrl } from '../constant/firebase';

const NewMeetup = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (value) => {
    fetch(firebaseUrl, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((rep) => {
      navigate('/');
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
