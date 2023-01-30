import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { ToggleDrawerAction, useTaskContext } from '../context/taskContext';
import { Link, useNavigate } from 'react-router-dom';
const Layout = ({ children }: { children: React.ReactElement }) => {
  const { toggleDrawer, isOpenDrawer, drawerChildren } = useTaskContext();
  const navigate = useNavigate()
  const goToContactUs = () => {
    navigate('/custom-static-page-contact-us')
  }
  return (
    <div>
      <Drawer
        open={isOpenDrawer}
        onClose={toggleDrawer as any}
        direction="right"
        className="bla bla bla"
      >
        {/* {currentTask?.title} */}
        {drawerChildren}
      </Drawer>
      <div>
        <Link to='/'>Home</Link>
        <button onClick={goToContactUs}>Contact Us</button>
        <Link to='/custom-static-page-2'>Ir a static page 2</Link>
      </div>
      {children}
      {/* <button onClick={() => toggleDrawer(ToggleDrawerAction.DEFAULT)}>Open Drawer</button> */}
    </div>
  );
};

export default Layout;
