const Profile = (props: { name: string }) => {
    return (
        <h2 style={{color: 'white'}}>
            {props.name ? 'Hi ' + props.name : 'You are not logged in'}
        </h2>
    );
};

export default Profile;