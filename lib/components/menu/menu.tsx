import React  from 'react';
import MenuContext from './store';
import classNames from 'classnames';

type MenuMode = 'vertical' | 'horizontal';

export interface MenuProps {
  mode: MenuMode;
}

const prefixCls = 'f-menu';

const Menu: React.FC<MenuProps> = props => {
  const { children, mode } = props;
  return <MenuContext.Provider value={{ mode }}>
    <div className={classNames(prefixCls, `${prefixCls}-${mode}`)}>
      {children}
    </div>
  </MenuContext.Provider>;
};

export default Menu;