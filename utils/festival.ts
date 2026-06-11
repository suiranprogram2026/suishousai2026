// /utils/festival.ts
export type FestivalItem = {
    //?がついてない奴は必須
    id: number;
    title: string;
    reading?: string;
    // 複数の属性を持たせるため、icon プロパティを attributes 配列に変更
    category: "play" | "food" | "stage" | "exhibition" | "shop";
    floor?: number;
    room?: string; // ←追加
    class: string;
    img: string;
    location?: string;
}

/** categoryについて　娯楽団体：play　調理食販団体：food　ステージ：stage　展示：exhibition　物販団体：shop */

export const festivalItems: FestivalItem[] = [
//{ id: 1, img: 'event_1.jpg←数字はidと一致', title: '企画名', reading: "企画名読み方", attributes: [Sun,Moon]上参照, floor: 階（マップ用）, class: "団体", room: マップのroomid, location: 開催教室（roomidでmapsvgと連動して、こっちをポップアップに表示する。},

    //1年
    { id: 1, img: 'event_1.jpg', title: 'みぞぐちのみぞしる”ミゾベガス”～かけるなら今でしょ～', reading: "みぞぐちのみぞしる”ミゾベガス”～かけるならいまでしょ～", category: "play", floor: 2, class: "1-1", location: "aaaaaa"},
    { id: 2, img: 'event_2.jpg', title: '謎解き縁日', reading: "なぞときえんにち", category: "play", floor: 4, class: "1-2"},
    { id: 3, img: 'event_3.jpg', title: '焼き鳥屋喜鳥', reading: "やきとりやきとり", category: "play", floor: 1, class: "1-3"},
    { id: 4, img: 'event_4.jpg', title: '清水の国のアリス', reading: "しみずのくにのありす", category: "play", floor: 4, class: "1-4"},
    { id: 5, img: 'event_5.png', title: 'たこ焼きたべChina!!', reading: "たこやきたべちゃいな", category: "play", floor: 1, class: "1-5"},
    { id: 6, img: 'event_6.jpg', title: '衰乱研究所～覚悟を持って入所してください～', reading: "すいらんけんきゅうじょ～かくごをもってにゅうしょしてください～", category: "play", floor: 4, class: "1-6"},
    { id: 7, img: 'event_7.jpg', title: '込宮隆の失踪', reading: "こみやたかしのしっそう", category: "play", floor: 4, class: "1-7"},
    { id: 8, img: 'event_8.jpg', title: 'SUPER SUITENDO WORLD', reading: "すーぱーすいてんどーわーるど", category: "play", floor: 3, class: "1-8"},
    { id: 9, img: 'event_9.png', title: 'おばけたたき', category: "play", floor: 3, class: "1-9"},
    //2年
    { id: 10, img: 'event_10.jpg', title: 'をかしなお菓子', reading: "をかしなおかし",category: "play", floor: 2, class: "2-1"},
    { id: 11, img: 'event_11.jpg', title: '純喫茶 翠晶浪漫', reading: "じゅんきっさ すいしょうろまん", category: "play", floor: 3, class: "2-2"},
    { id: 12, img: 'event_12.jpg', title: 'パイレーツ呪われた嶋', reading: "のろわれたしま", category: "play", floor: 3, class: "2-3"},
    { id: 13, img: 'event_13.jpg', title: 'HASEGAWAFFLE', reading: "はせがわっふる", category: "play", floor: 1, class: "2-4"},
    { id: 14, img: 'event_14.png', title: 'マッスルカフェ！', reading: "まっするかふぇ", category: "play", floor: 1, class: "2-5"},
    { id: 15, img: 'event_15.jpg', title: 'トイ・ニイベ・マニア！', reading: "とい・にいべ・まにあ", category: "play", floor: 2, class: "2-6"},
    { id: 16, img: 'event_16.jpg', title: '翠嵐クレープ～モリヤの翠イーツ屋さん～', reading: "すいらんくれーぷ～もりやのすいーつやさん～", category: "play", floor: 1, class: "2-7"},
    { id: 17, img: 'event_17.jpg', title: '翔涼祭', reading: "しょうりょうさい", category: "play", floor: 2, class: "2-8"},
    { id: 18, img: 'event_18.jpg', title: '末包の囁き', reading: "すえかねのささやき", category: "play", floor: 2, class: "2-9"},
    //3年
    { id: 19, img: 'event_19.jpg', title: 'スナダン・ジョーンズ～宝を隠す山～', reading: "すなだん・じょーんず～たからをかくすやま～", category: "play", floor: 2, room: "3-6", class: "3-1,3-2"},
    { id: 20, img: 'event_20.jpg', title: '新世紀翠嵐シューティングコースター～全授業数学化計画～', reading: "しんせいきすいらんしゅーてぃんぐこーすたー～ぜんじゅぎょうすうがくかけいかく～", category: "play", floor: 1, class: "3-3,3-5"},
    { id: 21, img: 'event_21.jpg', title: 'MOMI of Terror', reading: "もみおふてらー", category: "play", floor: 1, class: "3-4"},
    { id: 22, img: 'event_22.jpg', title: 'あつまれ！かとひろの森', reading: "あつまれ！かとひろのもり", category: "play", floor: 2, class: "3-6"},
    { id: 23, img: 'event_23.jpg', title: 'Shooting Rider オサムパニック', reading: "シューティングライダーおさむパニック", category: "play", floor: 1, class: "3-5,3-8", room: "mirai", location: "みらい館"},
    { id: 24, img: 'event_24.jpg', title: 'えじえじのはちみつのりハント', category: "play", floor: 1, class: "3-8"},
    { id: 25, img: 'event_25.gif', title: 'DESCAFE Excella', reading: "ですかふぇ えくせら", category: "play", floor: 2, class: "3-9"},
    //部活・委員会・有志 
    { id: 26, img: 'event_26.gif', title: '圧倒的IT研究部', reading: "あっとうてきあいてぃーけんきゅうぶ", category: "play", floor: 3, class: "IT研究部"},
    { id: 27, img: 'event_27.jpg', title: '横浜翠嵐高校 校歌うたうま選手権in翠翔祭', reading: "よこはますいらんこうこう こうかうたうませんしゅけん", category: "play", floor: 4, class: "SHBC"},
    { id: 28, img: 'event_28.jpg', title: '翠嵐王', reading: "すいらんおう", category: "play", floor: 1, class: "クイズ研究部"},
    { id: 29, img: 'event_29.jpg', title: '三苫の1mmゲーム', reading: "みとまのいちみり", category: "play", floor: 2, class: "サッカー部"},
    { id: 30, img: 'event_30.jpg', title: 'わくわく！バスケットラックアウト', category: "play", floor: 2, class: "バスケ部"},
    { id: 31, img: 'event_31.png', title: 'みねとひあさのかみかくし', category: "play", floor: 4, class: "バド部"},
    { id: 32, img: 'event_32.jpg', title: 'ハンドボール 水風船', reading: "ハンドボール みずふうせん", category: "play", floor: 1, class: "ハンド部"},
    { id: 33, img: 'event_33.jpg', title: 'ベーゴマ体験', reading: "ベーゴマたいけん", category: "play", floor: 3, class: "ベーゴマ愛好"},
    { id: 34, img: 'event_34.jpg', title: '翠翔祭ライブ', reading: "すいしょうさいライブ", category: "play", floor: 1, class: "ポプソン"},
    { id: 35, img: 'event_35.png', title: '九宝祭～翠嵐サラダボウル～', reading: "くほうさい～すいらんさらだぼうる～", category: "play", floor: 3, class: "演劇"},
    { id: 36, img: 'event_36.jpg', title: '科学部LAB', reading: "かがくぶらぼ", category: "play", floor: 2, class: "科学部"},
    { id: 37, img: 'event_37.png', title: '王手！ 盤上の祭典in翠嵐', reading: "おうて！ ばんじょうのさいてんいんすいらん", category: "play", floor: 1, class: "棋道部"},
    { id: 38, img: 'event_38.jpg', title: '翠嵐かるた道場', reading: "すいらんかるたどうじょう", category: "play", floor: 3, class: "競技かるた部"},
    { id: 39, img: 'event_39.png', title: '翠嵐 Global Connection', reading: "すいらんぐろーばるこねくしょん", category: "play", floor: 3, class: "国際交流"},
    { id: 40, img: 'event_40.png', title: '写真部作品展示', reading: "しゃしんぶさくひんてんじ", category: "play", floor: 2, class: "写真部"},
    { id: 41, img: 'event_41.jpg', title: '翠嵐書道展', reading: "すいらんしょどうてん", category: "play", floor: 3, class: "書道部"},
    { id: 42, img: 'event_42.jpg', title: '新聞配布', reading: "しんぶんはいふ", category: "play", floor: 3, class: "翠嵐時報"},
    { id: 43, img: 'event_43.png', title: 'あつまれすうがく村', reading: "あつまれすうがくむら", category: "play", floor: 1, class: "数学研究部"},
    { id: 44, img: 'event_44.jpg', title: 'のびるくん本舗', reading: "のびるくんほんぽ", category: "play", floor: 4, class: "生徒会"},
    { id: 45, img: 'event_45.jpg', title: '文化祭の情熱の半分でいいから生物部に分けて頂戴', reading: "ぶんかさいのじょうねつのはんぶんでいいからせいぶつぶにわけてちょうだい", category: "play", floor: 1, class: "生物部"},
    { id: 46, img: 'event_46.jpg', title: '翠嵐茶館', reading: "すいらんちゃかん", category: "play", floor: 2, class: "茶道部"},
    { id: 47, img: 'event_47.jpg', title: '鉄道研究同好会', reading: "てつどうけんきゅうぶ", category: "play", floor: 3, class: "鉄道研究同好"},
    { id: 48, img: 'event_48.jpg', title: 'プラネタリウムと展示', reading: "ぷらねたりうむとてんじ", category: "play", floor: 3, class: "天文部"},
    { id: 49, img: 'event_49.jpg', title: '翠嵐万博～アートパビリオン～', reading: "すいらんばんぱく～あーとぱびりおん～", category: "play", floor: 3, class: "美術部"},
    { id: 50, img: 'event_50.png', title: '文芸部の無料部誌配布', reading: "ぶんげいぶのむりょうぶしはいふ", category: "play", floor: 3, class: "文芸部"},
    { id: 51, img: 'event_51.png', title: 'まんけん2025', category: "play", floor: 4, class: "漫研"},
    { id: 52, img: 'event_52.jpg', title: '速球王', reading: "そっきゅうおう", category: "play", floor: 1, class: "野球部"},
    { id: 53, img: 'event_53.png', title: 'ぴったり走れ!全力Q&RUN!', reading: "ぴったりはしれ！ぜんりょくきゅーあんどらん", category: "play", floor: 2, class: "陸上競技部"},
    { id: 54, img: 'event_54.png', title: '異世界ツアーからの脱出', reading: "いせかいつあーからのだっしゅつ", category: "play", floor: 2, class: "有志"},
    { id: 55, img: 'event_55.jpg', title: '3D空中構造ゼミ 探求発表', reading: "すりーでぃーくうちゅうこうぞうぜみ たんきゅうはっぴょう", category: "play", floor: 1, class: "有志"},
    { id: 56, img: 'event_56.png', title: '[革命]学生一人で企画やってみたPt(n+1)', reading: "[かくめい]がくせいひとりできかくやってみたPt(n+1)", category: "play", floor: 2, class: "有志"},
    { id: 57, img: 'event_57.jpg', title: 'アジアンダイニングスイランパラダイス', reading: "あじあんだいにんぐぱらだいす", category: "play", floor: 1, class: "定時制"},
    { id: 58, img: 'event_58.png', title: '定時制 多文化共生研究会', reading: "ていじせい たぶんかきょうせいけんきゅうかい", category: "play", floor: 3, class: "多文化共生"},
    { id: 59, img: 'event_59.jpg', title: 'アジアンスイーツパラダイス', reading: "あじあんすいーつぱらだいす", category: "play", floor: 2, class: "定時制3,4年"},
    { id: 60, img: 'event_60.jpg', title: 'イラスト・写真部', reading: "いらすと・しゃしんぶ", category: "play", floor: 4, class: "イラスト写真"},
    //ステージ
    { id: 61, img: 'event_61.jpg', title: '演劇「僕らの生徒会戦争」', reading: "えんげき「ぼくらのせいとかいせんそう」", category: "play", floor: 1, class: "生徒会"},
    { id: 62, img: 'event_62.png', title: 'ミントブルー', category: "play", floor: 1, class: "吹奏楽部"},
    { id: 63, img: 'event_63.jpg', title: 'Crown Quintet the 2nd', reading: "くらうんくいんてっとざせかんど", category: "play", floor: 1, class: "有志"},
    { id: 64, img: 'event_58.png', title: '定時制 多文化共生', reading: "ていじせい たぶんかきょうせい", category: "play", floor: 1, class: "定時制"},
    { id: 65, img: 'event_65.jpg', title: 'バスケットボール部', reading: "ばすけっとぼーるぶ", category: "play", floor: 1, class: "バスケ部"},
    { id: 66, img: 'event_66.png', title: '翠嵐スター発掘', reading: "すいらんすたーはっくつ", category: "play", floor: 1, class: "翠実総務"},
    { id: 67, img: 'event_67.png', title: 'すぱげてぃ', category: "play", floor: 1, class: "吹奏楽部"},
    { id: 68, img: 'event_68.png', title: 'ミスミス・裏ミスミス', reading: "みすみす・うらみすみす", category: "play", floor: 1, class: "翠実総務"},
    { id: 69, img: 'event_69.jpg', title: 'スイラン・ブラバン・ビックバン！', reading: "すいらん・ぶらばん・びっくばん", category: "play", floor: 1, class: "吹奏楽部"},
    { id: 70, img: 'event_70.jpg', title: '弦楽部', reading: "げんがくぶ", category: "play", floor: 1, class: "弦楽部"},
    { id: 71, img: 'event_71.jpg', title: '書道部', reading: "しょどうぶ", category: "play", floor: 1, class: "書道部"},
    { id: 72, img: 'event_72.jpg', title: 'ダンス部', reading: "だんすぶ", category: "play", floor: 1, class: "ダンス部"},
    { id: 73, img: 'event_73.png', title: '音楽部', reading: "おんがくぶ", category: "play", floor: 1, class: "音楽部"},
    { id: 74, img: 'event_74.png', title: '朝鮮学校舞踊部', reading: "ちょうせんがっこうぶようぶ", category: "play", floor: 1, class: "有志"},
];
