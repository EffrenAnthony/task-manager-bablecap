import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useTaskContext } from '../context/taskContext';
const Layout = ({ children }: { children: React.ReactElement }) => {
  const { toggleDrawer, isOpenDrawer, drawerChildren } = useTaskContext();
  return (
    <div>
      <Drawer
        open={isOpenDrawer}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        {/* {currentTask?.title} */}
        {drawerChildren}
      </Drawer>
      {children}
    </div>
  );
};

export default Layout;
