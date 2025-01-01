import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  Chip,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  IconButton,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Code, History as HistoryIcon, HelpOutline } from '@mui/icons-material';
import FlowChart from './FlowChart';

// Styling for the Header and Metadata
const Header = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#333',
  boxShadow: 'none',
  borderBottom: '1px solid #ddd',
});

const MetadataSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between', // Align metadata to left and chips to right
  alignItems: 'center',
  marginBottom: '24px',
});

const StyledChip = styled(Chip)({
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 'bold',
  padding: '4px 8px',
  justifyContent: 'flex-start',
  gap: '4px',
  height: '28px',
  '.MuiChip-icon': {
    fontSize: '16px',
  },
});

const DataContractsPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Data Contracts
          </Typography>
        </Toolbar>
      </Header>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Data Contracts
        </Typography>

        {/* Breadcrumbs */}
        <Box sx={{ marginBottom: '16px' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Data Contracts</Typography>
          </Breadcrumbs>
        </Box>

        {/* Metadata Section */}
        <MetadataSection>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Avatar alt="Contract Avatar" src="/placeholder-avatar.png" />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                Contracts Info
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Overview
              </Typography>
            </Box>
          </Box>

          {/* Chips aligned to the right and next to each other */}
          <Box sx={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
            <Chip icon={<HistoryIcon />} label="Version 1.0.0" variant="outlined" />
            <StyledChip
              icon={<DisplaySettingsIcon style={{ color: '#4CAF50' }} />}
              label="Downstream Application"
              clickable
              variant="outlined"
            />
          </Box>
        </MetadataSection>

        {/* Contract Details */}
        <Typography variant="body1" paragraph>
          Data contracts define the schema, expectations, and terms between the data provider and the data customer. They ensure consistency, validation, and governance for reliable data operations.
        </Typography>

        {/* Divider */}
        <Box sx={{ paddingBottom: '20px' }}>
          <Divider sx={{ borderColor: '#ddd'}} />
        </Box>

        {/* Roles and Responsibilities */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Roles and Responsibilities
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  Data Provider
                  <Tooltip title="Responsible for supplying accurate and validated data, ensuring compliance with agreed standards, and managing data delivery schedules.">
                    <IconButton size="small" color="inherit">
                      <HelpOutline fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>Infinity Farms, Toothman Farm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Data Aggregator
                  <Tooltip title="Responsible for collecting data from multiple sources, harmonizing it, and making it accessible for downstream analysis and operations.">
                    <IconButton size="small" color="inherit">
                      <HelpOutline fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>Farm ETL</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Data Customer
                  <Tooltip title="Ensures proper usage of the data as per the contract, validates data integrity upon receipt, and provides feedback for improvements if necessary.">
                    <IconButton size="small" color="inherit">
                      <HelpOutline fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>Farming AI</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ marginBottom: '50px' }}></Box>

        {/* FlowChart */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Data Flow Diagram
        </Typography>
        <Box sx={{ marginBottom: '50px' }}>
          <FlowChart />
        </Box>
      </Container>
    </Box>
  );
};

export default DataContractsPage;
