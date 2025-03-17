import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Themes
//  For Default import Theme.scss
import './assets/scss/theme.scss';
import Routes from "./routes/Routes";

const App = () => {

     useEffect(() => {
          AOS.init();
     }, []);

     return (
          <Routes />
     );
};

export default App;