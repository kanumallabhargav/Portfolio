import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useEffect, useState } from 'react';
import axios from "axios";


export default function NetGainChart() {
    const [netGainData, setNetGainData] = useState([]);

  useEffect(() => {
        axios
            .get("http://localhost:8080/api/charts/net-gain")
            .then((response) => {
                setNetGainData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={netGainData}
    >
      <CartesianGrid strokeDasharray="2 2" stroke="#6E6E6E" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} stroke="#DEDEDE" />
      <YAxis width="auto" stroke="#DEDEDE" />
      <Tooltip
        cursor={{ stroke: '#13EB2C' }}
        contentStyle={{ backgroundColor: '#383838', borderColor: '#fff' }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="netGain"
        stroke="#fff"
        dot={{
          fill: '#F56527',
        }}
        activeDot={{ r: 8, stroke: '#fff' }}
      />
      <RechartsDevtools />
    </LineChart>
  );
}