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
  LinearProgress,
} from '@mui/material';
import { styled } from '@mui/system';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Code, History as HistoryIcon, HelpOutline, Group, Cloud, DataUsage, Factory, ShoppingCart } from '@mui/icons-material';
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

const determineHealthColor = (current, latest) => {
  const ratio = current / latest;
  if (ratio == 1) return 'green';
  if (ratio > 0.8) return '#d4aa00';
  return 'red';
};

const DataContractsPage = () => {
  const currentVersion = 1.4; // Example current version
  const latestVersion = 3.5; // Example latest version
  const versionsBehind = parseFloat((latestVersion - currentVersion).toFixed(2));
  const healthColor = determineHealthColor(currentVersion, latestVersion);

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
          CLE-FARMAI
        </Typography>

        {/* Breadcrumbs */}
        <Box sx={{ marginBottom: '16px' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Data Contracts
            </Link>
            <Typography color="text.primary">AWS-FARMAI</Typography>
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

          {/* Chips and Progress Bar */}
          <Box sx={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Chip icon={<HistoryIcon />} label="Product Version 1.0.0" variant="outlined" />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#ddd',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: `${(currentVersion / latestVersion) * 100}%`,
                    height: '100%',
                    backgroundColor: healthColor,
                  }}
                />
              </Box>
              <Typography variant="caption" color="text.secondary">
                {versionsBehind > 0 ? `${versionsBehind} versions behind` : 'Up-to-date'}
              </Typography>
            </Box>
          </Box>
        </MetadataSection>

        {/* Contract Details */}
        <Typography variant="body1" paragraph>
          Data contracts define the schema, expectations, and terms between the data provider and the data customer. They ensure consistency, validation, and governance for reliable data operations.
        </Typography>

        {/* Divider */}
        <Box sx={{ paddingBottom: '20px' }}>
          <Divider sx={{ borderColor: '#ddd' }} />
        </Box>

        {/* Roles and Responsibilities */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Roles and Responsibilities
          </Typography>
          <StyledChip
            icon={<DisplaySettingsIcon style={{ color: '#4CAF50' }} />}
            label="Downstream Application"
            clickable
            variant="outlined"
          />
        </Box>

        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Factory sx={{ color: '#333' }} />
                    <Typography component="span">Data Provider</Typography>
                    <Tooltip title="Responsible for supplying accurate and validated data, ensuring compliance with agreed standards, and managing data delivery schedules.">
                      <IconButton size="small" color="inherit">
                        <HelpOutline fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell>Infinity Farms, Toothman Farm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <DataUsage sx={{ color: '#333' }} />
                    <Typography component="span">Data Aggregator</Typography>
                    <Tooltip title="Responsible for collecting data from multiple sources, harmonizing it, and making it accessible for downstream analysis and operations.">
                      <IconButton size="small" color="inherit">
                        <HelpOutline fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
                <TableCell>Farm ETL</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShoppingCart sx={{ color: '#333' }} />
                    <Typography component="span">Data Customer</Typography>
                    <Tooltip title="Ensures proper usage of the data as per the contract, validates data integrity upon receipt, and provides feedback for improvements if necessary.">
                      <IconButton size="small" color="inherit">
                        <HelpOutline fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
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
