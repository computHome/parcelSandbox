  import "./styles.css";
import Tabulator from "tabulator-tables";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

 
//var Tabulator = require('tabulator-tables');
var tableData = [
  {
    id: 1,
    name: "Billy Bob",
    age: "12",
    gender: "male",
    height: 1,
    col: "red",
    dob: "",
    cheese: 1
  },
  {
    id: 2,
    name: "Mary May",
    age: "1",
    gender: "female",
    height: 2,
    col: "blue",
    dob: "14/05/1982",
    cheese: true
  }
];

var table = new Tabulator("#example-table", {
  data: tableData, //load row data from array
  layout: "fitColumns", //fit columns to width of table
  responsiveLayout: "hide", //hide columns that dont fit on the table
  tooltips: true, //show tool tips on cells
  addRowPos: "top", //when adding a new row, add it to the top of the table
  history: true, //allow undo and redo actions on the table
  pagination: "local", //paginate the data
  paginationSize: 7, //allow 7 rows per page of data
  movableColumns: true, //allow column order to be changed
  resizableRows: true, //allow row order to be changed
  initialSort: [
    //set the initial sort order of the data
    { column: "name", dir: "asc" }
  ],
  columns: [
    //define the table columns
    { title: "Name", field: "name", editor: "input" },
    {
      title: "Task Progress",
      field: "progress",
      align: "left",
      formatter: "progress",
      editor: true
    },
    {
      title: "Gender",
      field: "gender",
      width: 95,
      editor: "select",
      editorParams: { values: ["male", "female"] }
    },
    {
      title: "Rating",
      field: "rating",
      formatter: "star",
      align: "center",
      width: 100,
      editor: true
    },
    { title: "Color", field: "col", width: 130, editor: "input" },
    {
      title: "Date Of Birth",
      field: "dob",
      width: 130,
      sorter: "date",
      align: "center"
    },
    {
      title: "Driver",
      field: "car",
      width: 90,
      align: "center",
      formatter: "tickCross",
      sorter: "boolean",
      editor: true
    }
  ]
});

