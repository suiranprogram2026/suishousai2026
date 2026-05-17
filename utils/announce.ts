export type AnnounceItem = {
    id: number;
    title: string;
    detail: string;
    date: string;
}

export const announceItems: AnnounceItem[] = [
  { id: 1, title: "重大イベント！", detail: "高相先生による大検閲", date:"5/18" },
  { id: 2, title: "翠翔祭ホームーページ開設！", detail: "2026翠翔祭-Luminous-のホームページが遂に開設しました！順次情報を公開予定です。首を長くしてお待ちください。", date:"5/18" },
];


console.log(announceItems[0].title);