import React, { ReactNode } from 'react';
import ReactTailwindTable, { Icolumn, Irow } from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css';

const tableStyling = {
  base_bg_color: 'bg-green-600',
  base_text_color: 'text-green-600',
  top: {
    // title:"text-red-700"
    elements: {
      // main: "bg-green-700",
      // search: "text-white",
      bulk_select: {
        // main:"bg-green-700 text-white",
        // button:"bg-yellow-700 text-black px-5 "
      },
      // export:"text-yellow-800"
    },
  },
  table_head: {
    // table_row: "bg-green-800 text-white",
    // table_data:"text-white"
  },
  table_body: {
    // main:"bg-red-600",
    // table_row:"text-yellow-900",
    // table_data: "text-base"
  },
  footer: {
    // main: "bg-yellow-700",
    statistics: {
      // main: "bg-white text-green-900",
      // bold_numbers:"text-yellow-800 font-thin"
    },
    // page_numbers:"bg-red-600 text-white"
  },
};
interface Props {
  cols: Icolumn[];
  rows: Irow[];
  table_header: string;
}
export default function Table(props: Props) {
  function rowcheck(row: any, column: any, display_text: string) {
    if (column.field === 'action') {
      return (
        <button className="border border-gray-100 p-2 bg-blue-500 text-white rounded-md">
          Save Player
        </button>
      );
    }
    return display_text;
  }
  return (
    <>
      <ReactTailwindTable
        columns={props.cols}
        rows={props.rows}
        per_page={30}
        table_header={props.table_header}
        // bulk_select_options={['Save', 'Delete', 'Update']}
        export_csv_file={props.table_header}
        // on_bulk_action={tableBulkClick}
        // should_export={true}
        // on_search={onSearch}
        show_search={true}
        // export_modify={exportModify}
        striped={true}
        bordered={true}
        hovered={true}
        styling={tableStyling}
        // row_render={rowcheck}
        // bulk_select_button_text="Apply"
      ></ReactTailwindTable>
    </>
  );
}
