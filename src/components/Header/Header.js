import { Button, IconButton, Drawer, Link, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./header.css";

const headersData = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About Me",
    href: "/about-us",
  },
  {
    label: "Demos",
    href: "/demos",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <div className="toolBar">
        <Logo />
        <div>{getMenuButtons()}</div>
      </div>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <div className="mobileView">
        <Logo />

        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="container">{getDrawerChoices()}</div>
        </Drawer>
      </div>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          style={{
            color: href === window.location.pathname ? "#C372E5" : "#888888",
            borderBottom:
              href === window.location.pathname ? "1px solid #C372E5" : "none",
          }}
          to={href}
          component={RouterLink}
          className={"menuButton"}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <div className="header">
      {mobileView ? displayMobile() : displayDesktop()}
    </div>
  );
}
