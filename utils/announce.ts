export type AnnounceItem = {
    id: number;
    title: string;
    detail: string;
}

const announceItems: announceItems: AnnounceItem[] = [
  { id: 1, title: "お知らせ1", detail: "メッセージ1" },
  { id: 2, title: "お知らせ2", detail: "メッセージ2" },
];

console.log(announceItems[0].title);