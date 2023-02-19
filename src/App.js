import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


let App = () => {
   return (
      <div>
         <Navbar />
         <Main />
         <div className="footer-list">
            <Footer
               img="katie-zaferes.png"
               rating="5.0"
               reviewCount={6}
               location="USA"
               title="Life Lessons with Katie Zaferes"
               price={136} />

            <Footer
               img="wedding-photography.png"
               rating="5.0"
               reviewCount={30}
               location="Online"
               title="Learn Wedding Photography"
               price={125}
            />

            <Footer
               img="mountain-bike.png"
               rating="4.8"
               reviewCount={2}
               location="Norway"
               title="Group Mountain Biking"
               price={50}
            />
            <Footer
               img="katie-zaferes.png"
               rating="5.0"
               reviewCount={6}
               location="USA"
               title="Life Lessons with Katie Zaferes"
               price={136} />

            <Footer
               img="wedding-photography.png"
               rating="5.0"
               reviewCount={30}
               location="Online"
               title="Learn Wedding Photography"
               price={125}
            />

            <Footer
               img="mountain-bike.png"
               rating="4.8"
               reviewCount={2}
               location="Norway"
               title="Group Mountain Biking"
               price={50}
            />
         </div>


      </div>
   )
}

export default App;