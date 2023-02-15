
import Card from "@mui/material/Card";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "../components/ArgonBox";
import ArgonTypography from "../components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DataTable from "../DataTable";

// Data
import dataTableData from "./data/dataTableData";

function DataTables() {
  return (
      <ArgonBox pt={6} pb={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox p={3} lineHeight={1}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Datatable Simple
              </ArgonTypography>
              <ArgonTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </ArgonTypography>
            </ArgonBox>
            <DataTable table={dataTableData} />
          </Card>
        </ArgonBox>
        <Card>
          <ArgonBox p={3} lineHeight={1}>
            <ArgonTypography variant="h5" fontWeight="medium">
              Datatable Search
            </ArgonTypography>
            <ArgonTypography variant="button" fontWeight="regular" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </ArgonTypography>
          </ArgonBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
      </ArgonBox>
  );
}

export default DataTables;
