"use client";

import Image from 'next/image';
import "./homepage.css"
import Form from '@/components/form/form';
import Gresult from '@/components/result/result';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Finish from '@/components/finish/finish';
import dynamic from 'next/dynamic';
import Countdown from "../components/countdown/Countdown";

// Homeコンポーネント
export default function Home() {

  return (
    <>
      <header className="header">
  <div className="wrapper">
    <h1>
      <Image
        className="logo"
        src="/logo.svg"
        alt="翠翔祭2026"
        width={120}
        height={40}
      />
    </h1>

    <ul className="button">
      <li>
        <a href="">
          <Image
            className="apply"
            src="/apply.svg"
            alt="apply"
            width={80}
            height={30}
          />
        </a>
      </li>

      <li>
        <button className="hamburger" id="hamburgerBtn">
          <Image
            src="/menu.svg"
            alt="menu"
            className="menu"
            width={30}
            height={30}
          />
        </button>
      </li>
    </ul>
  </div>
</header>
                 

        <div className="hidden-x-side">

          {/** ヘッダー　画面サイズによってそれぞれ少し違う画像を適応する */}
          {/**ここのセクションがるみなす画面だわ */}
          <section className="hometop">
            <div className="night-sky">
              <picture>
                <source
                  media="(min-width:1024px)"
                  srcSet="/welcome/bg.png"
                />
                <Image
                  src="/welcome/bg.png"
                  alt=""
                  width={3000}
                  height={2000}
                  priority
                />
              </picture>
            </div>

            <div className="left_date">
              <Countdown targetDate="2026-06-26T23:59:59+09:00" /> {/*←翠翔祭の日程を入れる。数字は2桁*/}
              {/*<Finish />*/}
            </div>
          </section>

          <div className="mid_header">
            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_search">
                <h1 className=''>SEARCH</h1>
              </div>
            </div>
            <TopSelect />

            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_form">
                <h1 className=''>FORM</h1>
              </div>
            </div>
            <Form />
            {/*<Gresult />*/}   {/*formとGresultのどっちかのみ使用 */}

            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_news">
                <h1 className=''>NEWS</h1>
              </div>
            </div>
            <Announce />

            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_access">
                <h1 className=''>ACCESS</h1>
              </div>
            </div>
            <Access />
          </div>
        </div>
    </>
  );
};
