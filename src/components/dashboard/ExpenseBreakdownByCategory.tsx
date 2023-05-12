// "use client";
import React, { useMemo } from "react";
import DashboardBox from "../DashboardBox";
import BoxHeader from "../BoxHeader";
import FlexBetween from "../FlexBetween";
import { PieChart, Pie, Cell } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/service/api";
import { ExpensesByCategory } from "@/models/models";

const ExpenseBreakdownByCategory = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];
  const { data: kpiData } = useGetKpisQuery();

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      const dataExpenses = kpiData[0]
        .expensesByCategory as unknown as Array<ExpensesByCategory>;

      const salariesData = {
        name: "Salaries",
        value: parseFloat(
          (
            dataExpenses.find(
              (expense) => expense.salaries
            ) as ExpensesByCategory
          )?.salaries.toString()
        ),
      };
      const suppliesData = {
        name: "Supplies",
        value: parseFloat(
          (
            dataExpenses.find(
              (expense) => expense.supplies
            ) as ExpensesByCategory
          )?.supplies.toString()
        ),
      };

      const servicesData = {
        name: "Services",
        value: parseFloat(
          (
            dataExpenses.find(
              (expense) => expense.services
            ) as ExpensesByCategory
          )?.services?.toString() ?? "0"
        ),
      };

      const salaries = salariesData.value;
      const supplies = suppliesData.value;
      const services = servicesData.value;

      return [
        { name: salariesData.name, value: totalExpenses - salaries },
        { name: suppliesData.name, value: totalExpenses - supplies },
        { name: servicesData.name, value: totalExpenses - services },
      ];
    }
    return [];
  }, [kpiData]);

  return (
    <>
      <DashboardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => {
            const dataArray = [data];

            return (
              <Box key={`${data.name}-${i}`}>
                <PieChart width={110} height={75}>
                  <Pie
                    stroke="none"
                    data={pieChartData}
                    innerRadius={18}
                    outerRadius={35}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={pieColors[index % pieColors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <Typography variant="h5">{data.name}</Typography>
              </Box>
            );
          })}
        </FlexBetween>
      </DashboardBox>
    </>
  );
};

export default ExpenseBreakdownByCategory;
