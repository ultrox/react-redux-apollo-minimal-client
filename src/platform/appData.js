import React from "react";

import Home from "@material-ui/icons/Home";
import ListCheck from "@material-ui/icons/PlaylistAddCheck";
import Announcement from "@material-ui/icons/Announcement";

const navRoutes = [
  {
    name: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Ideas",
    path: "/ideas",
    icon: <ListCheck />,
  },
  {
    name: "Timers",
    path: "/timers",
    icon: <ListCheck />,
  },
  {
    name: "404",
    path: "/foo-bar-baz",
    icon: <Announcement />,
  },
];

export { navRoutes };
