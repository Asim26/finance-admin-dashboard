import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

createTheme('solarized', {
  text: {
    primary: '#ffffff',
  },
  background: {
    default: '#002b36',
  },
  divider: {
    default: '#073642',
  }  
});

const data = [
  {
    id: 1,
    name: "abc",
    title: "Conan the Barbarian",
    description: "avakhjkhkl",
    year: "1982",
  },
  {
    id: 2,
    name: "abc",
    title: "Conan the Barbarian",
    description: "avakhjkhkl",
    year: "1982",
  },
  {
    id: 3,
    name: "abc",
    title: "Conan the Barbarian",
    description: "avakhjkhkl",
    year: "1982",
  },
  {
    id: 4,
    name: "abc",
    title: "Conan the Barbarian",
    description: "avakhjkhkl",
    year: "1982",
  },
  {
    id: 5,
    name: "abc",
    title: "Conan the Barbarian",
    description: "avakhjkhkl",
    year: "1982",
  },
];
const columns = [
  {
    name: "ID",
    selector: "id",
    sortable: true,
    left: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
    left: true,
  },
  {
    name: "Title",
    selector: "title",
    sortable: true,
    left: true,
  },

  {
    name: "Description",
    selector: "description",
    sortable: true,
    left: true,
  },
  {
    name: "Year",
    selector: "year",
    sortable: true,
    left: true,
  },
];

function DataTableContainer() {
  return (
    <div>
      <DataTable title="Finance Admin" columns={columns} data={data} theme="solarized"/>
    </div>
  );
}

export default DataTableContainer;
