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
                        <div className="button_vot">
                            <p>一人一票でお願いします</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScF_e-cKg5SJXiHLFwcq0EraogXhJOiuHgQfN0XTJBc236-hQ/viewform?usp=header">投票する</a>
                        </div>
                        
                        
                    </div>
                   
                    <div className="formhow">
                        <h2>《投票方法》</h2>
                        <p>6/27,28の翠翔祭当日に、上のボタンから投票お願いします。</p>
                        {/*<p>上記の投票フォームから投票お願いします。
                        1人1回、各部門1団体投票してください。ただし、自分が所属する団体には投票できません。</p>*/}
                        <p>校内パンフレットからも投票可能です。</p>
                    </div>


                <div className="survey_box">
                    <div className="form_back">
                        <h2>-来場者アンケート-</h2>
                    </div>
                    <div className="anc">
                        <p>翠翔祭に関するアンケートです。次年度以降のためにご回答よろしくお願いします！</p>
                        <p>回答期限：6/30（火）まで</p>
                        <p>※翠嵐生は回答不要です</p>
                        <a href="https://forms.gle/iUrw2htZqmvdJGj99" 
                            className="inline-block
                                px-6 py-3 mt-6
                                bg-sky-500
                                text-white
                                font-bold
                                rounded-xl
                                shadow-lg
                                transition-all
                                duration-200
                                hover:scale-105
                                hover:shadow-xl
                                hover:bg-sky-400">アンケートに回答</a>
                    </div>
                    
                </div>
            </div>
        </div>    
        </>
    );
}
