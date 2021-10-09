import useMediaQuery from "@mui/material/useMediaQuery";

const Mobile = () => {
	const matches = useMediaQuery("(min-width:500px)");
	return matches;
};

export default Mobile;
