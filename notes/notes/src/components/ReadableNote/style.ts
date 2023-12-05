export const style = {
  readableNote: {
    width: 300,
    padding: "20px",
    paddingBottom: "40px",
    position: "relative",
    "&:hover .btns-box": {
      display: "flex",
    },
  },
  readableBtnsBox: {
    position: "absolute",
    left: 5,
    right: 5,
    display: "none",
    justifyContent: "space-between",
  },
  modalBox: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
  },
};
