import React from 'react';
import './css/Home.css';
import { Outlet, } from 'react-router-dom';
import ChartBox from './ChartBox';
import BarChartBox from './BarChartBox';
import ChartBox3 from './ChartBox3';
import Navbar from './Navbar';
import Menu from './Menu';



function Home() {
  const isLoggedIn = localStorage.getItem('loggedInUsername');

  return (
    <div className="home-container">
      {isLoggedIn ? (

            <>
            
            <div className='main'>
            <Navbar/>
            </div>
            <div className='container'>
            <div className='menuContainer'>
            <Menu/>
            </div>
            
            <div className='contentContainer'>
          <Outlet />

        <div className="home">

            <div className="box box1">
              <ChartBox />
            </div>


            <div className="box box2">
              <BarChartBox />
            </div>


            <div className="box box3">
              <ChartBox3/>
            </div>

            
            


          </div>
          </div>
          </div>
          </>
          
      ) : (
        <>
          <h2>รายละเอียด </h2>
          <p>นี่เป็น project เกี่ยวกับการจัดการการ์ตูนบนเว็บไชต์</p>
          <p>เชื่อมต่อกับ Firebase เพื่อเก็บข้อมูลโดยใช้ React ในการเขียน</p>
          <p>โดยสามารถดูรายละเอียด เพิ่ม ลบ แก้ไข ข้อมูลต่างๆ ของการ์ตูนได้</p>
        </>
      )}
    </div>
  );
}

export default Home;
