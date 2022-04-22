import React from "react";
import { NavigationDots } from "../components";

const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />

          {idName === "contact" && (
            <div className="copyright">
              <p className="p-text">@2022 YASH</p>
              <p className="p-text">All rights reserved</p>
            </div>
          )}
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
