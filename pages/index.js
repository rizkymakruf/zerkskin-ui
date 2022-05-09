import Navbar from "components/layout/navbar";
import Autoplay from "components/home/autoplaySlide";
import Content from "components/home/content";

export default function Home(props) {
  return (
    <>
      <Navbar />
      <Autoplay />
      <Content />
    </>
  );
}
