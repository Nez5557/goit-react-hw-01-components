import styles from "./Statistics.module.css";

const PaintingStatistics = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage, color }) => (
      <li className={styles.item} key={id} style={{ backgroundColor: color }}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
);

export default PaintingStatistics;
