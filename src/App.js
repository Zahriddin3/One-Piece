
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import Header from "./components/Header";

function App() {
  return ( 
    <div class="w-full min-h-screen bg-cover bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/df9prpk-1554c9b1-1a1b-4e5d-a461-d2b92825648a.jpg')]">
 <div>
 <Header/>
 </div>
 
  <div>
  <Carousel/>
  </div>
  <Footer/>
</div>
   );
}

export default App;