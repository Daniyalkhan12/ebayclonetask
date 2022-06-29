import Navbar from "./components/navbar/Navbar";
import SecNavbar from "./components/SecNavbar/SecNavbar";
import Ads from "./Ads/Ads";
import MainSec from "./Mainsec/MainSec";
import SimilarProduct from "./Similarproduct/SimilarProduct";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <SecNavbar/>
      <Ads/>
      <MainSec/>
      <SimilarProduct/>
    </div>
  );
}

export default App;
