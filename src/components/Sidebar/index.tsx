import { Book } from "phosphor-react";

import styles from "./styles.module.scss";

type Props = {
  profile: {
    avatar: string;
    name: string;
  };
};

export function Sidebar({ profile }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.recentRepositories}>
        <div className={styles.top}>
          <strong>Recent Repositories</strong>
          <button className={styles.newButton}>
            <Book weight="bold" color="#fff" size={20} />
            <span>New</span>
          </button>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Find a repository..." />
        </div>
        <div className={styles.repositoryLinks}>
          <span className={styles.repositoryLink}>
            <img src={profile.avatar} alt={profile.name} /> {profile.name}
            /repo-1
          </span>
          <span className={styles.repositoryLink}>
            <img src={profile.avatar} alt={profile.name} /> {profile.name}
            /repo-2
          </span>
          <span className={styles.repositoryLink}>
            <img src={profile.avatar} alt={profile.name} /> {profile.name}
            /repo-3
          </span>
          <span className={styles.repositoryLink}>
            <img src={profile.avatar} alt={profile.name} /> {profile.name}
            /repo-4
          </span>
          <span className={styles.repositoryLink}>
            <img src={profile.avatar} alt={profile.name} /> {profile.name}
            /repo-5
          </span>
          <span className={styles.repositoryLink}>
            <img src={profile.avatar} alt={profile.name} /> {profile.name}
            /repo-6
          </span>
          <span className={styles.repositoryLink}>
            <img src={profile.avatar} alt={profile.name} /> {profile.name}
            /repo-7
          </span>
        </div>
        <button className={styles.showMoreRepositories}>Show more</button>
      </div>
      <div className={styles.divisor}></div>
      <div className={styles.recentActivity}>
        <strong>Recent activity</strong>
        <p>
          When you take actions across GitHub, we’ll provide links to that
          activity here.
        </p>
      </div>
    </div>
  );
}
