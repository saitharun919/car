import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { IoCarSport } from "react-icons/io5";
import { IoCarSharp } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Sport',
    icon: <IoCarSport />
    ,
    children: [
      {
        key: 'g1',
        label: 'Sport',
        type: 'group',
        children: [
          { key: '1', label: 'FIAT' },
          { key: '2', label: 'BMW' },
        ],
      },
      {
        key: 'g2',
        label: 'Hatch Back',
        type: 'group',
        children: [
          { key: '3', label: 'BMW' },
          { key: '4', label: 'Toyota' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Sedden',
    icon: <IoCarSharp />
    ,
    children: [
      { key: '5', label: 'BWM' },
      { key: '6', label: 'Vauxhall' },
      {
        key: 'sub3',
        label: 'Petrol/Diesel',
        children: [
          { key: '7', label: 'Petrol' },
          { key: '8', label: 'Diesel' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Filter',
    icon: <IoFilter />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];

const App: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;