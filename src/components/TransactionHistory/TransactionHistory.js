import TransactionHistoryItem from "./TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.head}>Type</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Currency</th>
      </tr>
    </thead>

    <tbody>
      <TransactionHistoryItem transactions={items} />
    </tbody>
  </table>
);

export default TransactionHistory;
