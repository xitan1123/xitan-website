import React from 'react';
import { HashRouter, Route } from 'react-router-dom'

import { Navbar, Carousel, Footer } from './CommonComponent'
import { Consult } from './Consult'
import { Tech } from './Tech'
import { HR } from './HR'

export const App = () => (
  <div>
    <Navbar />

    <Carousel />

    <Consult />

    <Tech />

    <HR />

    <Footer />
  </div>
)