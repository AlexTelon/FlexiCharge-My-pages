import useStyles from "../components/styles/titleStyles";

const Title = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
        <h2>{props.text}</h2>
    </div>
  );
};

export default Title;
