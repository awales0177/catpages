import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Breadcrumbs,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableChartIcon from '@mui/icons-material/TableChart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ColumnsIcon from '@mui/icons-material/ViewColumn';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SchemaIcon from '@mui/icons-material/Schema';
import TableViewIcon from '@mui/icons-material/TableView';
import { styled } from '@mui/system';
import MapChart from './map.jsx';

const Header = styled(AppBar)({
  backgroundColor: 'white',
  color: '#333',
  boxShadow: 'none',
});

const MetadataSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '24px',
});

const App = () => {
  const dataset = {
    name: 'Ecommerce Fraud Transactions',
    description: 'Dataset containing details of e-commerce transactions labeled as fraudulent or legitimate.',
    owner: 'John Doe',
    tables: {
      Transactions: {
        id: '12345',
        s3Location: 's3://datasets/transactions',
        rows: 50000,
        columns: 10,
        size: '25MB',
        columnNames: ['Transaction ID', 'User ID', 'Product ID', 'Amount', 'Timestamp', 'Location', 'Fraudulent'],
      },
      Users: {
        id: '12346',
        s3Location: 's3://datasets/users',
        rows: 30000,
        columns: 8,
        size: '15MB',
        columnNames: ['User ID', 'Name', 'Email', 'Phone', 'Signup Date', 'Last Login'],
      },
      Products: {
        id: '12347',
        s3Location: 's3://datasets/products',
        rows: 20000,
        columns: 12,
        size: '10MB',
        columnNames: ['Product ID', 'Name', 'Category', 'Price', 'Stock Level'],
      },
    },
  };

  const [selectedTable, setSelectedTable] = useState('Transactions');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'white' }}>
      <Header position="static">
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            Dataset Metadata
          </Typography>
        </Toolbar>
      </Header>

      <Container maxWidth="lg">
        <MetadataSection>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {dataset.name}
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '16px' }}>
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/datasets">
                Datasets
              </Link>
              <Typography color="text.primary">{dataset.name}</Typography>
            </Breadcrumbs>
            <Typography variant="body1" color="text.secondary">
              {dataset.description}
            </Typography>
          </Box>
        </MetadataSection>

        <Box sx={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginBottom: '64px' }}>
          <Box sx={{ flex: 1.8, height: '400px' }}>
            <MapChart />
          </Box>
          <TableContainer sx={{ flex: 1, marginTop: '60px' }}>
            <Accordion sx={{ borderRadius: '8px', boxShadow: 'none', border: '1px solid #ddd', marginBottom: '16px' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                <Typography> Select Table</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: '200px', overflow: 'auto' }}>
                <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {Object.keys(dataset.tables).map((tableName, index) => (
                    <Chip
                      key={index}
                      label={tableName}
                      onClick={() => setSelectedTable(tableName)}
                      color={selectedTable === tableName ? 'primary' : 'default'}
                      clickable
                    />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TableViewIcon sx={{ marginRight: '8px', verticalAlign: 'middle', color: '#800000' }} />
                    <Typography component="strong" sx={{ color: '#4B4B4B' }}>
                      Table
                    </Typography>
                  </TableCell>
                  <TableCell>{selectedTable}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <VpnKeyIcon sx={{ marginRight: '8px', verticalAlign: 'middle', color: '#B8860B' }} />
                    <Typography component="strong" sx={{ color: '#4B4B4B' }}>
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell>{dataset.tables[selectedTable].id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CloudQueueIcon sx={{ marginRight: '8px', verticalAlign: 'middle', color: '#169dd3' }} />
                    <Typography component="strong" sx={{ color: '#4B4B4B' }}>
                      Location
                    </Typography>
                  </TableCell>
                  <TableCell>{dataset.tables[selectedTable].s3Location}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TableRowsIcon sx={{ marginRight: '8px', verticalAlign: 'middle', color: '#4B4B4B' }} />
                    <Typography component="strong" sx={{ color: '#4B4B4B' }}>
                      Rows
                    </Typography>
                  </TableCell>
                  <TableCell>{dataset.tables[selectedTable].rows}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <ColumnsIcon sx={{ marginRight: '8px', verticalAlign: 'middle', color: '#4B4B4B' }} />
                    <Typography component="strong" sx={{ color: '#4B4B4B' }}>
                      Columns
                    </Typography>
                  </TableCell>
                  <TableCell>{dataset.tables[selectedTable].columns}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Accordion sx={{ borderRadius: '8px', marginBottom: '16px', boxShadow: 'none', border: '1px solid #ddd' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
                        <Typography>
                          <SchemaIcon sx={{ marginRight: '8px', verticalAlign: 'middle', color: '#4B4B4B' }} />
                          Schema
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          {dataset.tables[selectedTable].columnNames.map((column, index) => (
                            <Chip
                              key={index}
                              label={column}
                              size="small"
                              sx={{
                                backgroundColor: '#ebebeb',
                                color: '#2e3b4e',
                                fontSize: '0.75rem',
                                borderRadius: '5px',
                              }}
                            />
                          ))}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Accordion sx={{ borderRadius: '8px', marginBottom: '16px', boxShadow: 'none', border: '1px solid #ddd' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
          <Typography>
            <DataObjectIcon
              sx={{
                marginRight: '8px',
                verticalAlign: 'middle',
                color: '#B8860B', // Dark mustard yellow for the icon
              }}
            />
            View Dataset JSON
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Paper
              sx={{
                padding: '16px',
                backgroundColor: '#2e3b4e',
                color: '#ffffff',
                borderRadius: '8px',
                maxHeight: '400px',
                overflow: 'auto',
              }}
            >
              <pre style={{ margin: 0, fontFamily: 'monospace', color: '#80cbc4' }}>
                {JSON.stringify(dataset, null, 2)}
              </pre>
            </Paper>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default App;
