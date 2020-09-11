import React, { Component } from 'react';
import styles from './index.less';
import { Radio } from 'antd';

interface IProps  {
  warn: Boolean;
  onTemperatureChange: Function
}
class SelWarn extends Component<IProps> {
  constructor(props: any) {
    super(props);
    // this.onChange = this.onChange.bind(this)
  }

  onChange(e: any) {
    console.log('e :>> ', e);
    this.props.onTemperatureChange(e.target.value)
  }

  componentWillReceiveProps(nextProps: any, nextContext: any) {
    console.log('nextProps123 :>> ', nextProps);
    console.log('nextContext123 :>> ', nextContext);
  }

  render() {
    const temperature = this.props.warn;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <Radio.Group onChange={e => this.onChange(e)} value={temperature ? 1 : 0}>
          <Radio value={0}>A</Radio>
          <Radio value={1}>B</Radio>
        </Radio.Group>
      </fieldset>
    );
  }
}
export default SelWarn