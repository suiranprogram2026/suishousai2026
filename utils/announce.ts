export type AnnounceItem = {
    id: number;
    title: string;
    detail: string;
    date: string;
}

export const announceItems: AnnounceItem[] = [
  { id: 2, title: "NEWSについて", detail: "ここでは準備期間から当日まで、翠翔祭に関する様々なお知らせを記載していきます。お楽しみに！", date:"2026.06.12" },
  { id: 1, title: "翠翔祭ホームーページ開設！", detail: "2026翠翔祭-Luminous-のホームページが遂に開設しました！順次情報を公開予定です。", date:"2026.06.12" },
  
];


console.log(announceItems[0].title);