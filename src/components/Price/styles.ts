import { withStyles } from "@utils/hooks";

export const useStyles = withStyles(({ theme }) => ({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  price: {
    color: theme.colors.orange
  }
}));
