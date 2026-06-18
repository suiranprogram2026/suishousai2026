// /app/event/page.tsx
"use client";
import Image from 'next/image';
import Header from '../Header/Header';
import React, {
    useEffect,
    useState,
    useMemo,
    useRef,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { festivalItems } from "@/utils/festival";
import { FestivalDetail, festivalDetail } from '@/utils/festivaldetail';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { normalizeSearchString } from "@/utils/normalizeKana";
import "./event.css"
import { Button } from '../ui/button';

// 固定の属性候補（フィルター表示用）
const categories = [
    { value: "play", title: "娯楽団体" },
    { value: "food", title: "調理食販" },
    { value: "stage", title: "ステージ" },
    { value: "exhibition", title: "展示団体" },
    { value: "shop", title: "物販団体"}
] as const;


const EventPage: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const detailParam = searchParams.get("detail");

    const [openId, setOpenId] = useState<number | null>(null);


    const detailMap = useMemo(() => {
    return new Map<number, string>(
        festivalDetail.map((d) => [d.id, d.detail])
    );
}, []);

    const [detailCache, setDetailCache] = useState<Map<number, string>>(new Map());
    const [loadingId, setLoadingId] = useState<number | null>(null);

    useEffect(() => {
    let isMounted = true;

    const preloadDetails = async () => {
        for (const item of festivalItems) {

            // すでにキャッシュあればスキップ
            if (detailCache.has(item.id)) continue;

            const detail = detailMap.get(item.id);

            // ちょっとずつ読む（負荷軽減）
            await new Promise((r) => setTimeout(r, 50));

            if (!isMounted) return;

            setDetailCache((prev) => {
                const newMap = new Map(prev);
                newMap.set(item.id, detail ?? "詳細がありません");
                return newMap;
            });
        }
    };

    preloadDetails();

    return () => {
        isMounted = false;
    };
}, []);

    const id = searchParams.get("id");
    const roomParam = searchParams.get("room");
    const roomRefs = useRef<
        Record<string, HTMLDivElement | null>
    >({});

    // 検索とフィルターの状態管理
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    

    const pass = "ねお"
    const neo_name = "根尾 昂"
    const neo_eng = "NEO AKIRA"
    const neo_read = "ねお あきら"

    // クエリパラメータに基づく初期フィルター設定（必要に応じて）
    useEffect(() => {
        if (id) {
            const matchedCategory = categories.find(
                (c) => c.title.toLowerCase() === id.toLowerCase()
            );

            if (matchedCategory) {
                setSelectedCategory(matchedCategory.value);
            }
        }
    }, [id]);

    // ハンドラー
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const toggleCategoryFilter = (category: string) => {
        setSelectedCategory((prev) =>
            prev === category ? null : category
        );
    };

    // 正規化した検索文字列
    const normalizedSearchTerm = useMemo(
        () => normalizeSearchString(searchTerm),
        [searchTerm]
    );

    // フィルタリング：選択されたすべての属性が item.attributes に含まれるかを判定（AND 判定）
    const filteredItems = useMemo(() => {
        return festivalItems.filter((item) => {
            // タイトルと読みは既存の normalizeSearchString でチェック
            const itemSearchString = normalizeSearchString(item.title, item.reading);
            // class は既に正規化済みなのでそのままチェック
            const matchesTitleOrReading = itemSearchString.includes(normalizedSearchTerm);
            const matchesClass = (item.class ?? "").includes(normalizedSearchTerm);
            const matchesSearch = matchesTitleOrReading || matchesClass;

            const matchesCategory =
                selectedCategory === null ||
                item.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [normalizedSearchTerm, selectedCategory]);


    useEffect(() => {
        if (!roomParam) return;

        const timer = setTimeout(() => {
            const target = roomRefs.current[roomParam];

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [roomParam, filteredItems]);


    // 各属性に対応する固定のカテゴリ名を返す

    const getCategoryTitle = (category?: string) => {
        const found = categories.find((c) => c.value === category);
        return found?.title ?? "カテゴリ";
    };

    const fetchDetail = async (id: number) => {
        if (detailCache.has(id)) return;

        setLoadingId(id);

    const detail = detailMap.get(id);

        await new Promise((r) => setTimeout(r, 300));

        setDetailCache((prev) => {
            const newMap = new Map(prev);
            newMap.set(id, detail ?? "詳細がありません");
            return newMap;
        });

    setLoadingId(null);
    };

    const openDetail = (id: number) => {
        router.push(`/event?detail=${id}`);
    };

    useEffect(() => {
    if (!detailParam) return;

    const idNum = Number(detailParam);
       if (!Number.isNaN(idNum)) {
            setOpenId(idNum);
            fetchDetail(idNum);
        }
    }, [detailParam]);

    return (
        <main className="eventcontent">
            {/* ヘッダー */}
            <div className="toppers">
                <Header
                    title="EVENT"
                    backgroundImage="/header/header-pc.png"
                />
            </div>

            {/* メインコンテンツ */}
            <section className="e-content">
                <div className="e-search">
                    <label htmlFor="search" className="sr-only">
                        イベント検索
                    </label>
                    <input
                        id="search"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="イベントを検索..."
                        className="e-searchbox"
                    />
                    {searchTerm && (
                        <button className="e-clear" onClick={() => setSearchTerm('')}>
                            ×
                        </button>
                    )}
                </div>

                <div className="e-iconbox">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => toggleCategoryFilter(category.value)}
                            className={`e-iconnomal ${
                                selectedCategory === category.value
                                    ? "e-iconclick"
                                    : "e-iconunclick"
                            }`}
                            title={`フィルター: ${category.title}`}
                            aria-label={`フィルター: ${category.title}`}
                        >
                            <div className="e-icontitle">
                                {category.title}
                            </div>
                            
                        </button>
                    ))}
                </div>

                {/* イベントリスト */}
                <div className="e-eventbox">
                    <div className="e-eventbox-f">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <div
                                    className="container"
                                    key={index}
                                    ref={(el) => {
                                        if (item.room) {
                                            roomRefs.current[item.room] = el;
                                        }
                                    }}
                                >
                                    <div className="card">
                                        <div className="card-all">
                                            <div className="pic">
                                                <Image
                                                    className="piceve"
                                                    src={item?.img ? `/eventimg/${item.img}` : "/event/event.png"}
                                                    alt="画像を読み込めませんでした"
                                                    width={1000}
                                                    height={1000}
                                                    priority
                                                />
                                            </div>
                                            <div className="card-right">
                                                <div className="card-item-box">
                                                    <h2>{item.title}</h2>
                                                </div>
                                                <div className="pop_button_area">
                                                    <Drawer>
                                                        <DrawerTrigger asChild>
                                                            <button
                                                                className="pop_button_sec"
                                                                onClick={() => fetchDetail(item.id)}
                                                            >
                                                                詳細
                                                            </button>
                                                        </DrawerTrigger>

                                                        <DrawerContent>
                                                            <DrawerHeader>
                                                                <DrawerTitle>{item.title}</DrawerTitle>
                                                            </DrawerHeader>
                                                            <div className='event_detail'>
                                                                {loadingId === item.id
                                                                ? "読み込み中..."
                                                                : detailCache.get(item.id) ?? "データなし"} 
                                                            </div>
                                                            <DrawerFooter>
                                                                <DrawerClose asChild>
                                                                    <Button variant="outline" className="close-button">閉じる</Button>
                                                                </DrawerClose>
                                                            </DrawerFooter>
                                                        </DrawerContent>
                                                    </Drawer>
                                                    
                                                    <a href={`/map?id=${encodeURIComponent(item.title)}`}>
                                                        <button className="pop_button_sec">
                                                            マップ
                                                        </button>
                                                    </a>

                                                </div>

                                                <div className="card-about">
                                                    <p>開催団体 : {item.class}</p>
                                                    <p>場所 : {item.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>
                                {searchTerm === pass ? (
                                    <div className="all_neo">
                                        <div className="neo_all_cover">
                                            <div className="neo_l">
                                                <div className="neo_title_name">
                                                    {neo_name}
                                                </div>
                                                <div className="neo_title_eng">
                                                    {neo_eng}
                                                </div>
                                                <div className="neo_title_read">
                                                    {neo_read}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='nothing'>
                                        <div className="leftnot">
                                            <div className="leftnotbox">
                                                <Image
                                                    className="piceve"
                                                    src="/welcome/logo.png"
                                                    alt="画像を読み込めませんでした"
                                                    width={1000}
                                                    height={1000}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                        <div className='rightnot'>
                                            <div className="rightnotbox">該当項目はありません</div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default EventPage;
