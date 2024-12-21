import React from 'react'
import Hero from "./Components/Hero";
import Table from "./Components/Table";
import Instagram from './Components/Instagram';
import Sofaset from './Components/Sofaset';
import Blogs from './Components/Blogs';
import Herothree from './Components/Herothree';


export default function Home() {
  return (

    <div>
      <Hero/>
      <Table/>
      <Herothree/>
      <Sofaset/>
      <Blogs/>
      <Instagram/>
      
    </div>
  );
}
