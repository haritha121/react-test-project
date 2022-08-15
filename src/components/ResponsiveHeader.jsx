import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerComponent from "./DrawerComponent";
const PAGES = ["Products", "Services", "ContactUs", "AboutUs"];
const ResponsiveHeader = () => {
  const [tabValue, setTabValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {/* sx helps to add inline styles */}
      <AppBar sx={{ backgroundColor: "#063970" }}>
        <Toolbar>
          <ShoppingCartIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                HAC Shopping
              </Typography>
              <DrawerComponent></DrawerComponent>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={tabValue}
                onChange={(e, value) => setTabValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page}></Tab>
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
          {/* IndicatorColor is used to see to indicate the opened tab*/}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default ResponsiveHeader;
