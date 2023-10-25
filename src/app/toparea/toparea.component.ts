import { ICONS } from '../../assets/icon-config';
import * as Highcharts from 'highcharts';
import 'highcharts/modules/drilldown';
import 'highcharts/modules/exporting';
import 'highcharts/modules/solid-gauge'; 

import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-toparea',
  templateUrl: './toparea.component.html',
  styleUrls: ['./toparea.component.css']
})
export class TopareaComponent implements AfterViewInit{
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @ViewChild('speedContainer') speedContainer!: ElementRef;

  ICONS = ICONS;

  chartHeight = 250; // Set chart height
  chartWidth = 900; // Set chart width

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() =>{
      Highcharts.chart(this.chartContainer.nativeElement, {
        chart: {
          type: 'column',
          height: this.chartHeight,
          width: this.chartWidth,
        },
        title: {
          text: ' ',
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          title: {
            text: 'Month', // Set the x-axis title to "Month"
          },
        },
        yAxis: {
          title: {
            text: 'Security rating',
          },
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            borderRadius: 5,
          },
        },
        legend: {
          enabled: false, // Turn off the legend
        },
        colors: ['#E3E4E6', '#b9b5f2', '#785edd' ], 
        series: [
          {
            name: 'Series 1',
            data: [20, 50, 75, 20, 40, 50, 30, 33, 23, 12, 56, 23],
          },
          {
            name: 'Series 2',
            data: [20, 50, 75, 20, 40, 50, 30, 33, 23, 12, 56, 23],
          },
          {
            name: 'Series 3',
            data: [20, 50, 75, 20, 40, 50, 30, 33, 23, 12, 56, 23],
          },
        ],
      } as Highcharts.Options, () => {});
      Highcharts.chart(this.speedContainer.nativeElement, {
        chart: {
          type: 'solidgauge',
          width: 200, // Set the desired width
          height: 250, 
        },
        title: undefined,
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
          min: 0,
          max: 100, // Define the maximum value based on your requirements
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
            y: -70,
          },
          labels: {
            y: 16,
          },
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        series: [
          {
              data: [80], // The value you want to display (e.g., 80)
              dataLabels: {
                  format: '<div style="text-align:center"><span style="font-size:25px">{y}</span><br/><span style="font-size:12px;opacity:0.4">%</span></div>',
              },
          },
      ],
      } as Highcharts.Options, () => {});
    });
  }
}