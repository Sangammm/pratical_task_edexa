import React, { createContext, useContext } from "react";
import "./table.scss";

const TableContext = createContext();

const Table = ({
  dataSource,
  columns = [],
  sortDirectionISAsc,
  sortColumn,
  onSortChange,
}) => {
  return (
    <div className="tableContainer">
      <TableContext.Provider value={{ dataSource, columns }}>
        <table>
          <ColumnNames
            sortDirectionISAsc={sortDirectionISAsc}
            sortColumn={sortColumn}
            onSortChange={onSortChange}
          />
          <tbody>
            {dataSource.map((source, index) => (
              <Row key={source.id} index={index} />
            ))}
          </tbody>
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
      {columns.map(({ keyName, name, render }) => (
        <td key={name}>
          {render ? render(source[keyName], source) : source[keyName]}
        </td>
      ))}
    </tr>
  );
};

const ColumnNames = ({
  sortDirectionISAsc = true,
  sortColumn,
  onSortChange,
}) => {
  const { columns } = useContext(TableContext);
  const onTableHeaderClick = (keyName) => {
    if (!sortColumn) {
      onSortChange(keyName, sortDirectionISAsc);
      return;
    }
    if (sortColumn === keyName && sortDirectionISAsc === false) {
      onSortChange(null, true);
    } else if (sortColumn === keyName && sortDirectionISAsc) {
      onSortChange(sortColumn, !sortDirectionISAsc);
    } else {
      onSortChange(sortColumn, true);
    }
  };
  return (
    <thead>
      <tr>
        {columns.map(({ name, keyName }) => (
          <th
            onClick={() => {
              onTableHeaderClick(keyName);
            }}
            key={name}
          >
            {name}
            <span>
              {sortColumn === keyName
                ? sortDirectionISAsc
                  ? `(A)`
                  : `(D)`
                : ""}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Table;
