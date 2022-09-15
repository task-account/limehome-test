import { withStyles } from "@utils/hooks";

export const useStyles = withStyles(({ theme }) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.font.family.gothic,
    fontSize: theme.font.size.xl
  }
}));
