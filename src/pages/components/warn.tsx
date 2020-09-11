import React, { Component } from 'react';
import styles from './index.less';
import { Radio } from 'antd';

interface IProps  {
  warn: Boolean;
  onTemperatureChange: Function
}
class WarningBanner extends Component<IProps> {
  constructor(props: any) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    console.log('this.props', this.props)
  }
  onChange(e: any) {
    console.log('this :>> ', this);
    this.props.onTemperatureChange(e.target.value)
  }
  componentWillReceiveProps(nextProps: any, nextContext: any) {
    console.log('nextProps :>> ', nextProps);
    console.log('nextContext :>> ', nextContext);
  }
  render() {
    if (!this.props.warn) {
      return null;
    }
    return (
      <div className="warning">
        Warningasdf!
        <Radio.Group onChange={e => this.onChange(e)} value={this.props.warn ? 1 : 0}>
          <Radio value={0}>AAA</Radio>
          <Radio value={1}>BBB</Radio>
        </Radio.Group>
      </div>

    )
  }
}
export default WarningBanner