// "use client";
import React from "react";
import DashboardBox from "../DashboardBox";
import BoxHeader from "../BoxHeader";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useGetProductsQuery } from "@/app/service/api";
import { Box, useTheme } from "@mui/material";

const ListOfProducts = () => {
  const { palette } = useTheme();
  const { data } = useGetProductsQuery();

  const productColumns = [
    {
      field: "id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${data?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
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
            columns={productColumns}
            rows={data || []}
          />
        </Box>
      </DashboardBox>
    </>
  );
};

export default ListOfProducts;
