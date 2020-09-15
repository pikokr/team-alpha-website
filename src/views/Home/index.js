import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "./home.module.scss";
import { Button } from "discord-components-react";

class HomePage extends Component {
  ref = {
    sec2: React.createRef(),
  };

  render() {
    return (
      <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className={`section ${styles.section} ${styles.dark}`}>
                <h1 style={{
                  fontSize: 60,
                  margin: 0
                }}>TEAM ALPHA</h1>
                <p>디스코드 봇 제작 팀(?)</p>
                <Button onClick={() => fullpageApi.moveSectionDown()}>
                  더 알아보기
                </Button>
              </div>
              <div className={`section ${styles.section}`}>
                와 샌즈!
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default HomePage;
