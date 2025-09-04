import { Box, TextField, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  boxShadow: 'none',
  border: '1px solid #e0e0e0',
}));

const NavItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

const TargetingForm = () => {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      {/* Left Navigation */}
      <Box sx={{ width: '240px' }}>
        <NavItem>
          <RocketLaunchIcon />
          <Typography>Create leads on Tech targets</Typography>
        </NavItem>
        <NavItem>
          <HomeIcon />
          <Typography>Company HQ Locations</Typography>
        </NavItem>
        <NavItem>
          <PersonIcon />
          <Typography>Company Headcount</Typography>
        </NavItem>
        <NavItem>
          <AccessTimeIcon />
          <Typography>Revenue range</Typography>
        </NavItem>
        <NavItem>
          <SettingsIcon />
          <Typography>Company Profile</Typography>
        </NavItem>
        <NavItem>
          <EmailIcon />
          <Typography>Prospect Profile</Typography>
        </NavItem>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Let's define your <span style={{ color: '#FFB800' }}>targets</span>
          </Typography>
          <Typography color="text.secondary">
            Focus on the most relevant fields to shape your ICP — all fields are optional
          </Typography>
        </Box>

        <StyledPaper>
          <Typography variant="h6" sx={{ mb: 3 }}>Oslo chat</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box 
              component="img" 
              src="https://via.placeholder.com/40"
              sx={{ 
                width: 40, 
                height: 40, 
                borderRadius: '50%' 
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ mb: 1 }}>
                Hello I'm Oslo. Tell me what's on your mind
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                ICP updated to target Tech Companies. If you want to specify roles, locations, or other criteria for decision-makers, please let me know
              </Typography>
            </Box>
          </Box>
          <TextField
            fullWidth
            placeholder="Search department..."
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </StyledPaper>
      </Box>
    </Box>
  );
};

export default TargetingForm;
