import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';  // Import Paper only if you are using it
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";  // Import icons if used

export const MapContainer = styled('div')({
  height: '85vh',
  width: '100%',
});

export const MarkerContainer = styled('div')({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': { zIndex: 2 },
});

export const Pointer = styled('div')({
  cursor: 'pointer',
});

export const PaperStyled = styled(Paper)({
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px',
});
