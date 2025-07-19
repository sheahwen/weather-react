import backgroundImg from "../assets/bg-light.png";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 z-[-1] h-full w-full" id="background">
      <img
        src={backgroundImg}
        alt="Background"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Background;
