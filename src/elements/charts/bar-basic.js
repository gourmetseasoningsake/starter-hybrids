import { html, property } from 'hybrids';


import { chart } from '.';



const changeChart =
  host =>
  host.data = [...host.data, 43];



export default {
  width: '100%',
  height: '600px',
  title: 'Months',
  xLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  bgColor: 'dodgerblue',
  data: {
    ...property([30, 10, 5, 2, 20, 45, 50, 55, 60, 61]),
    observe:
      (h, v) =>
      h.$chart.chart !== undefined &&
      Array.isArray(v) &&
      ( h.$chart.chart.data = v,
        h.$chart.chart.update()
      )
  },
  config: ({ title, xLabels, bgColor, data }) => ({
    type: 'bar',
    data: {
      labels: xLabels,
      datasets: [{
        label: title,
        backgroundColor: bgColor,
        borderColor: 'rgb(255, 99, 132)',
        data
      }]
    },
    options: {
      maintainAspectRatio: false
    }
  }),
  $chart: chart,
  content: ({ $chart }) => html`${$chart}<button onclick=${changeChart}>add x</button>`
};
