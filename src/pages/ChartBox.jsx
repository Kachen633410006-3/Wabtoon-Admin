import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import "./css/chartbox.css"


const data = [
    {
      name: 'Page A',
      uv: 40,
      pv: 40,
      amt: 40,
    },
    {
      name: 'Page B',
      uv: 30,
      pv: 13,
      amt: 221,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 98,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 39,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 48,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 83,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 195,
      amt: 2100,
    },
  ];
const ChartBox = () => {
    return (
        <div className="chartbox">
            <div className="boxInfo">
            <div className="title">
                <img src="user.svg" alt="" />
                <span>
                    รายได้ที่มากที่สุด
                </span>
            </div>
            <h1>195</h1>
            <Link to = "/">
            View all
            </Link>
            </div>
            <div className="chartInfo">
                <div className="chart">

                <ResponsiveContainer width="99%" height="100%">
        <LineChart width={500} height={500} data={data}>
        <Tooltip
        contentStyle={{background:"transparent", border:"none"}}
        labelStyle={{display : "none"}}
        position={{ x:10, y:70}}
        />
          <Line type="monotone" 
          dataKey="pv" 
          stroke="#E46C88" 
          strokeWidth={2}
          dot={false}
           />
        </LineChart>
      </ResponsiveContainer>
             
                </div>
                <div className="texts">
                <span className="percentage">10%</span>
                <span className="duration">
                    this mounth
                </span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox