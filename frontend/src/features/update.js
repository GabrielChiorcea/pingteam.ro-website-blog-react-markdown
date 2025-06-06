import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: [],
  services: [],
  members: [],
  blog: [],
  categories: [],
  servicesField: []
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHome: (state, action) => {
      state.home = action.payload;
    },
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    servicesField: (state, action) => {
      state.servicesField = action.payload
    }
  },
});

export const { setHome, setServices, setMembers, setBlog, setCategories, servicesField } = dataSlice.actions;
export default dataSlice.reducer;
