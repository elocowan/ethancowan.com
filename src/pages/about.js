import React from 'react';
import Header from '../components/header';
import {Link} from 'gatsby';

export default function About() {
  return (
    <div>
      <Header headerText="About Gatsby" />
      <Header headerText="another header" />
      <Link to="/">Home</Link>
    </div>
  )
}
