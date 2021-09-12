import { Bar } from 'react-chartjs-2';

export const HourlyChart = ({
    hours,
    temp,
    rain,
    snow
}) => {

  const beautifyHours = hours => hours.map(val => val.length === 1 ? `0${val}:00` : `${val}:00`);

  const data = {
      labels: beautifyHours(hours),
      datasets: [
        {
          yAxisID: 'A',
          type: 'line',
          data: temp,
          borderColor: "rgb(249,215,28)",
          borderWidth: 3,
          fill: false,
          pointStyle: 'triangle',
          radius: 3,
          tension: 0.4,
          color: '#ECECE7',
        },
        {
          yAxisID: 'B',
          label: "Rain",
          type: 'bar',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          data: rain,
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          skipNull: true,
          color: '#ECECE7',
        },
        {
          yAxisID: 'B',
          label: "Snow",
          type: 'bar',
          backgroundColor: 'rgba(201, 203, 207, 0.2)',
          data: snow,
          borderColor: 'rgb(201, 203, 207)',
          borderWidth: 1,
          skipNull: true,
          color: '#ECECE7',
        }
      ]
    };

    const options = {
        indexAxis: 'x',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        scales: {
          x: {
            color: '#ECECE7',
            borderColor: '#ECECE7',
          },
          A: {
            grid: {
              display: true,
              color: '#ECECE7',
              borderColor: '#ECECE7',
              tickColor: '#ECECE7',
            },
            type: 'linear',
            position: 'left',
            ticks: {
              callback: val => `${val}°C`
            },
          },
          B: {
            grid: {
              display: false,
              color: '#ECECE7',
              borderColor: '#ECECE7',
              tickColor: '#ECECE7',
            },
            type: 'linear',
            position: 'right',
            ticks: {
              callback: val => `${val}mm`
            }
          },
        },
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
            labels: {
              font: {
                color: '#ECECE7'
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const val = context.parsed.y;
                if (context.dataset.yAxisID === 'A') return ` Temperature: ${val}°C`;
                if (context.dataset.yAxisID === 'B') return ` ${context.dataset.label}: ${val}mm`;
              }
            }
          }
        },
      };

    return (
      <div className="forecast-chart">
        <Bar data={data} options={options}/>
      </div>
    )

}