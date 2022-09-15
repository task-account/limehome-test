import { withStyles } from "@utils/hooks";

export const useStyles = withStyles(({ theme }) => ({
  container: {
    flexDirection: "row",
    backgroundColor: theme.colors.backgroundLight,
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    borderRadius: theme.radius.s
  },
  imageWrapper: {
    flex: 0.4
  },
  image: {
    flex: 1
  },
  rightBlock: {
    flex: 0.6,
    padding: theme.spacing.m
  },
  name: {
    fontSize: theme.font.size.l,
    fontFamily: theme.font.family.gothic,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  price: {
    color: theme.colors.orange
  }
}));
