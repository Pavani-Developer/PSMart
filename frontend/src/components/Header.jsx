import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListIcon from '@mui/icons-material/List';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Header() {
  const [state, setState] = React.useState({
    left: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? '100%' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/' }, // Link to Home page
          { text: 'Cart', icon: <ShoppingCartIcon />, link: '/cart' }, // Link to Cart page
          { text: 'Orders', icon: <AssignmentIcon />, link: '/orders' }, // Link to Orders page
          { text: 'About', icon: <InfoIcon />, link: '/about' }, // Link to About page
          { text: 'Profile', icon: <PersonIcon />, link: '/profile' }, // Link to Profile page
          { text: 'Admin', icon: <SupervisorAccountIcon />, link: '/admin' }, // Link to Admin page
          { text: 'Favourites', icon: <FavoriteIcon />, link: '/favourites' }, // Link to Favourites page
          { text: 'Upload', icon: <CloudUploadIcon />, link: '/upload' }, // Link to Upload page
          { text: 'Dashboards', icon: <DashboardIcon />, link: '/dashboards' }, // Link to Dashboards page
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      
      <Button 
        onClick={toggleDrawer('left', true)}
        sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
        <MenuRoundedIcon sx={{fontSize:'35px' , color: '#fff'}}/>
      </Button>

      
      <Button 
        onClick={toggleDrawer('bottom', true)}
        sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
      >
        <MenuRoundedIcon sx={{fontSize:'35px',color:'#fff' }}/>
      </Button>

      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>

      <Drawer
        anchor="bottom"
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
      >
        {list('bottom')}
      </Drawer>
    </div>
  );
}
