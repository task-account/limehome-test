import { withStyles } from "@utils/hooks";

export const useStyles = withStyles(({ theme, insets }) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  content: {
    paddingTop: theme.spacing.m,
    paddingHorizontal: theme.spacing.m
  },
  input: {
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.l
  },
  listFooter: {
    marginBottom: insets.bottom * 4.5 || theme.spacing.xl * 5
  },
  separator: {
    marginVertical: theme.spacing.s
  },
  emptyComponent: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  placeholder: {
    color: theme.colors.white,
    fontSize: theme.font.size.xl,
    fontFamily: theme.font.family.gothic
  }
}));
