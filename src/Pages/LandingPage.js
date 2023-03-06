import React from "react";

const LandingPage = () => {
  const assets = [
    "https://colorlib.com/wp/wp-content/uploads/sites/2/15_awesome-websites.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4P-JR0asSWBn2fVIYN4gAirevLcLr9yUWMA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCt-WdfZBK-hkBlOygv0-Juia9V7pUoUENxA&usqp=CAU",
  ];
  return (
    <div className="hero-section">
      <h1>Welcome to myPort</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        repellendus explicabo veniam voluptatem ipsa dolores tenetur doloremque
        autem reprehenderit! Eaque?
      </p>
      <div className="images">
        {assets.map((asset, i) => (
          <img key={i} src={asset} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
