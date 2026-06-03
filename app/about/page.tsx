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
                            昨年度は、約3万人の方々に来場いただきました。
                            今年は昨年度よりも輝かしい翠翔祭を作るべく、生徒一人ひとりが様々な角度から準備に携わっています。
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
                        <h3>2025年度全日制翠翔祭実行委員長</h3>
                        <h3>和田真典</h3>
                        <p>皆さんこんにちは！2026年度、翠翔祭実行委員長の和田真典です。
                            今年度の翠翔祭のテーマ「Luminous」には、「光」や「輝く」といった意味があり、
                            生徒全員が輝けるような文化祭にしようという願いが込められています。
                            翠嵐での高校生活の眩しい一幕であるこの翠翔祭を、ぜひ全力でお楽しみください！！</p>
                        <h3>2025年度定時制翠翔祭実行委員長</h3>
                        <h3>夏見希海</h3>
                        <p>2025年度も無事文化祭を迎えることができたこと、とても嬉しく思います。
                            今年度の翠翔祭テーマである『Neo』には翠嵐生の未来や希望も詰まっていると私は思います。
                            昨年度とはまたひと味違う翠翔祭を是非皆さん楽しんでください！
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
                        <h2>〈サイト開発担当〉</h2>
                        <p>ホームページの作成に携わった主なメンバーを紹介します。</p>
                        <h3>-サイト監修-</h3>
                        <p>久保園純平</p>
                        

                        <p>協力してくださった皆さん、ありがとうございました</p>
                    </div>
                    <div className="member-picture">
                        <Image
                            src="/member.jpg"
                            alt="総務ず"
                            width={3000}
                            height={1000}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
