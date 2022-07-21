import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import styles from "./styles.module.scss";

export function Home() {
  const profile = {
    avatar: "https://github.com/arthur-lage.png",
    name: "arthur-lage",
  };

  return (
    <div className={styles.container}>
      <Header profile={profile} />
      <div className={styles.main}>
        <Sidebar profile={profile} />
        <Feed profile={profile} />
      </div>
    </div>
  );
}
