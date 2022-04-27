import React from 'react';
import { TableCell } from '../../helpers/types';
import styles from './Cell.module.css';

interface CellProps {
  cell: TableCell;
}

const Cell: React.FC<CellProps> = ({ cell }) => <div className={styles.tableCell}>Cell {cell.data}</div>;

export default Cell;
