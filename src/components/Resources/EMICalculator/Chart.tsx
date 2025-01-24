import React, { SetStateAction, useCallback, useState } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

interface ChartProps {
     loanAmount: number;
     totalInterestPayemnt: number;
}

const renderActiveShape = (props: any) => {
     const RADIAN = Math.PI / 180;
     const {
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          startAngle,
          endAngle,
          fill,
          payload,
          value
     } = props;
     const sin = Math.sin(-RADIAN * midAngle);
     const cos = Math.cos(-RADIAN * midAngle);
     const sx = cx + (outerRadius + 10) * cos;
     const sy = cy + (outerRadius + 10) * sin;
     const mx = cx + (outerRadius + 30) * cos;
     const my = cy + (outerRadius + 30) * sin;
     const ex = mx + (cos >= 0 ? 1 : -1) * 22;
     const ey = my;
     const textAnchor = cos >= 0 ? "start" : "end";

     return (
          <g>
               <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
               </text>
               <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
               />
               <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
               />
               <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                    stroke={fill}
                    fill="none"
               />
               <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
               <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    textAnchor={textAnchor}
                    fill="#333"
               >{`₹ ${value}`}</text>
               {/* <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={18}
                    textAnchor={textAnchor}
                    fill="#999"
               >
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
               </text> */}
          </g>
     );
};

const Chart: React.FC<ChartProps> = ({ loanAmount, totalInterestPayemnt }) => {

     // data for pie chart
     const data = [
          { name: "Loan Amount", value: loanAmount },
          { name: "Total Interest Payment", value: totalInterestPayemnt }
     ]

     // Colors for the pie chart segments
     const colors = ['#0088FE', '#00C49F'];

     const [activeIndex, setActiveIndex] = useState(0);
     const onPieEnter = useCallback(
          (_: any, index: SetStateAction<number>) => {
               setActiveIndex(index);
          },
          [setActiveIndex]
     );

     return (
          <div style={{ width: "100%", height: 400 }}>
               <ResponsiveContainer>
                    <PieChart>
                         <Pie
                              data={data}
                              activeIndex={activeIndex}
                              activeShape={renderActiveShape}
                              cx={150}
                              cy={170}
                              innerRadius={60}
                              outerRadius={100}
                              dataKey="value"
                              onMouseEnter={onPieEnter}
                         >
                              {data.map((entry, index) => (
                                   <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                              ))}
                         </Pie>
                         {/* <Tooltip /> */}
                         <Legend />
                    </PieChart>
               </ResponsiveContainer>
          </div>
     )
}

export default Chart