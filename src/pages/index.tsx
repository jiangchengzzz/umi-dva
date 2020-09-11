import React, { Component } from 'react'
import styles from './index.less';
import { Button } from 'antd';
import WarningBanner from './components/warn'
import SelWarn from './components/selWarn'

// function WarningBanner(props: any){
//   console.log('props :>> ', props);
//   if (!props.warn) {
//     return null;
//   }
//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }
const arr: any = [1, 2, 3, 4];

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  state = {
    date: new Date(),
    count: 1,
    text: '蒋兄',
    value: 'mango',
    warn: true
  }
  componentDidMount() {
    setInterval(() => {
      this.update()
    }, 50000)
  }

  componentWillUnmount() {
    clearInterval();
  }
  update = () => {
    let aaa: number = this.state.count + 1;
    this.setState((prevState, props) => ({
      date: new Date(),
      count: aaa
    }), () => {
      console.log('000000000000', this.state.count)
    })
  }
  aaa = () => {
    return <h2>23423424{this.state.date.toLocaleTimeString()}</h2>;
  }
  bbb = (e: any) => {
    this.setState({
      warn: !this.state.warn
    })
  }

  textChange = (e: any) => {
    console.log('e :>> ', e);
    this.setState({
      text: e.target.value
    })
  }
  selChange = (e: any) => {
    console.log('e :>> ', e);
    this.setState({
      value: e.target.value
    })
  }
  onTemperatureChange = (value: any) => {
    this.setState({
      warn: !!value
    })
  }
  handleClickMenu = () => {
    return (
      <div>
        <WarningBanner warn={this.state.warn} three={<h4>我就是父组件传过来的three</h4>} four={<h4>我就是父组件传过来的four</h4>} onTemperatureChange={this.onTemperatureChange}>
          {
            <h4>我就是父组件传过来的one</h4>
          }
          {
            <h4>我就是父组件传过来的two</h4>
          }
        </WarningBanner>
        <SelWarn warn={this.state.warn} onTemperatureChange={this.onTemperatureChange}>
          <h4>我就是父组件传过来的啊啊啊</h4>
        </SelWarn>
        <h1>Hello</h1>
        <textarea value={this.state.text} onChange={this.textChange}></textarea>
        <select value={this.state.value} onChange={this.selChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
        <ul>
          {
            arr.length > 0 && arr.map((v: any) => {
              return <li key={v}>{v}</li>
            })
          }
        </ul>
        <h1>world</h1>
        {
          this.state.count % 2 &&
          <h3>这几句就看了就安静了</h3>
        }
        <a href="#" onClick={() => this.bbb(1231)} >asdfasdf</a>
        <Button onClick={this.aaa}>aaa</Button>
        {
          this.aaa()
        }
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1 >homasdfas1e</h1>
        {
          this.handleClickMenu()
        }
      </div>
    )
  }
}

// export default  () => {
//   return (
//     <div className="index">
//       <h1 className="title">欢迎登录 动筛管理系统</h1>
//     </div>
//   );
// };
export default Home;
