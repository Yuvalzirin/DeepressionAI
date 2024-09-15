import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import type { SxProps } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { ApexOptions } from 'apexcharts'
import { StyledStatusBoxInnerImg } from '../PatientPage/PatientPage.styles'
import { statusSvgMap } from '../PatientPage/PatientPage.consts'
import { PatientStatus } from '../PatientsPanel/Patients.model'

export interface TrafficProps {
  chartSeries: number[];
  labels: string[];
  sx?: SxProps;
}

const ChartComponent = React.lazy(() => import('react-apexcharts'));

export function TrafficPie({ chartSeries, labels, sx }: TrafficProps): React.JSX.Element {
  const chartOptions = useChartOptions(labels);

  return (
    <Card sx={sx}>
      <CardHeader title="Distribution by Status" />
      <CardContent>
        <Stack spacing={2}>
          <React.Suspense fallback={<div>Loading Chart...</div>}>
          <ChartComponent height={300} options={chartOptions} series={chartSeries} type="donut" width="100%" />
          </React.Suspense>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            {chartSeries.map((item, index) => {
              const label = labels[index];

              return (
                <Stack key={label} spacing={1} sx={{ alignItems: 'center' }}>
                  <StyledStatusBoxInnerImg src={statusSvgMap[label as PatientStatus]}
                                           alt={statusSvgMap[label as PatientStatus]}
                  />
                  <Typography variant="h6">{label}</Typography>
                  <Typography color="text.secondary" variant="subtitle2">
                    {(item / chartSeries.length * 100).toFixed(0)}%
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function useChartOptions(labels: string[]): ApexOptions {
  const theme = useTheme();

  return {
    chart: { background: 'transparent' },
    colors: [theme.palette.primary.main, theme.palette.success.light, theme.palette.warning.main],
    dataLabels: { enabled: false },
    labels,
    legend: { show: false },
    plotOptions: { pie: { expandOnClick: false } },
    states: { active: { filter: { type: 'none' } }, hover: { filter: { type: 'none' } } },
    stroke: { width: 0 },
    theme: { mode: theme.palette.mode },
    tooltip: { fillSeriesColor: false },
  };
}
