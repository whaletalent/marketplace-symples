import React, { Fragment, Component } from "react";
import "./App.scss";

import HeroSection from "./components/HeroSection";
import FooterCopyright from "./components/FooterCopyright";
import FooterMenu from "./components/FooterMenu";

import OfflineAlert from "./components/OfflineAlert";
import Routes from "./Routes";

class App extends Component {
  state = {
    online: navigator.onLine
  };
  componentDidMount() {
    window.addEventListener("online", this.handleNetworkChange);
    window.addEventListener("offline", this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleNetworkChange);
    window.removeEventListener("offline", this.handleNetworkChange);
  }
  handleNetworkChange = () => {
    this.setState({
      online: navigator.onLine
    });
  };
  render() {
    return (
      <div className="App">
        <HeroSection />
        <div className="content">
          <Routes />
        </div>
        <FooterMenu />
        <FooterCopyright />
        {!this.state.online && <OfflineAlert />}
      </div>
    );
  }
}

export default App;
