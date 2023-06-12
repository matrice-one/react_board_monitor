import React from 'react';
import { Typography, Box } from '@mui/material';


const SectionTitle = ({ title, bgColor, textColor }) => {
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