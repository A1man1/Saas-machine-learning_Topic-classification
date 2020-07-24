import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';



const drawerWidth = 240; 
const useStyles =makeStyles((theme) => ({
 root: {
   display: 'flex',
 },
 appBar: {
   zIndex: theme.zIndex.drawer + 1,
 },
 drawer: {
   width: drawerWidth,
   flexShrink: 0,
 },
 drawerPaper: {
   width: drawerWidth,
   'margin-top': 64,
 },
 drawerContainer: {
   overflow: 'auto',
 },
 content: {
   flexGrow: 1,
   padding: theme.spacing(3),
 },


 search: {
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: fade(theme.palette.common.white, 0.15),
   '&:hover': {
     backgroundColor: fade(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     marginLeft: theme.spacing(1),
     width: 'auto',
   },
 },
 searchIcon: {
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 },
 inputRoot: {
   color: 'inherit',
 },
 inputInput: {
   padding: theme.spacing(1, 1, 1, 0),
   // vertical padding + font size from searchIcon
   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('sm')]: {
     width: '12ch',
     '&:focus': {
       width: '20ch',
     },
   },
 },



}));


export default function ClippedDrawer (props){ 
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
         <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        <div className={classes.drawerContainer}>
        <ListItem button>
        <ListItemIcon>
         <AddCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Add Friends" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
         <RemoveCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Remove Friends" />
      </ListItem>
          <Divider />
          <List>
            {[].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{<Avatar>W</Avatar>}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.hider}>
        </div>
      </Drawer>
      <main className={classes.content}>
       
      </main>
    </div>
    );
}