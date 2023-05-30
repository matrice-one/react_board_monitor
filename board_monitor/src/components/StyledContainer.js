import { Box, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const StyledContainer = ({ title, bgColor, children, textColor}) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" height="100%"
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: '1em',
        boxShadow: 1,
        p: 2,
        mt: 2,
        border: '1px solid black',
      }}
    >
      <SectionTitle title={title} bgColor={bgColor} textColor={textColor}/>
      {children}
    </Box>
  );
};

export default StyledContainer;
