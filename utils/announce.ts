export type AnnounceItem = {
    id: number;
    title: string;
    detail: string;
    date: string;
}

export const announceItems: AnnounceItem[] = [
  { id: 1, title: "お知らせ1", detail: "ウェブ開発を本格的に始めます。ｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄｄ", date:"2/15" },
  { id: 2, title: "お知らせ2", detail: "メッセージ2", date:"1/10" },
  { id: 3, title: "お知らせ2", detail: "メッセージ2", date:"1/10" },
  { id: 4, title: "お知らせ2", detail: "メッセージ2", date:"1/10" },
  { id: 5, title: "お知らせ2", detail: "メッセージ2", date:"1/10" },
];


//idいらんくね？

console.log(announceItems[0].title);