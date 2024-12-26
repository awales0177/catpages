import React from 'react';
import { AppBar, Toolbar, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Button, TextField, Avatar, Chip, Link, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { AccountCircle, Assignment, CheckCircle, Timer, FolderOpen, Description, GitHub, Code } from '@mui/icons-material';

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

const StyledButton = styled(Button)({
  borderRadius: '20px',
  textTransform: 'none',
  padding: '8px 16px',
  fontSize: '14px',
  fontWeight: 'bold',
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
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
});

const DataContractCard = ({ title, description }) => (
  <Card sx={{ maxWidth: 345, margin: '16px' }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const App = () => {
  const dataContracts = [
    { title: 'Fraud Prevention Contract', description: 'Defines terms for fraud detection in e-commerce transactions.' },
    { title: 'Data Validation Contract', description: 'Specifies validation rules for incoming data streams.' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
              marginLeft: 'auto'
            }}
          />
        </Toolbar>
      </Header>

      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Fraud Detection Ecommerce Transaction
        </Typography>

        <MetadataSection>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Avatar alt=" " src="/placeholder-avatar.png" />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                FDET
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Silver
              </Typography>
            </Box>
          </Box>
          <Chip icon={<Timer />} label="Latest Version 2.1.4" variant="outlined" />
        </MetadataSection>

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
                <TableHead>
                  <TableRow>
                    <TableCell><Typography variant="subtitle1" fontWeight="bold">Role</Typography></TableCell>
                    <TableCell><Typography variant="subtitle1" fontWeight="bold">Description</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <AccountCircle />
                        Data Owner
                      </Box>
                    </TableCell>
                    <TableCell>Owns the data and has the ultimate responsibility for its use and protection.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Assignment />
                        Data Steward
                      </Box>
                    </TableCell>
                    <TableCell>Responsible for the management and oversight of the data's lifecycle and quality.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle />
                        Data Provider
                      </Box>
                    </TableCell>
                    <TableCell>Provides the data and ensures its accuracy and compliance.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <SidePanel>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Versions in Production
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <Chip label="Version 2.1.4" color="primary" />
              <Chip label="Production 2.1.3" variant="outlined" />
              <Chip label="Production 2.1.2" variant="outlined" />
            </Box>

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <Chip label="Fraud" />
              <Chip label="Ecommerce" />
              <Chip label="Machine Learning" />
              <Chip label="Python" />
            </Box>

            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ marginTop: '16px' }}>
              Documentation
            </Typography>
            <Box>
              <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Description /> Model Documentation
              </Link>
              <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <GitHub /> GitHub Repository
              </Link>
              <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'  }}>
                <Code /> Condition Code
              </Link>
              <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle /> Validation Code
              </Link>
            </Box>
          </SidePanel>
        </SplitContainer>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ marginTop: '32px' }}>
          Data Contracts
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', gap: '16px', marginBottom: '32px' }}>
          {dataContracts.map((contract, index) => (
            <DataContractCard key={index} title={contract.title} description={contract.description} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default App;
