import React from "react";
import Container from "./Container";

const Features = () => {
  return (
    <Container containerStyles="p-24 bg-white z-0 h-[100vH]" id="features">
      <ul className="list-disc">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </Container>
  );
};

export default Features;
