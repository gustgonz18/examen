import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Layout, Menu} from 'antd';
import PokemonList from './Components/PokemonList';


const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background : 'white' }}>
      <div className="logo" style = {{ }}/>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Pokémons</Menu.Item>
        <Menu.Item key="3">nothing8</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
 
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <PokemonList />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
