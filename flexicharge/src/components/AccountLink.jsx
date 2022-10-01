const AccountLink = (props) => {
  return (
    <div className={props.classes.checkAccount}>
      <div className={props.classes.haveAccount}>Already have an account?</div>
      <div className={props.classes.signIn}>Sign in</div>
    </div>
  );
};

export default AccountLink;
