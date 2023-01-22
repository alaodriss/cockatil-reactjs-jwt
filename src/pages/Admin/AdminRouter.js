import React from "react";

import { Routes, Route } from "react-router-dom";

import { ALayout, Dashboard } from "../Admin";
import { User, UserAdd, UserEdit } from "../Admin/User";
import { Cocktail, CocktailEdit } from "../Admin/Cocktail";

import Error from "../../_utils/Error";

const AdminRouter = () => {
  return (
    <div className="adminrouter">
      <Routes>
        {/* Route Nested et ALayout Admin */}

        <Route element={<ALayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user">
            <Route path="index" element={<User />} />
            <Route path="edit/:uid" element={<UserEdit />} />
            <Route path="add" element={<UserAdd />} />
          </Route>
          <Route path="cocktail">
            <Route path="index" element={<Cocktail />} />
            <Route path="edit" element={<CocktailEdit />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
