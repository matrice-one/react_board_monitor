import React from 'react';
import NavBar from './Header';
import SectionTitle from './SectionTitle';
import { Grid, Box, Typography } from '@mui/material';
import StyledContainer from './StyledContainer';

const AboutUs = () => {
    return (
        <div>
            <NavBar/>
            <Box sx={{ px: 10, pt:5 }}>
            <Typography variant='h1' display="inline" sx={{ fontWeight: 'bold' }}>
            About This Project
            </Typography>
            <Box sx={{ px: 10, pt:5 }}>
            <Typography sx={{textAlign: 'justify'}} variant='p' paragraph align='left'>
            Born from the creative mind of an independent developer based in Geneva, the Board Visualizer Tool came into existence in 2023. This initiative stemmed from a passion for data visualization and a mission to illuminate the complex web of corporate connections hidden beneath the surface.
            <br /><br />
            <b>The Data We Use </b>
            <br />
            The backbone of this tool is an extensive dataset encompassing all registered companies and their board members within the Geneva canton up until May 2022. This information is publicly available and has been painstakingly compiled to provide insightful visuals. The data has not been updated since then, but we're open to implementing a regular update schedule based on the community's needs.
            <br /><br />

            <b>The Technology We Employ </b>
            <br />
            To turn the vision into reality, we leveraged a range of cutting-edge technologies, which include:

            The Django Rest Framework for the backend
            React + MUI for a responsive and visually appealing front-end
            D3 for intuitive and engaging visualizations
            Digital Ocean for secure and reliable hosting of our virtual machine and PostgreSQL database
            Infomaniak for domain name registration
            <br /><br />
            <b>About Me </b>
            <br />
            I embarked on this journey with a set of personal objectives in mind:
            Creating tools that could provide value to the community and potentially serve as a springboard for innovative side hustles
            Gaining hands-on experience and learning through practical application
            Acquiring the skills to bring new ideas to life within a three-month timeframe
            Exploring the capabilities of ChatGPT for my personal and professional advancement
            <br /><br />
            If this project piques your interest, or if you find my profile intriguing, I'd love to hear from you! Let's explore how we can unravel the mysteries of corporate connections together.
            <br /><br /><br />
            <i>-Matrice One </i>
            </Typography>
            </Box>
            </Box>
        </div>

    )


}

export default AboutUs;