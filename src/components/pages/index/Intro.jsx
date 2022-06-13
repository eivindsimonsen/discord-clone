import Heading from "../../common/Heading";
import imageLeft from "../../../images/header-image-left.png";
import imageRight from "../../../images/header-image-right.png";
import downloadIcon from "../../../images/download-icon.png";

function Intro() {
  return (
    <>
      <section className="header-container">
        <Heading title="Imagine a place..." />
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className="header-container__buttons">
          <button className="btn download-btn">
            <div className="header-container__buttons__wrapper">
              <img src={downloadIcon} alt="" />
              <div>Download for Windows</div>
            </div>
          </button>
          <button className="btn open-app-btn">Open discord in your browser</button>
        </div>
      </section>
      <section className="header-container__images">
        <div>
          <img src={imageLeft} alt="yellow man sitting in a shoe, enjoying life" className="headerImageLeft" />
        </div>
        <div>
          <img src={imageRight} alt="purple man sipping straw" className="headerImageRight" />
        </div>
      </section>
    </>
  );
}

export default Intro;
