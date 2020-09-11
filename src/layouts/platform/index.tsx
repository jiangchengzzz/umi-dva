import React, { Component } from 'react';
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { RedditOutlined } from '@ant-design/icons';
import { Link } from 'umi'

const { Header, Content, Footer } = Layout;

class PlatformLayout extends Component {
  state = {
    menuList: [
      {
        name: '工具',
        num: 1,
      },
      {
        name: '工具1',
        num: 1,
      },
    ]

  }
  handleClickMenu = (e: any) => {
    console.log('e :>>111 ', e);
  };

  handleClick = (e: any, v: any) => {
    this.setState({
    })
  };
  render() {
    return (
      <Layout>
        <Header className="header-box" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <div className="top-menu">
            <Menu theme="dark" mode="horizontal" onClick={this.handleClickMenu} defaultSelectedKeys={['1']}>
              {console.log('asdfaefawef')}
              {
                (this.state.menuList.length <= 0) ? null : this.state.menuList.map((v, num) => {
                  return (
                    <Menu.Item key={num} onClick={
                      this.handleClick.bind(this, v)
                    }><Link to="/">{v.name}</Link></Menu.Item>
                  )
                })
              }
            </Menu>
          </div>
          <div className="person-box">
            <div className="name">
              蒋兄啊蒋兄
            </div>
            <RedditOutlined />
          </div>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-background">
            {console.log(this.props.children)}
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>不问科技</Footer>
      </Layout>
    )
  }

}

export default PlatformLayout;