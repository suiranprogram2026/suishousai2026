import "./form.css"
import Image from 'next/image';

export default function Form() {

    return (
        <>
            <div className="form">
                <div className="form_back">
                    <Image
                        className="form_topper"
                        src="/about/form.png"
                        alt=""
                        width={2000}
                        height={1000}
                        priority
                    />
                </div>
                <div className="form_content">
                    <div className="formabout">
                        <h2>《翠翔祭グランプリとは》</h2>
                        <p>企画部門、調理食販部門、ステージ部門、立て看板部門の４部門に分かれて、在校生及び来場者の人気を競います。</p>
                        <p>翠翔祭二日間で最も票を集めた団体がグランプリ獲得です！</p>
                        {/*<div className="button_vot">
                            <p>一人一票でお願いします</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScF_e-cKg5SJXiHLFwcq0EraogXhJOiuHgQfN0XTJBc236-hQ/viewform?usp=header">投票する</a>
                        </div>*/}
                    </div>
                   
                    {/*<div className="formhow">
                        <h2>《投票方法》</h2>
                        <p>6/27,28の翠翔祭当日に、上のボタンから投票お願いします。</p>
                        <p>校内パンフレットからも投票可能です。</p>
                    </div>*/}
            </div>
        </div>    
        </>
    );
}
