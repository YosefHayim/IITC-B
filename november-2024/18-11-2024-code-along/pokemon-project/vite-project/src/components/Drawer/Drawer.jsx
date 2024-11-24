import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

export default function TemporaryDrawer({ setOpen, open }) {
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "black", // Set background to black
        color: "white", // Default text color to white
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: `Home`, path: "/" },
          { text: "About Us", path: "/about-us" },
          { text: "Contact Us", path: "/contact-us" },
          { text: "Pokedex", path: "/pokedex" },
          { text: "Custom Pokemon", path: "/createCustomPokemon" },
          { text: "Login", path: "/login" },
          { text: "Register", path: "/register" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                color: "white",
                fontFamily: "Oswald",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              <Divider />

              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}></Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
