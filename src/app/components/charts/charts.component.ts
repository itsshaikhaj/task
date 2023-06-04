import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexTooltip, ApexDataLabels, ApexNonAxisChartSeries, ApexResponsive, ApexFill, ApexLegend, ApexYAxis } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  @ViewChild("chart") chart!: ChartsComponent;
  @ViewChild("donutChart") donutChart!: ChartsComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public donutChartOptions: Partial<ChartOptions> | any;


  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Income",
          data: [1000, 2000, 3000, 5100, 4200, 1500, 3500]
        },
        {
          name: "Outcome",
          data: [1100, 3200, 4500, 3200, 3400, 5200, 4100]
        },
      ],
      chart: {
        "width": "100%",
        "height": "250",
        type: "area",

      },
      title: {
        text: "Finance",
        align: "left",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: [
          "01",
          "05",
          "10",
          "15",
          "20",
          "25",
          "30"
        ]
      },
      yaxis: {
        labels: {
          formatter: function (value: any) {
            if (value >= 1000) {
              return (value / 1000) + "k";
            } else {
              return value;
            }
          }
        },
      },
      colors: [
        '#2947AA',
        '#E0B1AE',
      ],

    };
    this.donutChartOptions =

    {
      series: [44, 55, 41, 70],
      chart: {
        width: 320,
        type: "donut"
      },

      dataLabels: {
        enabled: false
      },
      title: {
        text: "All Expenses",
        align: "left",
        offsetX: 20,
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",

        }
      },

      colors: [
        '#2e4284',
        '#2947AA',
        '#8e9ed7',
        '#c6cfeb',
      ],
      labels: ['Shopping', 'Workspace', 'Food', 'Entertainments'],
      yaxis: {
        labels: {
          formatter: function (value: string) {
            return value + "$";
          }
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "right"
            }
          }
        }
      ],
      legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'center',
      },
    };
  }
}
