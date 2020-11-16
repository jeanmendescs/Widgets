import React, { useState } from "react";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import { items } from "./items";

const routes = [
  {
    component: <Accordion items={items} />,
    path: "/",
  },
  {
    component: <Search />,
    path: "/list",
  },
  {
    component: <Translate />,
    path: "/translate",
  },
];

export default routes;
