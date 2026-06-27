import { Pie, PieChart, Sector, Tooltip } from 'recharts';
import { useEffect, useState } from 'react';
import axios from "axios";

const COLORS = ['#00C49F', '#F56527'];

const PieGradient = (props) => {

  return (
    <>
      <defs>
        <radialGradient
          id={`fillGradient${props.index}`}
          cx={props.cx}
          cy={props.cy}
          r={props.outerRadius}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0} />
          <stop offset="100%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0.8} />
        </radialGradient>
        <radialGradient
          id={`borderGradient${props.index}`}
          cx={(typeof props.width === 'number' ? props.width : 0) / 2}
          cy={(typeof props.height === 'number' ? props.height : 0) / 2}
        >
          <stop offset="0%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0} />
          <stop offset="100%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0.8} />
        </radialGradient>
        <clipPath id={`clipPath${props.index}`}>
          <Sector {...props} />
        </clipPath>
      </defs>
      <Sector
        {...props}
        clipPath={`url(#clipPath${props.index})`}
        fill={`url(#fillGradient${props.index})`}
        stroke={`url(#borderGradient${props.index})`}
        strokeWidth={props.isActive ? '100%' : 0}
      />
    </>
  );
};

export default function TflGoalChart({
  isAnimationActive = true,
  defaultIndex,
}) {

  const [tflData, setTflData] = useState([]);

  useEffect(() => {
        axios
            .get("http://localhost:8080/api/charts/tfl-goal")
            .then((response) => {
                setTflData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

  return (
    <PieChart style={{ aspectRatio: 1 }} responsive>
      <Pie data={tflData} dataKey="x" isAnimationActive={isAnimationActive} shape={PieGradient} innerRadius="50%" />
      <Tooltip/>
    </PieChart>
  );
}