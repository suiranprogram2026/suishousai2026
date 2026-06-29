import "./result.css"
import Image from "next/image"
import React from "react"

export default function Gresult() {
    return (
        <div className="result">
            <div className="result_content">
            <h2>《結果発表》</h2>
                <div className="result_normal">
                    <h3>企画部門</h3>
                    <ol className="list">
                        <li>込宮総合病院（3-9）</li>
                        <li>Shooting Rider オサムパニック<p>（3-5,3-8）</p></li>
                        <li>プリクランド〜Cutie So Match〜<p>（2-8）</p></li>
                        <li>翡翠炭鉱（3-3,3-6）</li>
                        <li>モンスターハンター桑（3-2）</li>
                    </ol>
                </div>
                <div className="result_normal">
                    <h3>調理食販部門</h3>
                    <ol className="list">
                        <li>NO OIL NO LIFE（1-6）</li>
                        <li>SVOC ～翠嵐超美味クレープ～（1-5）</li>
                        <li>MaiDonald's ～メイドナルド～（1-1）</li>
                        <li>山岳部の山岳カレー（山岳部）</li>
                        <li>焼きそばTETSUO（2-7）</li>
                    </ol>
                </div>
                <div className="result_normal">
                    <h3>ステージ部門</h3>
                    <ol className="list">
                        <li>夢走舞踊（ダンス部）</li>
                        <li>スイラン・ブラバン・ビッグバン！（吹奏楽部）</li>
                        <li>弦楽部</li>
                        <li>どすこいコンテスト（有志）</li>
                        <li>音楽部</li>
                    </ol>
                </div>
                <div className="result_normal">
                    <h3>立て看板部門</h3>
                    <ol className="list">
                        <li>Shooting Rider オサムパニック<p>（3-5,3-8）</p></li>
                        <li>込宮総合病院（3-9）</li>
                        <li>フジー・ワッラー ～翠嵐ホグワーツ～（3-7）</li>
                        <li>八角勇貴の格付けチェック ～あなたの格がハッカク！？～（2-2）</li>
                        <li>翡翠炭鉱（3-3,3-6）</li>
                    </ol>
                </div>
                </div>
        </div>
    )
}
