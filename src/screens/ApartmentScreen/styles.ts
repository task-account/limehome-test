import { withStyles } from "@utils/hooks";

export const useStyles = withStyles(({ theme, insets, width, height }) => ({
  content: {
    flex: 1
  },
  imageWrapper: {
    width: "100%",
    height: height * 0.3
  },
  closeWrapper: {
    position: "absolute",
    zIndex: 1,
    left: theme.spacing.l,
    top: insets.top + theme.spacing.m,
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: theme.radius.s
  },
  image: {
    width
  },
  info: {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight,
    paddingTop: theme.spacing.l,
    paddingHorizontal: theme.spacing.m
  },
  title: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  name: {
    flex: 0.7,
    fontFamily: theme.font.family.gothic,
    fontSize: theme.font.size.xl
  },
  bedroomHeader: {
    fontSize: theme.font.size.l,
    fontWeight: "500"
  },
  bedroomSuite: {
    padding: theme.spacing.s,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.s,
    margin: theme.spacing.xs
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    paddingBottom: insets.bottom || theme.spacing.s,
    backgroundColor: theme.colors.primary
  },
  button: {
    flex: 0.5,
    height: 40,
    borderRadius: theme.radius.s,
    paddingHorizontal: theme.spacing.m,
    backgroundColor: theme.colors.backgroundDark
  },
  buttonText: {
    color: theme.colors.white
  }
}));
