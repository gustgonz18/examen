import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Layout, Menu, Divider} from 'antd';
import PokemonBaseList from './Components/PokemonBaseList';



const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background : 'white' }}>
      <div className="logo" style = {{ }}/>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{float: 'right'}}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Pokémons</Menu.Item>

      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
 
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <Divider orientation="left">Pokémons en su forma base </Divider>
        <PokemonBaseList />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> Pokémon </Footer>
  </Layout>
  );
}

export default App;
