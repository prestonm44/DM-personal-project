import { echartSetOption } from './echarts-utils';

/* -------------------------------------------------------------------------- */
/*                             Echarts Total Sales                            */
/* -------------------------------------------------------------------------- */

const completedTaskChartInit = () => {
  const { getColor, getData, getDates } = window.phoenix.utils;

  const $totalSalesChart = document.querySelector(
    '.echart-completed-task-chart'
  );

  const dates = getDates(
    new Date('5/1/2022'),
    new Date('5/30/2022'),
    1000 * 60 * 60 * 24
  );

  const currentMonthData = [
    50, 115, 180, 180, 180, 150, 120, 120, 120, 120, 120, 240, 240, 240, 240,
    270, 300, 330, 360, 390, 340, 290, 310, 330, 350, 320, 290, 330, 370, 350
  ];

  const prevMonthData = [
    130, 130, 130, 90, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 110, 170,
    230, 230, 230, 270, 310, 270, 230, 260, 290, 320, 280, 280, 280
  ];
  const tooltipFormatter = params => {
    const currentDate = window.dayjs(params[0].axisValue);
    const prevDate = window.dayjs(params[0].axisValue).subtract(1, 'month');

    const result = params.map((param, index) => ({
      value: param.value,
      date: index > 0 ? prevDate : currentDate,
      color: param.color
    }));

    let tooltipItem = ``;
    result.forEach((el, index) => {
      tooltipItem += `<h6 class="fs-9 text-body-tertiary ${
        index > 0 && 'mb-0'
      }"><span class="fas fa-circle me-2" style="color:${el.color}"></span>
      ${el.date.format('MMM DD')} : ${el.value}
    </h6>`;
    });
    return `<div class='ms-1'>
              ${tooltipItem}
            </div>`;
  };

  if ($totalSalesChart) {
    const userOptions = getData($totalSalesChart, 'echarts');
    const chart = window.echarts.init($totalSalesChart);

    const getDefaultOptions = () => ({
      color: [getColor('primary'), getColor('info')],
      tooltip: {
        trigger: 'axis',
        padding: 10,
        backgroundColor: getColor('body-highlight-bg'),
        borderColor: getColor('border-color'),
        textStyle: { color: getColor('light-text-emphasis') },
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        },
        formatter: tooltipFormatter,
        extraCssText: 'z-index: 1000'
      },
      xAxis: [
        {
          type: 'category',
          data: dates,
          axisLabel: {
            formatter: value => window.dayjs(value).format('DD MMM'),
            interval: 13,
            showMinLabel: true,
            showMaxLabel: false,
            color: getColor('secondary-color'),
            align: 'left',
            fontFamily: 'Nunito Sans',
            fontWeight: 600,
            fontSize: 12.8
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: getColor('secondary-bg')
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            interval: 0,
            lineStyle: {
              color: getColor('secondary-bg')
            }
          },
          boundaryGap: false
        },
        {
          type: 'category',
          position: 'bottom',
          data: dates,
          axisLabel: {
            formatter: value => window.dayjs(value).format('DD MMM'),
            interval: 130,
            showMaxLabel: true,
            showMinLabel: false,
            color: getColor('secondary-color'),
            align: 'right',
            fontFamily: 'Nunito Sans',
            fontWeight: 600,
            fontSize: 12.8
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          boundaryGap: false
        }
      ],
      yAxis: {
        position: 'right',
        axisPointer: { type: 'none' },
        axisTick: 'none',
        splitLine: {
          show: false
        },
        axisLine: { show: false },
        axisLabel: { show: false }
      },
      series: [
        {
          name: 'd',
          type: 'line',
          // data: Array.from(Array(30).keys()).map(() =>
          //   getRandomNumber(100, 300)
          // ),
          data: currentMonthData,
          showSymbol: false,
          symbol: 'circle'
        },
        {
          name: 'e',
          type: 'line',
          // data: Array.from(Array(30).keys()).map(() =>
          //   getRandomNumber(100, 300)
          // ),
          data: prevMonthData,
          // symbol: 'none',
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: getColor('info')
          },
          showSymbol: false,
          symbol: 'circle'
        }
      ],
      grid: {
        right: 2,
        left: 5,
        bottom: '20px',
        top: '2%',
        containLabel: false
      },
      animation: false
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default completedTaskChartInit;
