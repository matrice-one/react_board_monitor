import { Box, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const StyledContainer = ({ title, bgColor, children, textColor, boxBackgroundColor}) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" height="100%" 
      sx={{
        backgroundColor: boxBackgroundColor,
        borderRadius: '1em',
        boxShadow: 1,
        p: 2,
        mt: 2,
        border: '1px solid black',
      }}
    >
      <SectionTitle title={title} bgColor={bgColor} textColor={textColor}/>
      <Box sx={{ mt: 3 }}>
      {children}
      </Box>
      
    </Box>
  );
};

export default StyledContainer;
