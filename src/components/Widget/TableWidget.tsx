import React from 'react';
import { RemoteDataWidget } from './RemoteDataWidget';
import { RemoteDataProvider } from '../../services/RemoteDataProvider';
import './TableWidget.css';

interface TableData {
  headers: string[];
  rows: string[][];
}

interface TableWidgetProps {
  id: string;
  title?: string;
  onRemove?: (id: string) => void;
  filename: string;
}

const Table: React.FC<TableData> = ({ headers, rows }) => (
  <div className="storybook-table-container">
    <table className="storybook-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const TableWidget: React.FC<TableWidgetProps> = ({
  id,
  title = 'Data Table',
  onRemove,
  filename,
}) => {
  const remoteDataProvider = new RemoteDataProvider({
    endpoint: `/fixtures/${filename}`,
    type: 'json'
  });

  return (
    <RemoteDataWidget
      id={id}
      title={title}
      onRemove={onRemove}
      remoteDataProvider={remoteDataProvider}
      cacheKey={`table-${id}`}
      cacheTTL={5 * 60 * 1000} // 5 minutes cache
      renderData={(data: TableData & { title?: string }) => (
        <Table headers={data.headers} rows={data.rows} />
      )}
      adaptTitle={(data: TableData) => data?.title || title}
    />
  );
}; 