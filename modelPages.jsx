import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  TextField,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Breadcrumbs,
  Link
} from '@mui/material';
import { styled } from '@mui/system';
import {
  AccountCircle,
  Assignment,
  CheckCircle,
  Timer,
  Description,
  GitHub,
  Code,
  ThumbUp,
  ThumbDown,
  Visibility,
  Home as HomeIcon
} from '@mui/icons-material';

import HistoryIcon from '@mui/icons-material/History';

const Content = styled(Box)({
  flexGrow: 1,
  padding: '24px',
  backgroundColor: '#fff',
});

const Header = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#333',
  boxShadow: 'none',
  borderBottom: '1px solid #ddd',
});

const MetadataSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
});

const SplitContainer = styled(Box)({
  display: 'flex',
  gap: '32px',
  marginTop: '24px',
});

const SidePanel = styled(Box)({
  flex: '0 0 300px',
  padding: '16px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
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

const App = () => {
  // State variables
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [viewed, setViewed] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

  const handleUpvote = () => {
    if (downvoted) setDownvoted(false); // Ensure downvote is removed if upvoted
    setUpvoted(!upvoted);
    setAlert({
      open: true,
      message: upvoted ? 'Upvote removed' : 'Upvoted successfully!',
      severity: upvoted ? 'info' : 'success',
    });
  };

  const handleDownvote = () => {
    if (upvoted) setUpvoted(false); // Ensure upvote is removed if downvoted
    setDownvoted(!downvoted);
    setAlert({
      open: true,
      message: downvoted ? 'Downvote removed' : 'Downvoted successfully!',
      severity: downvoted ? 'info' : 'error',
    });
  };

  const handleView = () => {
    setViewed(!viewed);
    setAlert({
      open: true,
      message: viewed ? 'Marked as not viewed' : 'Marked as viewed',
      severity: viewed ? 'info' : 'success',
    });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header position="static">
        <Toolbar>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            sx={{
              width: '300px',
              borderRadius: '30px',
              backgroundColor: '#fff',
              marginLeft: 'auto',
            }}
          />
        </Toolbar>
      </Header>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Fraud Detection Ecommerce Transaction
        </Typography>

        {/* Breadcrumbs */}
        <Box sx={{marginBottom: '16px' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
            Home
            </Link>
            <Link underline="hover" color="inherit" href="/fraud-detection">
              Fraud Detection
            </Link>
            <Typography color="text.primary">Ecommerce Transaction</Typography>
          </Breadcrumbs>
        </Box>

        {/* Metadata Section */}
        <MetadataSection>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Avatar alt="Profile Avatar" src="/placeholder-avatar.png" />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                FDET
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Silver
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Tooltip title="Upvote">
                <IconButton
                  aria-label="upvote"
                  onClick={handleUpvote}
                  style={{ color: upvoted ? '#4CAF50' : '#E0E0E0' }}
                >
                  <ThumbUp />
                </IconButton>
              </Tooltip>
              <Tooltip title="Downvote">
                <IconButton
                  aria-label="downvote"
                  onClick={handleDownvote}
                  style={{ color: downvoted ? '#F44336' : '#E0E0E0' }}
                >
                  <ThumbDown />
                </IconButton>
              </Tooltip>
              <Tooltip title="Click to mark as viewed">
                <IconButton
                  aria-label="view"
                  onClick={handleView}
                  style={{ color: viewed ? '#4CAF50' : '#E0E0E0' }}
                >
                  <Visibility />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Chip icon={<HistoryIcon />} label="Latest Version 2.1.4" variant="outlined" />
        </MetadataSection>

        {/* Split Content */}
        <SplitContainer>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" paragraph>
              This notebook implements a comprehensive fraud detection system for e-commerce transactions. It incorporates advanced feature engineering, class imbalance handling, and model training, including ensemble methods to improve prediction accuracy.
            </Typography>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Data Governance
            </Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <AccountCircle />
                        Data Owner
                      </Box>
                    </TableCell>
                    <TableCell>
                      Owns the data and has the ultimate responsibility for its use and protection.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Assignment />
                        Data Steward
                      </Box>
                    </TableCell>
                    <TableCell>
                      Responsible for the management and oversight of the data's lifecycle and quality.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle />
                        Data Provider
                      </Box>
                    </TableCell>
                    <TableCell>
                      Provides the data and ensures its accuracy and compliance.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Side Panel */}
          <SidePanel>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Production Versions
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <Chip label="Version 2.1.4" variant="outlined" />
              <Chip label="Production 2.1.3" variant="outlined" />
              <Chip label="Production 2.1.2" variant="outlined" />
            </Box>

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <StyledChip
                icon={<Description style={{ color: '#3F51B5' }} />}
                label="Docs"
                clickable
                variant="outlined"
              />
              <StyledChip
                icon={<GitHub style={{ color: '#333' }} />}
                label="Repo"
                clickable
                variant="outlined"
              />
              <StyledChip
                icon={<Code style={{ color: '#FF0000' }} />}
                label="Condition Code"
                clickable
                variant="outlined"
              />
              <StyledChip
                icon={<CheckCircle style={{ color: '#4CAF50' }} />}
                label="Validation Code"
                clickable
                variant="outlined"
              />
            </Box>
          </SidePanel>
        </SplitContainer>
      </Container>

      {/* Snackbar for Alerts */}
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
