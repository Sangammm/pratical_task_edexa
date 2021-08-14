import React, { createContext, useContext } from "react";

const TableContext = createContext();

const Table = ({ dataSource, columns = [] }) => {
  return (
    <div>
      <TableContext.Provider value={{ dataSource, columns }}>
        <table>
          <ColumnNames />
          {dataSource.map((source, index) => (
            <Row key={source.id} index={index} />
          ))}
        </table>
      </TableContext.Provider>
    </div>
  );
};

const Row = ({ index }) => {
  const { dataSource, columns } = useContext(TableContext);
  const source = dataSource[index];
  return (
    <tr>
      {columns.map(({ keyName, name }) => (
        <td key={name}>{source[keyName]}</td>
      ))}
    </tr>
  );
};

const ColumnNames = () => {
  const { columns } = useContext(TableContext);
  return columns.map(({ name }) => <th>{name}</th>);
};

export default Table;
