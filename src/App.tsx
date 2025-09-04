import { useState } from 'react';
import { Box, Button,  CssBaseline, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainInterface from './components/MainInterface';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB800',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 16px',
          fontSize: '14px',
          fontWeight: 500,
        },
        outlined: {
          borderColor: '#e0e0e0',
          color: '#666666',
          '&:hover': {
            borderColor: '#d0d0d0',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: '#FFB800',
          color: '#000',
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#e5a600',
          },
        },
      },
    },
  },
});

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Who", "What/Why", "Where", "When"];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Left Sidebar */}
        <Box sx={{
          width: '64px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e9ecef',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 3,
          gap: 1
        }}>
          {/* Top Yellow Diamond Icon */}
          <Box sx={{ 
            width: 32, 
            height: 32, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2
          }}>
            <Box sx={{
              width: 16,
              height: 16,
              backgroundColor: '#FFB800',
              transform: 'rotate(45deg)',
              borderRadius: '2px'
            }} />
          </Box>

          {/* Profile Picture */}
          <Box sx={{ 
            width: 40, 
            height: 40, 
            backgroundColor: '#FFB800', 
            borderRadius: '50%',
            border: '1px solid #e9ecef',
            mb: 3
          }}>
          </Box>
          
          {/* Navigation Icons */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'center' }}>
            {/* Home Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFB800',
              fontSize: '18px'
            }}>
              🏠
            </Box>

            {/* Rocket Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9ca3af',
              fontSize: '18px'
            }}>
              🚀
            </Box>

            {/* Document/List Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9ca3af',
              fontSize: '18px'
            }}>
              �
            </Box>

            {/* People Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9ca3af',
              fontSize: '18px'
            }}>
              �
            </Box>

            {/* Clock/Time Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9ca3af',
              fontSize: '18px'
            }}>
              ⏰
            </Box>

            {/* Email Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9ca3af',
              fontSize: '18px'
            }}>
              ✉️
            </Box>
          </Box>

          {/* Bottom Icons with spacing */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1.5, 
            alignItems: 'center',
            mt: 'auto',
            mb: 2
          }}>
            {/* Settings Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9ca3af',
              fontSize: '18px'
            }}>
              ⚙️
            </Box>

            {/* Exit/Logout Icon */}
            <Box sx={{ 
              width: 24, 
              height: 24, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#9ca3af',
              fontSize: '18px'
            }}>
              🚪
            </Box>
          </Box>
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          {/* Top Header */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3,
            py: 2,
            borderBottom: '1px solid #e9ecef'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Back Arrow */}
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#666666'
              }}>
                ←
              </Box>
              <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#1a1a1a' }}>
                Untitled List
              </Typography>
              {/* Edit Icon */}
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#666666',
                fontSize: '14px'
              }}>
                ✏️
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="outlined">
                Save
              </Button>
              <Button variant="contained">
                Make Campaign
              </Button>
            </Box>
          </Box>

          {/* Progress Bar and Navigation */}
          <Box sx={{ px: 3, py: 2 }}>
            {/* Progress Bar */}
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              mb: 2,
              alignItems: 'center'
            }}>
              {steps.map((_, index) => (
                <Box
                  key={`progress-${index}`}
                  sx={{
                    height: 4,
                    width: 80,
                    backgroundColor: index <= activeStep ? '#FFB800' : '#e9ecef',
                    borderRadius: 2,
                  }}
                />
              ))}
            </Box>

            {/* Navigation Tabs */}
            <Box sx={{ display: 'flex', gap: 0 }}>
              {steps.map((step, index) => (
                <Box
                  key={step}
                  onClick={() => setActiveStep(index)}
                  sx={{
                    width: 80,
                    color: index === activeStep ? '#FFB800' : '#999999',
                    cursor: 'pointer',
                    fontWeight: index === activeStep ? 600 : 400,
                    fontSize: '14px',
                    textAlign: 'left',
                    mr: index < steps.length - 1 ? 1 : 0,
                  }}
                >
                  {step}
                </Box>
              ))}
            </Box>
          </Box>

          <MainInterface />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
