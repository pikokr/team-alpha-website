import React from "react";
import styles from "./home.module.scss";
import { motion } from "framer-motion";
import { Button } from "discord-components-react";
import RefreshButton from "../../components/RefreshButton";

const scrollTo = (ref) =>
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

function HomePage() {
const [guildData, setGuildData] = React.useState(null)

  const refs = {
    sec2: React.useRef(null),
  };

  fetch('https://discord.com/api/guilds/738294838063136808/embed.json').then(res => res.json()).then(res => setGuildData(res))

  return (
    <div>
      <div className={`${styles.background} ${styles.dark}`}>
        <div>
          <motion.h1
            initial={{
              scale: 0,
              fontSize: 60,
              margin: 0,
            }}
            animate={{
              scale: 1,
            }}
          >
            Team Alpha
          </motion.h1>
        </div>
        <div style={{ marginTop: 20 }}>
          <motion.div
            initial={{
              y: 25,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            }}
            transition={{
              duration: 2,
            }}
            style={{ display: "inline-block" }}
          >
            <Button onClick={() => scrollTo(refs.sec2)}>더 알아보기</Button>
          </motion.div>
        </div>
      </div>
      <div className={styles.background} ref={refs.sec2}>
        <div
          style={{
            display: "grid",
            width: "100vw",
            height: "100vh",
            gridTemplateRows: "repeat(1,1vh)",
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          <div className={`${styles["split-item"]}`}>
            <motion.h2
              initial={{
                scale: 0,
                margin: 0
              }}
              animate={{
                scale: 1,
              }}
            >
              Team Alpha 공식 서버 <RefreshButton onClick={() => fetch('https://discord.com/api/guilds/738294838063136808/embed.json').then(res => res.json()).then(res => setGuildData(res))}/>
            </motion.h2>
            {
                guildData ? (
                    <div>
                        <p>온라인 멤버 {guildData.members.length}명</p>
                        <Button onClick={() => window.open(guildData.instant_invite)}>참가하기</Button>
                    </div>
                ) : '로딩중...'
            }
          </div>
          <div className={styles["split-item"]}>준비중</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
