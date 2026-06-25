export type AnnounceItem = {
    id: number;
    title: string;
    detail: string;
    date: string;
}

export const announceItems: AnnounceItem[] = [
  { id: 4, title: "タイムテーブル公開！", detail: "翠翔祭１日目・２日目のタイムテーブルを公開しました！ただし、台風の影響で屋外ステージのタイテは変更の可能性があります。続報をお待ちください。", date:"2026.06.26" }, 
  { id: 3, title: "あと４日！", detail: "翠翔祭まで残りわずか！みなさん、学校ホームーページからのお申込みはお済ですか？右上の水色のボタンからよろしくお願いいたします。", date:"2026.06.23" },
  { id: 2, title: "NEWSについて", detail: "ここでは準備期間から当日まで、翠翔祭に関する様々なお知らせを記載していきます。お楽しみに！", date:"2026.06.12" },
  { id: 1, title: "翠翔祭ホームページ開設！", detail: "2026翠翔祭-Luminous-のホームページが遂に開設しました！順次情報を公開予定です。", date:"2026.06.12" },
  
];


console.log(announceItems[0].title);