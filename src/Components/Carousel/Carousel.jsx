import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    animation="foldOutAnimation"
    className="h-[600px] w-full -z-10"
  >
    <div data-src="https://cdn.discordapp.com/attachments/1065689957525630997/1156138769905365012/sS46zBu.png?ex=6540b4a2&is=652e3fa2&hm=94387a27e3d592dd76d6a2e7890a432abc669b29874b05e0fc9162674ee40350&" />
    <div data-src="https://cdn.discordapp.com/attachments/1065689957525630997/1160228815340052571/xmyzr8T.jpg?ex=653d20c9&is=652aabc9&hm=74506dc8adff41246dcb1b87f93a1e007c60058f242dcb8709daf8012d3e6963&" />
    <div data-src="https://cdn.discordapp.com/attachments/1065689957525630997/1156138769905365012/sS46zBu.png?ex=6540b4a2&is=652e3fa2&hm=94387a27e3d592dd76d6a2e7890a432abc669b29874b05e0fc9162674ee40350&" />
  </AutoplaySlider>
);

export default Carousel;
