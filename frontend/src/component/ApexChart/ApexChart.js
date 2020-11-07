import React from 'react'
// import ReactApexChart from 'ReactApexChart'
import ReactApexChart from 'react-apexcharts'

const ApexChart = props => {
  const { total, series, colors, height } = props
  const options = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    colors: colors,
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return total
            }
          }
        }
      }
    },
    labels: ['NEN', 'EN', 'RFC', 'TBS']
  }
  const content = (
    <>
      <ReactApexChart options={options} series={series} type='radialBar' height={height} />

    </>
  )

  return content
}

export default ApexChart
