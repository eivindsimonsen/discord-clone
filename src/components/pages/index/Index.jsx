import Header from "../../layout/Header";
import Intro from "./Intro";
import HomeSectionsContent from "../../common/HomeSectionsContent";
import discordGroups from "../../../images/discord-groups.png";
import voiceConnected from "../../../images/voice-connected.png";
import channels from "../../../images/channels.png";
import liveCall from "../../../images/live-call.png";
import downloadIcon from "../../../images/download-icon.png";
import Footer from "../../layout/Footer";

function Index() {
  return (
    <>
      <Header content={<Intro />} />
      <main>
        <section>
          <div className="home-content">
            <HomeSectionsContent img={discordGroups} altText="Discord groups displayed with chat" heading="Create an invite-only place where you belong" paragraph="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat." />
          </div>
          <div className="home-content-background">
            <div className="home-content home-content__reverse">
              <HomeSectionsContent img={voiceConnected} altText="Discord chat preview" heading="Where hanging out is easy" paragraph="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call." />
            </div>
          </div>
          <div className="home-content">
            <HomeSectionsContent img={channels} altText="Channels in action" heading="From few to a fandom" paragraph="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more." />
          </div>
          <div className="home-content-background">
            <div className="home-content home-content__column-reverse">
              <HomeSectionsContent img={liveCall} altText="Discord voice chat preview" heading={<h2>Reliable tech for staying close</h2>} paragraph="Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share." />
            </div>
            <div>
              <h3 className="start-journey-background">Ready to start your journey?</h3>
              <button className="btn download-btn-blue bottom-page">
                <div className="header-container__buttons__wrapper">
                  <img src={downloadIcon} alt="" />
                  <div>Download for Windows</div>
                </div>
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Index;
