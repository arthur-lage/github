import { Lightbulb, Radio, WifiHigh } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export function Feed() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.tabs}>
          <div className={styles.tab}>Following</div>
          <div className={styles.tab}>
            For you
            <span className={styles.beta}>Beta</span>
          </div>
        </div>
        <div className={styles.repositories}>
          <div className={styles.followingTabRepository}>Repo 1</div>
          <div className={styles.followingTabRepository}>Repo 2</div>
          <div className={styles.followingTabRepository}>Repo 3</div>
          <div className={styles.followingTabRepository}>Repo 4</div>
        </div>
        
        <footer>
          <div className="top">
            <div>
              <Lightbulb weight="bold" color="#fff" size={24} /> ProTip! The
              feed shows you events from people you follow and repositories you
              watch or star.
            </div>
            <div>
              <WifiHigh weight="bold" color="#fff" size={24} /> Subscribe to
              your news feed
            </div>
          </div>
          <div className="bottom">
            <Link to="/">
              <span>&copy; 2022 GitHub, Inc.</span>
            </Link>
            <ul>
              <li>Blog</li>
              <li>About</li>
              <li>Shop</li>
              <li>Contact GitHub</li>
              <li>Pricing</li>
            </ul>
            <ul>
              <li>API</li>
              <li>Training</li>
              <li>Status</li>
              <li>Security</li>
            </ul>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Docs</li>
            </ul>
          </div>
        </footer>
      </div>
      <div className={styles.right}>
        <strong>Latest changes</strong>
        <strong>Explore repositories</strong>
      </div>
    </div>
  );
}
