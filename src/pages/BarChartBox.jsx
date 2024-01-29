
import ".barchartbox.css";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const BarChartBox = () => {
    return (
        <div className="barchartbox">
          <h1>Hi</h1>
          <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
          </div>
        </div>
    )
}

export default BarChartBox