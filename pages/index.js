import { React } from 'react';
import { Link } from 'next/link';
import { Head } from 'next/head';

function wcube() {
  return (
    <div>
      <link rel="preload" href="/public/fonts/Ubuntu/Ubuntu-Light.ttf" as="font" crossOrigin=""></link>
      <section>
        <h1 style={{fontFamily: "Ubuntu-Light"}}>HN WCube</h1>
      </section>
    </div>
  )
}

export default wcube;
