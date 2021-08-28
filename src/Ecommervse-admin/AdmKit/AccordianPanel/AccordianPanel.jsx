import React,{useState,useEffect} from 'react'
import {
  Typography,
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CardActions,
  CardHeader,
  CardContent,
  Collapse,
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {EditIcon,ExpandLessIcon,ExpandMoreIcon,AddCircleIcon} from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    basicIconProperty:{
        color: "rgba(158, 158, 158, 1)",
        fontSize: "30px",
    },
    iconUpDown:{
        fontSize: "30px",
        color: "rgba(0, 0, 0, 1)",
    },
    dividerBottom: {
        borderBottom: "0.1em solid rgba(0, 0, 0, 0.1)",
      },
});
 function AccordianPanel(props) {
     const {
         isEditMode=true,
         isOpen=false,
         isEditView = true,

     } = props || {};
    const theme = useTheme();
    const classes = useStyles();
    const [edit,setEdit] = useState(isEditView)
    const [expanded,setExpanded] = useState(isOpen)

    const handleExpandClick = ()=>setExpanded(!expanded)
    return (
       <CardHeader
       className={expanded === false ? classes.dividerBottom:""}
       >
           <>
           {expanded === true ? (
                <>
                  <IconButton
                    onClick={() => {
                      
                      setEdit(true)
                    }}
                    style={{ marginRight: "20px" }}
                  >
                    <EditIcon
                      style={{ color: "red" }}
                      className={classes.basicIconProperty}
                    />
                  </IconButton>
                  <IconButton
                    style={{ marginRight: "18px" }}
                    onClick={() => {
                      
                      setEdit(true)
                    }}
                  >
                    <AddCircleIcon style={{ color: "#4CAF50" }} />
                  </IconButton>
                </>
              ) : (
                ""
              )}
           </>
           {expanded === true ?(
              <IconButton onClick={handleExpandClick}>
               <ExpandLessIcon className={classes.iconUpDown}/>
              </IconButton>
           ):(
                <IconButton onClick={handleExpandClick}>
                <ExpandMoreIcon className={classes.iconUpDown}/>
                </IconButton>
           )}

       </CardHeader>
    )
}
export { AccordianPanel }
export default AccordianPanel

