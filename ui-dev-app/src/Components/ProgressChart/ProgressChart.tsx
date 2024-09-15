import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Post } from '../PatientsPanel/Patients.model';
import type { ApexOptions } from 'apexcharts'

type ProgressChartProps = {
  posts?: Post[],
};

export const ProgressChart: React.FC<ProgressChartProps> = ({ posts = [] }) => {
  const chartData = posts
    .map((post: Post) => {
      const date = new Date(post.date);
      return {
        date: date.toLocaleDateString(),
        yearMonthDay: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, // "YYYY-MM-DD" format
        Prediction: (post.prediction! * 100).toFixed(2), // Assuming 'prediction' is a field in 'Post'
      };
    })
    .sort((a, b) => {
      const [aYear, aMonth, aDay] = a.yearMonthDay.split('-').map(Number);
      const [bYear, bMonth, bDay] = b.yearMonthDay.split('-').map(Number);

      if (aYear !== bYear) return aYear - bYear;
      if (aMonth !== bMonth) return aMonth - bMonth;
      return aDay - bDay;
    }) || [];

  const dates = chartData.map(data => data.date);
  const predictions = chartData.map(data => parseFloat(data.Prediction));

  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: '100%',
    },
    xaxis: {
      categories: dates,
      labels: {
        rotate: -45,
        style: {
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      max: 100,
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val.toFixed(2)}%`,
      },
    },
    stroke: {
      curve: 'smooth',
    },
  };

  const series = [
    {
      name: 'Prediction',
      data: predictions,
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ApexCharts options={options} series={series} type="line" height="100%" />
    </div>
  );
};
