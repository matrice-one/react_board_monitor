import { Box, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const StyledContainer = ({ title, bgColor, children, textColor, boxBackgroundColor, height}) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" height="100%" 
      sx={{
        backgroundColor: boxBackgroundColor,
        // Should be removed after
        height: height,
        borderRadius: '1em',
        boxShadow: 1,
        p: 2,
        mt: 2,
        border: '1px solid black',
      }}
    >
      <SectionTitle title={title} bgColor={bgColor} textColor={textColor}/>
      {/* <Box sx={{ mt: 3 }}> */}
      <Box sx={{ mt: 3, width: '100%', height: '100%' }}>
      {children}
      </Box>
      
    </Box>
  );
};

export default StyledContainer;
