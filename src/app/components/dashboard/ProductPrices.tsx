// "use client";
import React, { useMemo } from "react";
import DashboardBox from "../DashboardBox";
import { useTheme } from "@mui/material";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import BoxHeader from "../BoxHeader";
import { useGetProductsQuery } from "@/app/service/api";

const ProductPrices = () => {
  const { palette } = useTheme();
  const { data } = useGetProductsQuery();
  const productExpenseData = useMemo(() => {
    return (
      data &&
      data.map(({ id, price, expense }) => {
        return {
          id: id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [data]);
  return (
    <>
      <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -15,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />

            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default ProductPrices;
