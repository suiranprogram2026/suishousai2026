// /utils/festival.ts
export type FestivalItem = {
    //?がついてない奴は必須
    id: number;
    title: string;
    reading?: string;
    // 複数の属性を持たせるため、icon プロパティを attributes 配列に変更
    category: "play" | "food" | "stage" | "exhibition" | "shop" | "other";
    floor?: number;
    room?: string; // ←追加
    class: string;
    img: string;
    location?: string;
}

/** categoryについて　娯楽団体：play　調理食販団体：food　ステージ：stage　展示：exhibition　物販団体：shop */

export const festivalItems: FestivalItem[] = [
//{ id: 1, img: 'event_1.jpg←数字はidと一致', title: '企画名', reading: "企画名読み方", category: 上参照, floor: 階（マップ用）, class: "団体", room: マップのroomid, location: 開催教室（roomidでmapsvgと連動して、こっちをポップアップに表示する。},

    //1年
    { id: 1, img: 'event_1.jpeg', title: 'MaiDonald\'s～メイドナルド～', reading: "メイドナルド", category: "food", floor: 1, class: "1-1", location: "屋外テント", room:"hujidana3"},
    { id: 2, img: 'event_2.jpeg', title: '入試会場からの脱出', reading: "にゅうしかいじょうからのだっしゅつ", category: "play", floor: 4, class: "1-2", location: "1-2", room:"room-1-2"},
    { id: 3, img: 'event_3.gif', title: '翠run杯～最速を当てろ～', reading: "すいらんはい～さいそくをあてろ～", category: "play", floor: 4, class: "1-3", location : "1-3" , room:"room-1-3"},
    { id: 4, img: 'event_4.jpg', title: 'Focus on Gaming', reading: "ふぉーかすおんげーみんぐ", category: "play", floor: 4, class: "1-4",location: "1-4", room:"room-1-4"},
    { id: 5, img: 'event_5.jpeg', title: 'SVOC～翠嵐超美味クレープ～', reading: "すいらんべりーおいしいくれーぷ", category: "food", floor: 1, class: "1-5",location: "屋外テント",room:"keyaki2"},
    { id: 6, img: 'event_6.jpg', title: 'NO OIL NO LIFE', reading: "のーおいるのーらいふ", category: "food", floor: 1, class: "1-6", location: "屋外テント", room:"hujidana2"},
    { id: 7, img: 'event_7.jpg', title: 'escape with the maid', reading: "えすけいぷうぃずざめいど", category: "play", floor: 4, class: "1-7", location: "1-7", room:"room-1-7"},
    { id: 8, img: 'event_8.jpeg', title: 'レトロ喫茶　パーシモン', reading: "れとろきっさぱーしもん", category: "food", floor: 3, class: "1-8", location: "1-8", room:"room-1-8"},
    { id: 9, img: 'event_9.jpeg', title: 'Our School Kakehiki',reading: "あすか", category: "play", floor: 3, class: "1-9",location: "1-9", room:"room-1-9"},
    //2年
    { id: 10, img: 'event_10.png', title: '翠嵐ベースキャンプ', reading: "すいらんべーすきゃんぷ",category: "food", floor: 3, class: "2-1",location: "2-1", room:"room-2-1"},
    { id: 11, img: 'event_11.jpg', title: '八角勇貴の格付けチェック～あなたの格がハッカク？！～', reading: "やすみゆうきのかくづけちぇっく～あなたのかくがはっかく？！～", category: "play", floor: 3, class: "2-2", location: "2-2", room:"room-2-2"},
    { id: 12, img: 'event_12.jpg', title: '三好横丁八本通り', reading: "みよしよこちょうやつもとどおり", category: "food", floor: 3, class: "2-3", location: "2-3", room:"room-2-3"},
    { id: 13, img: 'event_13.jpg', title: 'メイドなんですわ', reading: "めいどなんですわ", category: "food", floor: 3, class: "2-4", location: "2-4", room:"room-2-4"},
    { id: 14, img: 'event_14.jpg', title: '新世紀サヴァイバル～残酷な戦士のアンチテーゼ～', reading: "しんせいきさばいばる～ざんこくなせんしのあんちてーぜ～", category: "play", floor: 2, class: "2-5", location: "3-3", room:"room-3-3"},
    { id: 15, img: 'event_15.jpeg', title: 'モンスター翠ンク', reading: "もんすたーすいんく", category: "play", floor: 2, class: "2-6", location: "2-6", room:"room-2-6"},
    { id: 16, img: 'event_16.png', title: '焼きそばTETSUO', reading: "やきそばてつお", category: "food", floor: 1, class: "2-7", location: "屋外テント", room:"keyaki3"},
    { id: 17, img: '', title: 'プリクランド～Cutie So Match～', reading: "ぷりくらんど～きゅーてぃーそーまっち～", category: "play", floor: 2, class: "2-8", location: "2-8", room:"room-2-8"},
    { id: 18, img: 'event_18.jpg', title: '衰乱神社の呪い', reading: "すいらんじんじゃののろい", category: "play", floor: 2, class: "2-9", location: "2-9", room:"room-2-9"},
    //3年
    { id: 19, img: 'event_19.jpeg', title: 'マリオカート31DX', reading: "まりおかーとさーてぃーんでらっくす", category: "play", floor: 2, class: "3-1", location: "3-1", room:"room-3-1"},
    { id: 20, img: 'event_20.jpg', title: 'モンスターハンター桑', reading: "もんすたーはんたーくわ", category: "play", floor: 1, class: "3-2", location: "3-2", room:"room-3-2"},
    { id: 21, img: 'event_21.jpg', title: '翡翠炭鉱', reading: "ひすいたんこう", category: "play", floor: 2, class: "3-3,3-6" ,location:"多目的室", room:"tamoku"},
    { id: 22, img: 'event_22.png', title: 'Nii パーティー', reading: "にーぱーてぃー", category: "play", floor: 2, class: "3-4", location:"3-4", room:"room-3-4"},
    { id: 23, img: 'event_23.jpeg', title: 'Shooting Rider　オサムパニック', reading: "しゅーてぃんぐらいだー　おさむぱにっく", category: "play", floor: 1, class: "3-5,3-8", location: "みらい館", room: "mirai"},
    { id: 24, img: 'event_24.jpg', title: 'フジー・ワッラー～翠嵐ホグワーツ～', category: "play", floor: 1, class: "3-7", location:"3-7", room:"room-3-7"},
    { id: 25, img: 'event_25.jpg', title: '込宮総合病院', reading: "こみやそうごうびょういん", category: "play", floor: 2, class: "3-9", location :"3-8", room:"room-3-8"},
    //部活・委員会・有志 
    { id: 26, img: 'event_26.jpeg', title: '翠嵐ゲームショウ　2026', reading: "すいらんげーむしょう　にーまるにーろく", category: "exhibition", floor: 3, class: "IT研究部", location: "情報室", room:"jyouhou"},
    { id: 27, img: 'event_27.jpg', title: '翠嵐王～早押しの極意～', reading: "すいらんおう～はやおしのごくい～", category: "play", floor: 1, class: "クイズ研究部", location:"化学実験室", room:"kagaku"},
    { id: 28, img: 'event_28.png', title: 'サッカービリヤード', reading: "さっかーびりやーど", category: "play", floor: 2, class: "サッカー部", location:"2-7後ろ", room:"room-2-7-back"},
    { id: 29, img: 'event_29.jpg', title: '翠嵐茶館', reading: "すいらんちゃかん", category: "food", floor: 2, class: "茶道部",location:"被服室", room:"hihuku"},
    { id: 30, img: 'event_30.png', title: 'わくわく！！バスケットラックアウト', category: "play", floor: 2, class: "バスケ部", location:"3-9前", room:"room-3-9-front"},
    { id: 31, img: 'event_31.png', title: '生徒会物販「のびるくん本舗」（イラストなし！！）', reading: "せいとかいぶっぱん「のびるくんほんぽ」", category: "shop", floor: 4, class: "生徒会執行部", location:"1-6後ろ", room:"room-1-6-back"},
    { id: 32, img: 'event_32.jpeg', title: '「あい」は世界を救うのか', reading: "あいはせかいをすくうのか", category: "play", floor: 4, class: "バドミントン部", location:"1-5後ろ",room:"room-1-5-back"},
    { id: 33, img: 'event_33.png', title: '水風戦～ハンド部員を撃沈せよ～', reading: "みずふうせん～はんどぶいんをげきちんせよ～", category: "play", floor: 1, class: "ハンドボール部", location:"部室棟", room:"busitu"},
    { id: 34, img: 'event_34.jpg', title: '翠翔祭ライブ', reading: "すいしょうさいライブ", category: "stage", floor: 1, class: "ポプソン", location:"テキサス", room:"tekisasu"},
    { id: 35, img: 'event_35.png', title: 'まじょのつくりかた', reading: "まじょのつくりかた", category: "exhibition", floor: 4, class: "演劇",location:"1-1", room:"room-1-1"},
    { id: 36, img: 'event_36.jpg', title: '科学部LAB', reading: "かがくぶらぼ", category: "play", floor: 2, class: "科学部", location:"物理実験室", room:"butsuri"},
    { id: 37, img: 'event_37.jpg', title: '棋道場～翠嵐Requiem～', reading: "きどうじょう～すいらんれくいえむ～", category: "play", floor: 2, class: "棋道部", location:"選択A", room:"senntakuA"},
    { id: 38, img: 'event_38.jpg', title: '翠嵐かるた道場', reading: "すいらんかるたどうじょう", category: "play", floor: 3, class: "競技かるた部", location:"書道室", room:"syodou-front"},
    { id: 39, img: 'event_39.jpg', title: '山岳部の山岳カレー', reading: "さんがくぶのさんがくかれー", category: "food", floor: 1, class: "山岳部",location:"屋外テント", room:"keyaki1"},
    { id: 40, img: 'event_40.jpeg', title: '写真作品展示', reading: "しゃしんさくひんてんじ", category: "exhibition", floor: 2, class: "写真部" ,location:"2階2棟3棟廊下", room:"path-2-2-3"},
    { id: 41, img: 'event_41.png', title: '書道作品展示', reading: "しょどうさくひんてんじ", category: "exhibition", floor: 3, class: "書道部", location:"3階1棟2棟廊下", room:"path-3-1-2"},
    { id: 42, img: 'event_42.jpg', title: '特別号配布', reading: "とくべつごうはいふ", category: "exhibition", floor: 2, class: "翠嵐時報", location:"2階1棟2棟廊下", room:"path-2-1-2-g"},
    { id: 43, img: 'event_43.jpg', title: 'とびだせすうがくの森', reading: "とびだせすうがくのもり", category: "play", floor: 4, class: "数学研究部" , location:"1-6前", room:"room-1-6-front" },
    { id: 44, img: 'event_44.jpg', title: 'あつまれ生き物の森', reading: "あつまれいきもののもり", category: "play", floor: 1, class: "生物部",location:"生物室", room:"seibutsu"},
    { id: 45, img: 'event_45.jpg', title: '鉄研ゲートウェイ', reading: "てっけんげーとうぇい", category: "play", floor: 3, class: "鉄道研究同好会", location:"社会科教室", room:"syakai"},
    { id: 46, img: 'event_46.jpg', title: '超てんもん部！', reading: "ちょうてんもんぶ", category: "play", floor: 3, class: "天文部" , location:"2-5", room:"room-2-5"},
    { id: 47, img: 'event_47.png', title: '芸術は爆発だ～翠嵐アートフロンティア～', reading: "げいじゅつはばくはつだ～すいらんあーとふろんてぃあ～", category: "shop", class: "美術部",location:"美術室",floor:3, room:"bijyutsu"},
    { id: 48, img: 'event_48.jpeg', title: '文芸部の足跡', reading: "ぶんげいぶのあしあと", category: "exhibition", floor: 2, class: "文芸部", location:"2階1棟2棟廊下", room:"path-2-1-2-c"},
    { id: 49, img: 'event_49.png', title: '漫研', reading: "まんけん", category: "shop", floor: 2, class: "漫研",location:"2-7前", room:"room-2-7-front"},
    { id: 50, img: 'event_50.jpg', title: '速球王', reading: "そっきゅうおう", category: "play", floor: 1, class: "野球部", location:"グラウンド", room:"graundo"},
    { id: 51, img: 'event_51.jpg', title: '神反応＆体内時計チャレンジ', reading: "かみたいおうあんどたいないどけいちゃれんじ", category: "play", floor: 2, class: "陸上部",location:"3-9後ろ", room:"room-3-9-back"},
    { id: 52, img: 'event_52.jpeg', title: 'beyond borde', category: "exhibition", floor: 4, class: "国際交流委員会", location:"1-5前", room:"room-1-5-front"},
    { id: 53, img: 'event_53.jpeg', title: 'ベーゴマ体験',reading:"べーごまたいけん", category: "play", floor: 3, class: "有志",location:"書道室", room:"syodou-back"},
    { id: 54, img: '', title: '定時制 イラスト・写真部', reading: "ていじせい いらすと・しゃしんぶ", category: "exhibition", floor: 1, class: "定時制", location:"3-6前", room:"room-3-6-front"},
    { id: 55, img: '', title: '翠嵐アジアンダイニング', reading: "すいらんあじあんだいにんぐ", category: "food", floor: 1, class: "定時制",location:"屋外テント", room:"hujidana1"},
    { id: 56, img: '', title: 'アジアンスイーツパラダイス', reading: "あじあんすいーつぱらだいす", category: "food", floor: 1, class: "定時制",location:"3-5", room:"room-3-5"},
    { id: 57, img: '', title: '定時制 多文化共生（イラストなし！！）', reading: "ていじせい たぶんかきょうせい", category: "exhibition", floor: 1, class: "定時制",location:"3-6後ろ", room:"room-3-6-back"},
    /*{ id: 58, img: 'event_58.jpg', title: 'AIと人間はどのように独自性と有用性に差が出るか',reading:"えーあいとにんげんはどのようにどくじせいとゆうようせいにさがでるか", category: "exhibition", floor: 1, class: "有志"},*/
    //ステージ
    { id: 59, img: 'event_59.jpeg', title: '夢走舞踊', reading: "むそうぶよう", category: "stage", class: "ダンス部", floor:1, room:"gym_stage", location:"体育館"},
    { id: 60, img: 'event_60.png', title: '風林火山', reading:"ふうりんかざん", category: "stage", class: "バスケ部", floor:1, room:"outdoor_stage", location:"野外ステージ"},
    { id: 61, img: '', title: 'ビンゴ大会', category: "stage", class: "生徒会執行部", floor:1, room:"outdoor_stage", location:"野外ステージ"},
    { id: 62, img: 'event_62.jpg', title: 'スイラン！ブラバン！ビックバン！', reading: "すいらん！ぶらばん！びっくばん！", category: "stage",class: "吹奏楽部", floor:1, room:"gym_stage", location:"体育館"},
    { id: 63, img: 'event_63.jpeg', title: 'スパゲティ', category: "stage", class: "吹奏楽部", floor:1, room:"outdoor_stage", location:"野外ステージ"},
    { id: 64, img: 'event_64.jpeg', title: 'ミントブルー', category: "stage", class: "吹奏楽部", floor:1, room:"gym_stage", location:"体育館"},
    { id: 65, img: 'event_65.jpg', title: '翠嵐ピアノの会', reading: "すいらんぴあののかい", category: "stage", class: "有志", floor:1, room:"gym_stage", location:"体育館"},
    { id: 66, img: 'event_66.jpg', title: '弦楽部', reading: "げんがくぶ", category: "stage", class: "弦楽部", floor:1, room:"gym_stage", location:"野外ステージ"},
    { id: 67, img: 'event_67.jpeg', title: 'Project Untitled', reading: "ぷろじぇくとあんたいとるど", category: "stage", class: "有志", floor:1, room:"gym_stage", location:"体育館"},
    { id: 68, img: 'event_68.jpg', title: 'どすこいコンテスト', category: "stage", class: "有志", floor:1, room:"outdoor_stage", location:"野外ステージ"},
    { id: 69, img: '', title: '多文化共生研究会', reading: "たぶんかきょうせいけんきゅうかい", category: "stage",class: "定時制", floor:1, room:"gym_stage", location:"体育館"},
    { id: 70, img: '', title: '朝鮮学校', reading: "ちょうせんがっこう", category: "stage", class: "有志", floor:1, room:"gym_stage", location:"体育館"},
    { id: 71, img: 'event_71.jpg', title: '音楽部', reading:"おんがくぶ", category: "stage", class:"音楽部", floor:1, room:"gym_stage", location:"体育館"},
 

    //その他
    { id: 73, img: 'event_73.jpg', title: '翠実本部', reading:"すいじつほんぶ", category: "other", class: "翠実総務", floor: 1, room:"seitokaisitsu", location:"生徒会室"},
    { id: 74, img: 'event_74.jpg', title: '軒下飲食スペース', reading:"のきしたいんしょくすぺーす", category: "other", class: "", floor: 1, location:"軒下", room:"nokisita"},
    { id: 75, img: 'event_75.jpg', title: '藤棚飲食スペース', reading:"ふじだないんしょくすぺーす", category: "other", class: "", floor: 1, location:"藤棚", room:"hujidana_space"},
    { id: 76, img: 'event_76.jpg', title: '食堂', reading:"しょくどう", category: "food", class: "有志", floor: 1, location:"食堂", room:"cafeteria"},
    { id: 77, img: 'event_77.jpg', title: 'PTA', reading:"ぴーてぃーえー", category: "other", class: "PTA", floor: 1, location:"定時制昇降口", room:"space"},
];
