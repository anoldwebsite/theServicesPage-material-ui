import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './ui/header';
import Footer from './ui/footer';
import theme from './ui/theme';
import LandingPage from './landingPage';
import Services from './services';
import CustomSoftware from './customSoftware';
import MobileApps from './mobileApps';
import Websites from './websites';
import Revolution from './revolution';
import About from './about';
import Contact from './contact';
import Estimate from './Estimate';

function App() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/">
            <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/services">
            <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/customsoftware">
            <CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/mobileapps">
            <MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/websites">
            <Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/revolution">
            <Revolution setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/about">
            <About setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/contact" component={() => <div>Contact Us</div>}>
            <Contact setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/estimate">
            <Estimate setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
