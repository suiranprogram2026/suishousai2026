"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import styles from "../map/Map.module.css";
import { normalizeSearchString } from "@/utils/normalizeKana";
import { FestivalItem, festivalItems } from "@/utils/festival";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header/Header";

/**
 * カスタムフック：指定要素のサイズ（幅・高さ）を取得する
 */
function useContainerDimensions(ref: React.RefObject<HTMLElement>) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useEffect(() => {
        if (!ref.current) return;
        const updateDimensions = () => {
            const rect = ref.current!.getBoundingClientRect();
            setDimensions({ width: rect.width, height: rect.height });
        };
        updateDimensions();
        const resizeObserver = new ResizeObserver(() => updateDimensions());
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [ref]);
    return dimensions;
}

const towers = [1, 2, 3];

export default function mapver() {
    const searchParams = useSearchParams();
        const router = useRouter();
    
        const [activeFloor, setActiveFloor] = useState<number>(1);
        const [searchQuery, setSearchQuery] = useState<string>("");
        const [selectedItem, setSelectedItem] = useState<FestivalItem | null>(null);
        const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
        const [isInitialized, setIsInitialized] = useState(false);
    
        const normalizedSearchQuery = normalizeSearchString(searchQuery);
    
        const suggestions = searchQuery
            ? festivalItems.filter((item) => {
                const normalizedTitle = normalizeSearchString(item.title);
                const normalizedReading = item.reading ? normalizeSearchString(item.reading) : "";
                const normalizedClass = item.class ? normalizeSearchString(item.class) : "";
    
                return (
                    normalizedTitle.includes(normalizedSearchQuery) ||
                    normalizedReading.includes(normalizedSearchQuery) ||
                    normalizedClass.includes(normalizedSearchQuery)
                );
            })
            : [];
    
        // URLのクエリパラメータ "id" をチェックし、あれば対象のイベントを選択し、検索ボックスに反映
        useEffect(() => {
            const id = searchParams.get("id");
    
            if (id !== null && id !== "") {
                const decodedId = decodeURIComponent(id);
                const foundEvent = festivalItems.find(
                    (item) => item.title === decodedId
                );
                if (foundEvent) {
                    setSelectedItem(foundEvent);
                    setSearchQuery(foundEvent.title);
                    setActiveFloor(foundEvent.floor!);
                } else {
                    setSelectedItem(null);
                    setSearchQuery("");
                }
            } else {
                setSelectedItem(null);
                setSearchQuery("");
            }
    
            // 初期化完了フラグをON
            setIsInitialized(true);
        }, []);
    
        useEffect(() => {
            if (!isInitialized) return;
    
            router.push(`?id=${encodeURIComponent(searchQuery)}`, { scroll: false });
        }, [searchQuery, isInitialized]);
    
        // マップコンテナの ref（CSS で各ブレークポイントごとに固定ピクセル指定）
        const mapContainerRef = useRef<HTMLDivElement>(null);
        const { width: mapWidth, height: mapHeight } = useContainerDimensions(
            mapContainerRef
        );

    return(
        <div>
            <div className="toppers">
                <Header
                    title="MAP"
                    backgroundImage="/header/header-pc.png"
                />
            </div>
            {/* サーチボックス */}
            <div className={styles.header}>
                <div className={styles.Esearch}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowSuggestions(true);
                        }}
                        className={styles.searchInput}
                        placeholder="イベントを検索..."
                    />
                    {searchQuery && (
                        <button className={styles.Eclear} onClick={() => setSearchQuery('')}>
                            ×
                        </button>
                    )}
                </div>
                {showSuggestions && suggestions.length > 0 && (
                    <div className={styles.suggestionList}>
                        {suggestions.map((item, index) => (
                            <div
                                key={index}
                                className={styles.suggestionItem}
                                onClick={() => {
                                    setSelectedItem(item);
                                    setActiveFloor(item.floor!);
                                    setSearchQuery(item.title);
                                    setShowSuggestions(false);
                                }}
                            >
                                <div className={styles.suggestionClass}>{item.class}</div>
                                <div className={styles.suggestionTitle}>{item.title}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* 階層選択ボタン（ヘッダー内配置） */}
            <div className={styles.floorSelector}>
                <div className={styles.buttonContainer}>
                    <div
                        className={styles.slider}
                        style={{
                            left: `${(activeFloor - 1) * (100 / towers.length)}%`,
                            width: `${100 / towers.length}%`,
                        }}
                    ></div>
                    {towers.map((tower) => (
                        <button
                            key={tower}
                            onClick={() => setActiveFloor(tower)}
                            className={
                                tower === activeFloor
                                    ? `${styles.button} ${styles.activeButton}`
                                    : styles.button
                            }
                        >
                            {tower}棟
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.mapContent}>
            {activeFloor === 1 && (
                <div>
                    <h2>1棟のイベント一覧</h2>
                    <p>ここに1棟の地図や情報を表示</p>
                </div>
            )}
            {activeFloor === 2 && (
                <div>
                    <h2>2棟のイベント一覧</h2>
                    <p>ここに2棟の地図や情報を表示</p>
                </div>
            )}
            {activeFloor === 3 && (
                <div>
                    <h2>3棟のイベント一覧</h2>
                    <p>ここに3棟の地図や情報を表示</p>
                </div>
             )}
            </div>
        </div>
    )
}