import React from "react";
import Registration from "../services/register";
var ReactBsTable = require("react-bootstrap-table");
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { parameters: [] };
  }

  async componentDidMount() {
    try {
      const result = await new Registration().getUsers();

      console.log('componentDidMount ------------', result);

      this.state.parameters = result;
    } catch (error) {
      throw error;
    }
   
  }

  render() {
    return (
      <div>
        <h2>Parameters</h2>
        <BootstrapTable data={this.state.parameters}>
          <TableHeaderColumn isKey dataField="id">
            ID
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField="category"
            filterFormatted
            filter={{ type: "SelectFilter" }}
          >
            Category
          </TableHeaderColumn>

          <TableHeaderColumn dataField="subCategory">
            Sub Category
          </TableHeaderColumn>

          <TableHeaderColumn dataField="parameter">Parameter</TableHeaderColumn>

          <TableHeaderColumn
            dataField="type"
            filterFormatted
            filter={{ type: "SelectFilter" }}
          >
            Type
          </TableHeaderColumn>

          <TableHeaderColumn dataField="roles">Roles</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
