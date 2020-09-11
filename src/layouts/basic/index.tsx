import React, { Component } from 'react';
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';

class PlatformLayout extends Component {
  state = {
    name: '这就是登录登录',
    num: 1,
  }

  render() {
    return (
      <div className="baseName">
        {this.state.name}
      </div>
    )
  }

}

export default PlatformLayout;