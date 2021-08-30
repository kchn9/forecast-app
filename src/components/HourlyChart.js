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
        },
        {
          yAxisID: 'B',
          label: "Rain",
          type: 'bar',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          data: rain,
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          skipNull: true
        },
        {
          yAxisID: 'B',
          label: "Snow",
          type: 'bar',
          backgroundColor: 'rgba(201, 203, 207, 0.2)',
          data: snow,
          borderColor: 'rgb(201, 203, 207)',
          borderWidth: 1,
          skipNull: true
        }
      ]
    };

    const options = {
        indexAxis: 'x',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        scales: {
          A: {
            grid: {
              display: true
            },
            type: 'linear',
            position: 'left',
            ticks: {
              callback: val => `${val}°C`
            }
          },
          B: {
            grid: {
              display: false
            },
            type: 'linear',
            position: 'right',
            ticks: {
              callback: val => `${val}mm`
            }
          }
        },
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false
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
      <div style={{width: '800px'}}>
        <Bar data={data} options={options}/>
      </div>
    )

}