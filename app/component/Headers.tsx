import styles from "./headers.module.css";

const Headers = () => {
  return (
    <header className={styles.dashboardHeader}>
      <div className={styles.headerLeft}>
        <div className={styles.headerRow}>
          <span className={styles.headerLabel}>SYS.NAME</span>
          <span className={styles.headerColon}>:</span>
          <span className={styles.headerValue}>KAYY_OS v4.3.0</span>
        </div>
        <div className={styles.headerRow}>
          <span className={styles.headerLabel}>SYS.AUTH</span>
          <span className={styles.headerColon}>:</span>
          <span className={`${styles.headerValue} ${styles.statusSuccess}`}>
            GUEST_ACCESS_GRANTED
          </span>
        </div>
        <div className={styles.headerRow}>
          <span className={styles.headerLabel}>SYS.NODE</span>
          <span className={styles.headerColon}>:</span>
          <span className={styles.headerValue}>kayy.xos</span>
        </div>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.headerRow}>
          <span className={styles.headerLabel}>UPTIME</span>
          <span className={styles.headerColon}>:</span>
          <span className={styles.headerValue}>2201d 10:17</span>
        </div>
        <div className={styles.headerRow}>
          <span className={styles.headerLabel}>TERMINAL</span>
          <span className={styles.headerColon}>:</span>
          <span className={styles.headerValue}>TTY0</span>
        </div>
        <div className={styles.headerRow}>
          <span className={styles.headerLabel}>STATUS</span>
          <span className={styles.headerColon}>:</span>
          <span className={`${styles.headerValue} ${styles.statusCode}`}>
            200
          </span>
        </div>
      </div>
    </header>
  );
};

export default Headers;
