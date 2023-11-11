import ServiceComp from "./components/ServiceComp";
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import FooterComp from "./components/FooterComp";
import FaqComp from "./components/FaqComp";

function App() {
  return (
    <div>
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <GalleryComp />
      <ServiceComp />
      <FaqComp />
      {/* Content */}

      <FooterComp />
    </div>
  );
}

export default App;
