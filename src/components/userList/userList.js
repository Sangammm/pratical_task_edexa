import React, { useMemo, useState } from "react";
import Table from "../table/table";

function diff_years(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff / 365.25));
}

const UserList = ({ users = [] }) => {
  const [sort, setSort] = useState({ column: "", isAsc: true });
  const [search, setSearch] = useState("");

  const sortedUsers = useMemo(() => {
    let copyUsers = [...users];
    if (sort.column) {
      copyUsers.sort((a, b) => {
        const aValue = a[sort.column];
        const bValue = b[sort.column];

        if (aValue < bValue) {
          return sort.isAsc ? -1 : 1;
        }
        if (aValue > bValue) {
          return sort.isAsc ? 1 : -1;
        }
        return 0;
      });
    }
    if (search) {
      copyUsers = copyUsers.filter((user) => {
        let result = false;
        Object.keys(user).forEach((key) => {
          const found = user[key]
            .toString()
            .toLowerCase()
            .search(search.toLowerCase());
          result = found === 0 || result;
        });
        return result;
      });
    }
    return copyUsers;
  }, [users, sort.column, sort.isAsc, search]);

  const columns = [
    {
      name: "Name",
      keyName: "name",
    },
    {
      name: "Address",
      keyName: "address",
    },
    {
      name: "Age",
      keyName: "age",
      render: (value) => diff_years(new Date(), value),
    },
  ];

  return (
    <>
      <h3>Users</h3>
      <div className="search">
        Search:
        <input
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Table
        columns={columns}
        sortDirectionISAsc={sort.isAsc}
        sortColumn={sort.column}
        dataSource={sortedUsers || []}
        onSortChange={(column, isAsc) => {
          setSort({ column, isAsc });
        }}
      />
    </>
  );
};

export default UserList;
