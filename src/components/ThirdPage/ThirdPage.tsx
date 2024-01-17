import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "./ThirdPage.css"

const ThirdPage = () => {
  const [departments, setDepartments] = useState([
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggle = (id: string) => {
    const currentIndex = selectedItems.indexOf(id as never);
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push(id as never);
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  const handleToggleAll = (department: string, subDepartments: string[]) => {
    const allSelected = subDepartments.every((subDept) =>
      selectedItems.includes(subDept as never)
    );

    const newSelectedItems = [...selectedItems];

    if (allSelected) {
      subDepartments.forEach((subDept) => {
        const index = newSelectedItems.indexOf(subDept as never);
        newSelectedItems.splice(index, 1);
      });
    } else {
      subDepartments.forEach((subDept) => {
        if (!newSelectedItems.includes(subDept as never)) {
          newSelectedItems.push(subDept as never);
        }
      });
    }

    setSelectedItems(newSelectedItems);
  };

  const handleExpandCollapse = (department: string) => {
    const index = selectedItems.indexOf(department as never);
    const newSelectedItems = [...selectedItems];

    if (index === -1) {
      newSelectedItems.push(department as never);
    } else {
      newSelectedItems.splice(index, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="third-page-container">
      <Typography variant="h4">Department List</Typography>
      <List>
        {departments.map((department) => (
          <React.Fragment key={department.department}>
            <ListItem>
              <IconButton
                edge="start"
                onClick={() => handleExpandCollapse(department.department)}
              >
                <ExpandMoreIcon />
              </IconButton>
              <Checkbox
                checked={
                  selectedItems.includes(department.department as never) ||
                  department.sub_departments.every((subDept) =>
                    selectedItems.includes(subDept as never)
                  )
                }
                onChange={() =>
                  handleToggleAll(
                    department.department,
                    department.sub_departments
                  )
                }
                disableRipple
              />
              <ListItemText primary={department.department} />
            </ListItem>
            <Collapse in={selectedItems.includes(department.department as never)}>
              <List disablePadding>
                {department.sub_departments.map((subDept) => (
                  <ListItem key={subDept}>
                    <Checkbox
                      edge="start"
                      checked={selectedItems.includes(subDept as never)}
                      onChange={() => handleToggle(subDept)}
                      disableRipple
                    />
                    <ListItemText primary={subDept} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default ThirdPage;
