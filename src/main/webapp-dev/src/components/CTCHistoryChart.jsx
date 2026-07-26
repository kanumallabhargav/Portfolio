import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: '2016',
    uv: 20663,
  },
  {
    name: '2017',
    uv: 20663,
  },
  {
    name: '2018',
    uv: 20663,
  },
  {
    name: '2018',
    uv: 0,
  },
  {
    name: '2019',
    uv: 0,
  },
  {
    name: '2019',
    uv: 34500,
  },
  {
    name: '2020',
    uv: 0,
  },
  {
    name: '2020',
    uv: 10000,
  },
  {
    name: '2021',
    uv: 15000,
  },
  {
    name: '2021',
    uv: 22500,
  },
  {
    name: '2022',
    uv: 30000,
  },
  {
    name: '2022',
    uv: 40000,
  },
  {
    name: '2023',
    uv: 67000,
  },
  {
    name: '2023',
    uv: 99000,
  },
  {
    name: '2024',
    uv: 91500,
  },
  {
    name: '2025',
    uv: 103500,
  },
  {
    name: '2025',
    uv: 112000,
  },
  {
    name: '2025',
    uv: 115000,
  },
];

const cardinal = curveCardinal.tension(0.2);

export default function CTCHistoryChart() {
    return (
    <AreaChart
      style={{ width: '100%',  maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      <RechartsDevtools />
    </AreaChart>
  );
}