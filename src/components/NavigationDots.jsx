import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            className="app__navigation-dot"
            href={`#${item}`}
            key={item + index}
            onClick={() => {}}
            style={
              active === item
                ? { backgroundColor: "#e94560" }
                : { backgroundColor: "#aab3c2" }
            }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
