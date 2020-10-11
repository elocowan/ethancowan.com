import React from 'react';
import Header from '../components/header';
import {Link} from 'gatsby';

export default function About() {
  return (
    <div>
      <Header headerText="Hi, I'm Ethan" />
      <Link to="/">Home</Link>
    </div>
  )
}
