import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
        fontSize: theme.flexiCharge.font.h5.fontSize,
        marginBottom: theme.flexiCharge.margin.marginDistance,
    }
  })
);

export default useStyles;
