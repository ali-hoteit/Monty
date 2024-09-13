// src/components/Header/Header.jsx
import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, Input, ToolbarStyled } from './Style';  // Import styled components

const Header = () => {
    return (
        <AppBar position="static">
            <ToolbarStyled>
                <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Map App For traffic
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Explore
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <Input placeholder="Search ...." />
                    </Search>
                </Box>
            </ToolbarStyled>
        </AppBar>
    );
}

export default Header;
