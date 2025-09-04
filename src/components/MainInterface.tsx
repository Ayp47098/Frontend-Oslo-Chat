import { 
  Box, 
  Typography, 
  TextField, 
  MenuItem, 
  Select, 
  FormControl,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MicIcon from '@mui/icons-material/Mic';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  boxShadow: 'none',
  border: '1px solid #e9ecef',
  backgroundColor: '#fff',
  height: 'fit-content'
}));

const FormCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  boxShadow: 'none',
  border: '1px solid #e9ecef',
  backgroundColor: '#fff',
  marginBottom: theme.spacing(2)
}));

const MainInterface = () => {
  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      {/* Left Section - Oslo Chat */}
      <Box sx={{ 
        width: '50%', 
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}>
        <StyledPaper>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
            <Box sx={{ 
              width: 16, 
              height: 16, 
              backgroundColor: '#FFB800', 
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              transform: 'rotate(45deg)'
            }}>
            </Box>
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
              Oslo chat
            </Typography>
          </Box>

          {/* First Message */}
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ 
                mb: 2,
                fontSize: '14px',
                fontWeight: 400,
                color: '#666666',
                lineHeight: 1.5
              }}>
                Hello I'm Oslo. Tell me what's on your mind
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  border: '1px solid #e0e0e0',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  👍
                </Box>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  border: '1px solid #e0e0e0',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  👎
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Tech Targets Message */}
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 4
          }}>
            <Box sx={{ 
              backgroundColor: '#f8f9fa', 
              p: 2, 
              borderRadius: '8px',
              border: '1px solid #e9ecef',
              width: 'fit-content'
            }}>
              <Typography sx={{ 
                fontSize: '14px',
                color: '#1a1a1a',
                fontWeight: 500,
                textAlign: 'center'
              }}>
                Create leads on Tech targets
              </Typography>
            </Box>
          </Box>

          {/* Second Oslo Message */}
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ 
                fontSize: '14px',
                color: '#666666',
                lineHeight: 1.5,
                mb: 2
              }}>
                ICP updated to target Tech Companies. If you want to specify roles, locations, or other criteria for decision-makers, please let me know
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  border: '1px solid #e0e0e0',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  👍
                </Box>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  border: '1px solid #e0e0e0',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px'
                }}>
                  👎
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Search Input */}
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              placeholder=""
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#e9ecef',
                  },
                  '&:hover fieldset': {
                    borderColor: '#d0d7de',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFB800',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <Box sx={{ mr: 1, color: '#9ca3af' }}>🔍</Box>
                ),
                endAdornment: (
                  <MicIcon sx={{ color: '#FFB800', cursor: 'pointer' }} />
                )
              }}
            />
          </Box>
        </StyledPaper>
      </Box>

      {/* Right Section - Form */}
      <Box sx={{ 
        width: '50%', 
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 1,
              fontSize: '24px',
              fontWeight: 600,
              color: '#1a1a1a'
            }}
          >
            Let's define your <span style={{ color: '#FFB800' }}>targets</span>
          </Typography>
          <Typography 
            sx={{ 
              fontSize: '14px',
              color: '#666666',
              lineHeight: 1.5
            }}
          >
            Focus on the most relevant fields to shape your ICP — all fields are optional
          </Typography>
        </Box>

        {/* Company Profile */}
        <FormCard>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 600, mb: 3, color: '#1a1a1a' }}>
            Company Profile
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: 1, color: '#1a1a1a' }}>
              Company Headcount
            </Typography>
            <FormControl fullWidth>
              <Select
                value="1-10"
                displayEmpty
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e9ecef',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#d0d7de',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFB800',
                  },
                  '& .MuiSelect-select': {
                    color: '#666666',
                    fontSize: '14px'
                  }
                }}
              >
                <MenuItem value="1-10">1-10</MenuItem>
                <MenuItem value="11-50">11-50</MenuItem>
                <MenuItem value="51-200">51-200</MenuItem>
                <MenuItem value="201-500">201-500</MenuItem>
                <MenuItem value="500+">500+</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: 1, color: '#1a1a1a' }}>
              Company HQ Locations
            </Typography>
            <FormControl fullWidth>
              <Select
                value="India"
                displayEmpty
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e9ecef',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#d0d7de',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFB800',
                  },
                  '& .MuiSelect-select': {
                    color: '#666666',
                    fontSize: '14px'
                  }
                }}
              >
                <MenuItem value="India">India...</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mb: 0 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: 1, color: '#1a1a1a' }}>
              Revenue range
            </Typography>
            <FormControl fullWidth>
              <Select
                value="50L - 1Cr"
                displayEmpty
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e9ecef',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#d0d7de',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFB800',
                  },
                  '& .MuiSelect-select': {
                    color: '#666666',
                    fontSize: '14px'
                  }
                }}
              >
                <MenuItem value="50L - 1Cr">50L - 1Cr...</MenuItem>
                <MenuItem value="1Cr - 5Cr">1Cr - 5Cr</MenuItem>
                <MenuItem value="5Cr - 10Cr">5Cr - 10Cr</MenuItem>
                <MenuItem value="10Cr+">10Cr+</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </FormCard>

        {/* Prospect Profile */}
        <FormCard>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 600, mb: 3, color: '#1a1a1a' }}>
            Prospect Profile
          </Typography>
          
          <Box sx={{ mb: 0 }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 500, mb: 1, color: '#1a1a1a' }}>
              Department
            </Typography>
            <FormControl fullWidth>
              <Select
                value=""
                displayEmpty
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e9ecef',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#d0d7de',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFB800',
                  },
                  '& .MuiSelect-select': {
                    color: '#999999',
                    fontSize: '14px'
                  }
                }}
              >
                <MenuItem value="" disabled>
                  Search department...
                </MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </FormCard>
      </Box>
    </Box>
  );
};

export default MainInterface;
