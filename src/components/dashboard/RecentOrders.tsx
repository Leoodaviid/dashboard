// "use client";
import React from "react";
import DashboardBox from "../DashboardBox";
import BoxHeader from "../BoxHeader";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "@/service/api";
import { Box, useTheme } from "@mui/material";

const transactionColumns = [
  {
    field: "id",
    headerName: "id",
    flex: 0.1,
  },
  {
    field: "buyer",
    headerName: "Buyer",
    flex: 0.3,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 0.3,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
  {
    field: "productId",
    headerName: "productId",
    flex: 0.3,
    renderCell: (params: GridCellParams) => `${params.value}`,
  },
];

const RecentOrders = () => {
  const { palette } = useTheme();
  const { data } = useGetTransactionsQuery();
  return (
    <>
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Recent Orders"
          sideText={`${data?.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            columns={transactionColumns}
            rows={data || []}
          />
        </Box>
      </DashboardBox>
    </>
  );
};

export default RecentOrders;
