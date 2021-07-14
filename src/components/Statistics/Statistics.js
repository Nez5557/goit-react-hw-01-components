import PaintingStatistics from "./PaintingStatistics";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <PaintingStatistics stats={stats} />
  </section>
);

export default Statistics;
