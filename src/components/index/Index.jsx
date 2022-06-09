import Header from "../layout/Header";
import Intro from "./Intro";

function Index() {
  return (
    <>
      <Header content={<Intro />} />
    </>
  );
}

export default Index;
