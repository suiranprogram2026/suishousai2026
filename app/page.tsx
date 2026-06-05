"use client";

import Image from 'next/image';
import "./homepage.css"
import Form from '@/components/form/form';
import Gresult from '@/components/result/result';
import Announce from '@/components/announce/announce';
import Access from '@/components/access/access';
import TopSelect from '@/components/topselect/topselect';
import Finish from '@/components/finish/finish';
import Countdown from "../components/countdown/Countdown";

// Homeコンポーネント
export default function Home() {

  return (
    <>
        <div className="hidden-x-side">

          {/** ヘッダー　画面サイズによってそれぞれ少し違う画像を適応する */}
          <section className="headtop">
            <div className="headtop_top">
              <picture>
                <source
                  media="(min-width:1024px)"
                  srcSet="/welcome/top_pc.png"
                />
                <Image
                  src="/welcome/top_sp.png"
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
            {/*<div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_search">
                <h1>
                  <Image
                  src="/search.png"
                  alt="SEARCH"
                  width={500}
                  height={500}
                  priority
                  />
                </h1>
              </div>
            </div>
            <TopSelect />*/}

            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_form">
                <h1>
                 <Image
                   src="/form.png"
                   alt="FORM"
                   width={500}
                   height={500}
                   priority
                  />
                </h1>
              </div>
            </div>
            <Form />
            {/*<Gresult />*/}   {/*formとGresultのどっちかのみ使用 */}

            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_news">
                <h1>
                  <Image
                    src="/news.png"
                    alt="NEWS"
                    width={500}
                    height={500}
                    priority
                  />
                </h1>
              </div>
            </div>
            <Announce />

            <div className="headerbox_top">
              <div className="headerbox_left"></div>
              <div className="headerbox_right"></div>
              <div className="headerbox_titlearea headerbox_access">
                <h1>
                  <Image
                    src="/access.png"
                    alt="ACCESS"
                    width={500}
                    height={500}
                    priority
                  />
                </h1>
              </div>
            </div>
            <Access />
          </div>
        </div>
    </>
  );
};
