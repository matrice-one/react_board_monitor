import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const SectionTitle = ({ title, bgColor, textColor }) => {
    const theme = useTheme();
    console.log(textColor)
    return (
    <Box bgcolor={bgColor} p={1} borderRadius={2} display="flex" alignItems="flex-start">
        <Typography variant='h3' display="inline"  color={textColor} sx={{ fontWeight: 'bold' }}>
            {title}
        </Typography>
    </Box>
);
    };

export default SectionTitle