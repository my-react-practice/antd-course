import React from 'react';
import G2 from '@antv/g2';

class SampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.containRef = React.createRef();
  }

  componentDidMount() {
    this.chart = new G2.Chart({
      // this.containRef.current 即为引用
      container: this.containRef.current,
      width: 450,
      height: 300
    });

    this.refreshChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.refreshChart();
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  refreshChart = () => {
    // 接收 data 属性作为数据源
    this.chart.source(this.props.data);
    // 此处为硬编码，配置源自 G2 官方示例： https://github.com/antvis/g2
    // 实际开发中需要封装，推荐直接使用 BizCharts。
    this.chart
      .interval()
      .position('genre*sold')
      .color('genre');
    this.chart.render();
  };

  render() {
    return <div ref={this.containRef} />;
  }
}

export default SampleChart;
