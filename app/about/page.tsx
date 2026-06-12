"use client"

import Header from "@/components/Header/Header";
import "./about.css"
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function About() {
    // 背景画像ラッパーに ref を貼る
    const leafRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!leafRef.current) return;
            const offset = window.scrollY * 0.3;
            leafRef.current.style.transform =
                `translate(-50%, calc(-65% + ${offset}px))`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
            <div className="toppers">
                <Header
                    title="ABOUT"
                    backgroundImage="/header/header-pc.png"
                />
            </div>
            <div className="about-pc-box">
                <div className="about-main">

                    <div className="background-about-img" ref={leafRef}>

                    </div>

                    <div className="about-suiran">
                        <h1>《翠翔祭について》</h1>
                        <p>翠翔祭とは毎年6月末に行われる神奈川県立横浜翠嵐高校の文化祭です。
                            昨年度は、約１万人の方々に来場いただきました。
                            今年度は昨年度よりも輝かしい翠翔祭を作るべく、生徒一人ひとりが様々な角度から準備に携わっています。
                            翠嵐生の集大成、ぜひお越しください！</p>
                    </div>
                    <div className="about-theme">
                        <h1>《テーマについて》</h1>
                        <p> 今年度のテーマ：Luminousには、「光を発する」や「輝く」、「照らす」のような意味があります。クラスや部活、委員会など
                            人それぞれの場所で活躍する生徒一人ひとりが照らされる翠翔祭にしたい！という願いを込めました。
                            二日限り、私たちの輝かしい翠翔祭をぜひご堪能下さい！</p>
                    </div>
                    <div className="about-top-member">
                        <h1>《翠翔祭実行委員会紹介》</h1>
                        <h3>2026年度全日制翠翔祭実行委員長</h3>
                        <h3>和田真典</h3>
                        <p>皆さんこんにちは！2026年度、翠翔祭実行委員長の和田真典です。新学年が始まってはや3ヶ月、
                        クラスや部活、そして我々翠翔祭実行委員会も、この翠翔祭に向けて全力で準備してきました。
                        翠嵐での高校生活の眩しい一幕であるこの翠翔祭を、ぜひ全力でお楽しみください！！
                        </p>
                        <h3>2026年度定時制翠翔祭実行委員長</h3>
                        <h3>田中佳也</h3>
                        <p>皆さんどうもこんにちは！こんばんは！定時制翠翔祭実行委員長の田中佳也です。
                            我々定時制には、海外にルーツを持つ生徒が多く在籍しています。異質なる様々な文化や考えを持つ中で、
                            一丸となって準備に取り組んでくれました。そんな翠嵐定時ならではの雰囲気が、この翠翔祭にとって
                            良いスパイスになると信じています！様々な面をもつこの翠嵐の翠翔祭を、ぜひお楽しみください！
                        </p>
                        <h2>〈総務部紹介〉</h2>
                        <p>翠翔祭の運営の中心となる総務部のメンバーを紹介します。</p>
                        <h3>-実行委員長-</h3>
                        <p>和田真典</p>
                        <h3>-副委員長兼ステージ部統括責任者-</h3>
                        <p>齋藤韻</p>
                        <h3>-会場長-</h3>
                        <p>清水友希乃</p>
                        <h3>-会計長-</h3>
                        <p>土井希映</p>
                        <h3>-アーチ・広報部統括責任者-</h3>
                        <p>帯谷美月</p>
                        <h3>-調理食販部統括責任者-</h3>
                        <p>内田智哉</p>
                        <h3>-SP部統括責任者-</h3>
                        <p>菊地真帆</p>
                        <h3>-プログラム部統括責任者-</h3>
                        <p>久保園純平</p>
                        
                    </div>
                    <div className="about-site">
                    </div>
                    <div className="member-picture">
                        {/*<Image
                            src="/member.jpg"
                            alt="総務ず"
                            width={3000}
                            height={1000}
                        />*/}
                    </div>

                </div>
            </div>
        </div>
    );
}
