import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useTheme } from '../context/ThemeContext';
import { useAccentColor } from '../context/AccentColorContext';
import accentColors from '../themes/accentColors';
import { getDateMinusDays } from '../util/dateUtils';


export default function NetGainChart() {
  const [netGainData, setNetGainData] = useState([]);
  const { theme } = useTheme();
  const { accentColor } = useAccentColor();
  const accent = accentColors[accentColor][theme];
  const [netGainStartDate, setNetGainStartDate] = useState(getDateMinusDays());

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/charts/net-gain/${netGainStartDate}`)
      .then((response) => {
        setNetGainData(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [netGainStartDate]);

  const handleSelectedDate = (e) => {
    setNetGainStartDate(e.target.value);
  }

  return (
    <>
    <div className={`flex flex-col px-2 mb-5 inset-shadow rounded-b-[2rem] py-2 w-fit bg-[${accent.background}]/20`}>
      <p className={`text-[${accent.text}] mb-2 font-semibold`}>Start Date</p>
      <input
        type="date"
        name="statDate"
        value={netGainStartDate}
        onChange={handleSelectedDate}
        className={`rounded-[2rem] bg-[${accent.foreground}] text-[${accent.text}] p-3 font-semibold `}
        required
      />
    </div>
      <LineChart
        style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={netGainData}
      >
        <CartesianGrid strokeDasharray="2 2" stroke="#6E6E6E" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} stroke={accent.text} />
        <YAxis width="auto" stroke={accent.text} />
        <Tooltip
          cursor={{ stroke: '#13EB2C' }}
          contentStyle={{ backgroundColor: `${accent.foreground}`, borderColor: '#fff' }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="netGain"
          stroke={accent.text}
          dot={{
            fill: '#F56527',
          }}
          activeDot={{ r: 8, stroke: '#fff' }}
        />
        <RechartsDevtools />
      </LineChart>
    </>
  );
}