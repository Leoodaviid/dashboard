"use client";
import { Box, useMediaQuery } from "@mui/material";
import {
  RevenueAndExpenses,
  ProfitAndRevenue,
  RevenueMonthByMonth,
  Operational,
  CampaignsAndTargets,
  ProductPrices,
  ListOfProducts,
  RecentOrders,
  ExpenseBreakdownByCategory,
  OverallSummary,
} from "./components/dashboard/index";

const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`;

const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;

export default function Dashboard() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <main className="app">
      <Box
        width="100%"
        height="100%"
        display="grid"
        gap="1.5rem"
        sx={
          isAboveMediumScreens
            ? {
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(110, minmax(60px, 1fr))",
                gridTemplateAreas: gridTemplateLargeScreens,
              }
            : {
                gridAutoColumns: "1fr",
                gridAutoRows: "80px",
                gridTemplateAreas: gridTemplateSmallScreens,
              }
        }
      >
        <RevenueAndExpenses />
        <ProfitAndRevenue />
        <RevenueMonthByMonth />
        <Operational />
        <CampaignsAndTargets />
        <ProductPrices />
        <ListOfProducts />
        <RecentOrders />
        <ExpenseBreakdownByCategory />
        <OverallSummary />
      </Box>
    </main>
  );
}
