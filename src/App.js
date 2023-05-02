import React from "react";
import { BpkCode } from "@skyscanner/backpack-web/bpk-component-code";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";
import Calendar from "./Calendar";

import STYLES from "./App.scss";

const getClassName = cssModules(STYLES);

const App = () => (
  <div className={getClassName("App")}>
    <header className={getClassName("App__header")}>
      <div className={getClassName("App__header-inner")}>
        <BpkText
          tagName="h1"
          textStyle="xxl"
          className={getClassName("App__heading")}
        >
          Flight Schedule
        </BpkText>
      </div>
    </header>
    <main className={getClassName("App__main")}>
      <BpkText tagName="p" className={getClassName("App__text")}>
        Please select your travel dates on the calendar below.
      </BpkText>
      <Calendar />
      <BpkButton onClick={() => alert("It works!")}>Continue</BpkButton>
    </main>
  </div>
);

export default App;
