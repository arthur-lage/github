import {
  ArrowRight,
  CaretDown,
  Lightbulb,
  Radio,
  Star,
  WifiHigh,
} from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
  profile: {
    avatar: string;
    name: string;
  };
};

export function Feed({ profile }: Props) {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.tabs}>
          <button
            onClick={() => setCurrentTab(0)}
            className={`${styles.tab} ${
              currentTab === 0 ? styles.selected : ""
            }`}
          >
            Following
          </button>
          <button
            onClick={() => setCurrentTab(1)}
            className={`${styles.tab} ${
              currentTab === 1 ? styles.selected : ""
            }`}
          >
            For you
            <span className={styles.beta}>Beta</span>
          </button>
        </div>
        <div className={styles.repositories}>
          <div className={styles.followingTabRepository}>
            <div className={styles.repositoryHeader}>
              <img src={profile.avatar} alt="user-1" />
              <span>
                <strong>user-1</strong> created a repository{" "}
                <strong>user-1/repo-1</strong>
              </span>
              <span className={styles.time}>2 hours ago</span>
            </div>
            <div className={styles.repositoryMain}>
              <div className={styles.info}>
                <strong>user-1/repo-1</strong>
                <div className={styles.starWrapper}>
                  <button className={styles.star}>
                    <Star size={16} weight="bold" color="#8b949e" />
                    <span>Star</span>
                  </button>
                  <button className={styles.extraOptions}>
                    <CaretDown weight="fill" size={14} color="#8b949e" />
                  </button>
                </div>
              </div>
              <span className={styles.time}>Updated Jul 21</span>
            </div>
          </div>
          <div className={styles.followingTabRepository}>
            <div className={styles.repositoryHeader}>
              <img src={profile.avatar} alt="user-2" />
              <span>
                <strong>user-2</strong> created a repository{" "}
                <strong>user-2/repo-2</strong>
              </span>
              <span className={styles.time}>3 hours ago</span>
            </div>
            <div className={styles.repositoryMain}>
              <div className={styles.info}>
                <strong>user-2/repo-2</strong>
                <div className={styles.starWrapper}>
                  <button className={styles.star}>
                    <Star size={16} weight="bold" color="#8b949e" />
                    <span>Star</span>
                  </button>
                  <button className={styles.extraOptions}>
                    <CaretDown weight="fill" size={14} color="#8b949e" />
                  </button>
                </div>
              </div>
              <span>Updated Jul 21</span>
            </div>
          </div>
          <div className={styles.followingTabRepository}>
            <div className={styles.repositoryHeader}>
              <img src={profile.avatar} alt="user-3" />
              <span>
                <strong>user-3</strong> created a repository{" "}
                <strong>user-3/repo-3</strong>
              </span>
              <span className={styles.time}>5 hours ago</span>
            </div>
            <div className={styles.repositoryMain}>
              <div className={styles.info}>
                <strong>user-3/repo-3</strong>
                <div className={styles.starWrapper}>
                  <button className={styles.star}>
                    <Star size={16} weight="bold" color="#8b949e" />
                    <span>Star</span>
                  </button>
                  <button className={styles.extraOptions}>
                    <CaretDown weight="fill" size={14} color="#8b949e" />
                  </button>
                </div>
              </div>
              <span>Updated Jul 21</span>
            </div>
          </div>
          <div className={styles.followingTabRepository}>
            <div className={styles.repositoryHeader}>
              <img src={profile.avatar} alt="user-4" />
              <span>
                <strong>user-4</strong> created a repository{" "}
                <strong>user-4/repo-4</strong>
              </span>
              <span>6 hours ago</span>
            </div>
            <div className={styles.repositoryMain}>
              <div className={styles.info}>
                <strong>user-4/repo-4</strong>
                <div className={styles.starWrapper}>
                  <button className={styles.star}>
                    <Star size={16} weight="bold" color="#8b949e" />
                    <span>Star</span>
                  </button>
                  <button className={styles.extraOptions}>
                    <CaretDown weight="fill" size={14} color="#8b949e" />
                  </button>
                </div>
              </div>
              <span>Updated Jul 21</span>
            </div>
          </div>
        </div>

        <footer>
          <div className={styles.top}>
            <div>
              <Lightbulb weight="bold" color="#8b949e" size={22} />
              <span className={styles.proTip}>ProTip!</span> The feed shows you
              events from people you <div className={styles.link}>follow</div>
              and repositories you
              <div className={styles.link}>watch</div> or
              <div className={styles.link}>star</div>.
            </div>
            <div>
              <WifiHigh weight="bold" color="#8b949e" size={22} /> Subscribe to
              your news feed
            </div>
          </div>
          <div className={styles.bottom}>
            <Link className={styles.link} to="/">
              <svg
                height="32"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                data-view-component="true"
                className="octicon octicon-mark-github v-align-middle"
              >
                <path
                  fill-rule="evenodd"
                  fill="#8b949e"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
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
        <div className={styles.latestChangesWrapper}>
          <strong>Latest changes</strong>
          <div className={styles.latestChanges}>
            <div className={styles.change}>
              <span className={styles.time}>14 hours ago</span>
              <span className={styles.changelog}>
                Changelog example for my github clone!
              </span>
            </div>
            <div className={styles.change}>
              <span className={styles.time}>14 hours ago</span>
              <span className={styles.changelog}>
                Changelog example for my github clone!
              </span>
            </div>
            <div className={styles.change}>
              <span className={styles.time}>14 hours ago</span>
              <span className={styles.changelog}>
                Changelog example for my github clone!
              </span>
            </div>
            <div className={styles.change}>
              <span className={styles.time}>14 hours ago</span>
              <span className={styles.changelog}>
                Changelog example for my github clone!
              </span>
            </div>
            <div className={styles.viewChangelogButton}>
              View changelog
              <ArrowRight weight="regular" size={14} />{" "}
            </div>
          </div>
        </div>
        <div className={styles.exploreRepositoriesWrapper}>
          <strong>Explore repositories</strong>
          <div className={styles.exploreRepositories}>
            <div className={styles.exploreRepository}>
              <strong>Repository/repo-1</strong>
              <p>This is a test repository for my github clone!</p>
              <div className={styles.techAndStars}>
                <div className={styles.ballWrapper}>
                  <div className={styles.ball}></div>
                  <span>Javascript</span>
                </div>
                <div className={styles.starWrapper}>
                  <Star size={16} weight="bold" color="#8b949e" />
                  <span>50</span>
                </div>
              </div>
            </div>
            <div className={styles.exploreRepository}>
              <strong>Repository/repo-2</strong>
              <p>This is a test repository for my github clone!</p>
              <div className={styles.techAndStars}>
                <div className={styles.ballWrapper}>
                  <div className={styles.ball}></div>
                  <span>Javascript</span>
                </div>
                <div className={styles.starWrapper}>
                  <Star size={16} weight="bold" color="#8b949e" />
                  <span>50</span>
                </div>
              </div>
            </div>
            <div className={styles.exploreRepository}>
              <strong>Repository/repo-3</strong>
              <p>This is a test repository for my github clone!</p>
              <div className={styles.techAndStars}>
                <div className={styles.ballWrapper}>
                  <div className={styles.ball}></div>
                  <span>Javascript</span>
                </div>
                <div className={styles.starWrapper}>
                  <Star size={16} weight="bold" color="#8b949e" />
                  <span>50</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exploreMoreButton}>
            Explore more <ArrowRight weight="regular" size={14} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
