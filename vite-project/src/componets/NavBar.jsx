import Cartwidget from "../Cartwidget";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
     
      <nav className='nav'>
        <div className='logo'>
          <p>Snikers</p>
        </div>
        <ul className='link'>
          <li>Zapatillas</li>
          
          <Menu >
            <MenuButton>
              Productos
            </MenuButton>
            <MenuList>
              <Link to={`/categoria/${"nike"}`}>
              <MenuItem>Nike</MenuItem>
              </Link>
              <Link to={`/categoria/${"adidas"}`}>
              <MenuItem>Nike</MenuItem>
              </Link>
              <Link to={`/categoria/${"puma"}`}>
              <MenuItem>Nike</MenuItem>
              </Link>
              
            </MenuList>
          </Menu>
          
        </ul>

        <Cartwidget />
      </nav>

  
    </div>
  );
};

export default Navbar;