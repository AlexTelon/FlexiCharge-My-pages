import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
        fontSize: theme.flexiCharge.font.fontSize._main,
        marginBottom: theme.flexiCharge.margin.marginDistance,
    }
  })
);

export default useStyles;
