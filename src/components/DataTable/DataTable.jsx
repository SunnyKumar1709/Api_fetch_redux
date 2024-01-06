// Dependencies

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../redux/reducers/dataSlice";
import "./dataTable.css";

// Defining the table component
export default function DataTable() {
  // Define columns Header
  const columns = [
    { id: "userId", name: "UserId" },
    { id: "id", name: "Id" },
    { id: "title", name: "Title" },
    { id: "component", name: "Component" },
  ];

  // create hooks (useState) for manage page.
  const [page, pageChange] = useState(0);
  const [rowsPerPage, rowperpageChange] = useState(5);

  // create function hadlechangepage to handle page change events.
  const handleChangePage = (event, newPage) => {
    pageChange(newPage);
  };

  // create function handleChangeRowsPerPage to handle number of rows per page change event.
  const handleChangeRowsPerPage = (event) => {
    rowperpageChange(parseInt(event.target.value, 10));
    pageChange(0);
  };

  // define redux to manage state and fetching data from api using fetch data function.
  const dispatch = useDispatch();

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url);
    const jsonRes = await res.json();
    dispatch(dataActions.setData(jsonRes));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // retrieving data from the redux store.
  const dataToPopulate = useSelector((state) => state.dataReducer.data);

  // Utilize the material-ui components to construct the layout of the table.
  return (
    <div>
      <h1 id="table_1">Table</h1>
      <Paper className="paper">
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map(function (col) {
                  return (
                    <TableCell id="table_h" key={col.id}>
                      {col.name}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataToPopulate
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.userId}</TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.component ? "True" : "False"}</TableCell>
                    {/* Add more cells based on your API response */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Adding pagination using material-ui  */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dataToPopulate.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
