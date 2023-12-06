import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  addNote,
  editNote,
  deleteNote,
  saveFilterValue,
  initNotes,
} from "shared/store/slice";

const actions = {
  addNote,
  editNote,
  deleteNote,
  saveFilterValue,
  initNotes,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
