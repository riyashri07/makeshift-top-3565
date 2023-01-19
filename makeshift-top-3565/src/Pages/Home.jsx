import Carousel from "../Component/Carousel";
import Footer from "../Component/Footer";
import Data from "../Data.json";
import home from "./Home.module.css";
import timer from "../Images/Timer.png";
const Home = () => {
  return (
    <>
      <Carousel start={Data.banner.start} />
      {/* ---------------------------------------------------------------------- */}
      <div className={home.deal}>
        <div className={home.h}>
          <h1> Deal of the Day </h1>
          <h4> CHECK BACK FOR NEW DEALS EVERY DAY</h4>
        </div>

        <div className={home.insidedeal}>
          <div className={home.img}>
            <img
              src="https://www.adorama.com/images/Large/pl14q1blsfm.jpg"
              alt=""
            />
          </div>

          <div className={home.star}>
            <h4>Pelican 14QT Personal Cooler, Pacific Blue/Seafoam</h4>
            <button>View Deal</button>
          </div>

          <div>
            <img src={timer} alt="" />
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}

      <div className={home.box}>
        <img
          src="https://www.adorama.com/images/cms/36471Hero-Fujifilm-Instax-Mini-Desktop@2x_77486.jpg"
          alt="girlimage"
        />
      </div>

      <div className={home.double}>
        <div style={{ width: "80%", padding: "20px" }}>
          <img
            src="https://www.adorama.com/images/cms/36471Spotlight-Slidgo-X10-Desktop_72166.jpg"
            alt="boy"
          />
        </div>
        <div style={{ width: "80%", padding: "20px" }}>
          <img
            src="https://www.adorama.com/col/CDP/Sennhesier-IE200-AM-Spotlight-Desktop.jpg"
            alt="boy"
          />
        </div>
      </div>
      {/* --------------------------------------------------------------------- */}

      <div className={home.grid}>
        <div style={{ width: "110%", padding: "30px" }}>
          <img
            src="https://www.adorama.com/col/UIimages/homepage/evergreen-banners/Callout_Image_Used.jpg"
            alt="girlimage"
          />
        </div>
        <div style={{ width: "110%", padding: "30px" }}>
          <img
            src="https://www.adorama.com/col/UIimages/homepage/evergreen-banners/Callout_Image_Sell.jpg"
            alt="girlimage"
          />
        </div>
        <div style={{ width: "110%", padding: "30px" }}>
          <img
            src="https://www.adorama.com/col/UIimages/homepage/evergreen-banners/Callout_Students.jpg"
            alt="girlimage"
          />
        </div>
        <div style={{ width: "110%", padding: "30px" }}>
          <img
            src="https://www.adorama.com/col/UIimages/homepage/evergreen-banners/Callout_Rentals.jpg"
            alt="girlimage"
          />
        </div>
        <div>
          <img
            src="https://www.adorama.com/col/UIimages/homepage/evergreen-banners/Callout_Image_ABS.jpg"
            alt="girlimage"
          />
        </div>
        <div>
          <img
            src="https://www.adorama.com/col/UIimages/homepage/evergreen-banners/Callout_Printique.jpg"
            alt="girlimage"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Home;
