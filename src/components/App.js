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
          <Route
            exact
            path="/services">
            <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route
            exact
            path="/customsoftware">
            <CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route
            exact
            path="/mobileapps"
          >
            <MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route
            exact
            path="/websites"
          >
            <Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Route>
          <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/estimate" component={() => <div>Get a Free Estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
