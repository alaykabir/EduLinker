import React from 'react';
import BasicNavbar from '../../components/StudentNavbar';
import './style.css';

export const Home = () => {
  return (
    <>
      <BasicNavbar />
      console.log("hello");
      <div className="ps-2">Home</div>
    </>
  );
};
