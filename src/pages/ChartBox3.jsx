import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import "./css/chartbox3.css"


const data = [
   
    
    {
      name: 'Page A',
      uv: "KTH",
      pv: 5,
      
    },

    {
      name: 'Page A',
      uv: "ED",
      pv: 6,
      
    },

    {
      name: 'Page A',
      uv: "DT",
      pv: 6,
      
    },
     {
      name: 'Page A',
      uv: "RB",
      pv: 8,
      
    },
  ];
const chartbox3 = () => {
    return (
        <div className="chartbox3">
            <div className="boxInfo">
            <div className="title">
                <img src="user.svg" alt="" />
                <span>
                    การ์ตูนยอดนิยม
                </span>
            </div>
            <span className="font">
              RB: ครูพิเศษ จอมป่วนรีบอนส์
            </span>
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
                <span className="percentage">45%</span>
                <span className="duration">
                    this mounth
                </span>
                </div>
            </div>
        </div>
    )
}

export default chartbox3