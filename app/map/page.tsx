// /app/map/page.tsx

"use client";
import { Suspense } from "react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Map.module.css";
import { normalizeSearchString } from "@/utils/normalizeKana";
import { FestivalItem, festivalItems } from "@/utils/festival";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header/Header";
import SvgMap from "./SvgMap";

const floors = [1, 2, 3, 4];

function MapContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [activeFloor, setActiveFloor] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<FestivalItem | null>(null);
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
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


    //ポップアップ関連
    const handleRoomClick = (
        roomId: string,
        e: React.MouseEvent
    ) => {
        setSelectedRoom(roomId);
        setPopupPos({
            x: e.clientX,
            y: e.clientY,
        });
    };
    const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });
    const POPUP_WIDTH = 200;
    const POPUP_HEIGHT = 150; // だいたいでOK

    const clampPopup = (x: number, y: number) => {
        const margin = 10;

        const safeX = Math.min(
            window.innerWidth - POPUP_WIDTH - margin,
            Math.max(margin, x)
        );

    const safeY = Math.min(
        window.innerHeight - POPUP_HEIGHT - margin,
        Math.max(margin, y)
    );

    return { x: safeX, y: safeY };
    };


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


    const roomEvents = festivalItems.filter(
        item => item.location === selectedRoom
    );

    const roomInfo = festivalItems.find(
        (item) => item.room === selectedRoom
    );

    return (
        <div className={styles.outerContainer}>
            {/**トップ画像 */}
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
                            left: `${(activeFloor - 1) * (100 / floors.length)}%`,
                            width: `${100 / floors.length}%`,
                        }}
                    ></div>
                    {floors.map((floor) => (
                        <button
                            key={floor}
                            onClick={() => setActiveFloor(floor)}
                            className={
                                floor === activeFloor
                                    ? `${styles.button} ${styles.activeButton}`
                                    : styles.button
                            }
                        >
                            {floor}階
                        </button>
                    ))}
                </div>
            </div>

            {/* マップ表示部分 */}
            <div className={styles.mapWrapper}>
                {/* mapContainer は各ブレークポイントで固定ピクセルサイズに設定 */}
                <div className={styles.mapContainer} ref={mapContainerRef}>
                    <div className={styles.innerContainer}>
                        {[activeFloor].map((floor) => (
                                <div
                                    key={floor}
                                    className={styles.floor}
                                    style={{
                                        transform: `scale(${1 - (activeFloor - floor) * 0.1})`,
                                        zIndex: floor,
                                        transition: "transform 0.3s ease, opacity 0.3s ease",
                                        position: "absolute",
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        opacity: floor === activeFloor ? 1 : 0.05,
                                        pointerEvents:
                                        floor === activeFloor
                                            ? "auto"
                                            : "none",
                                    }}
                                >
                                    <SvgMap
                                        floor={floor}
                                        onRoomClick={(roomId, x, y) => {
                                            setSelectedRoom(roomId);
                                            setPopupPos(clampPopup(x, y));
                                        }}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/*凡例*/}
            <div className={styles.expContainer}>
                <div className={styles.expMap}>
                    <h1 className={styles.expMapExp}>
                        -凡例-
                    </h1>

                    <div className={styles.expCategory}>
                        <div className={`${styles.expBox} ${styles.boxPlay}`}>
                            <div className={styles.expClass}>0-0 (場所)</div>
                            <div className={styles.expTitle}>娯楽団体</div>
                        </div>
                        <div className={`${styles.expBox} ${styles.boxFood}`}>
                            <div className={styles.expClass}>0-0 (場所)</div>
                            <div className={styles.expTitle}>調理食販</div>
                        </div>
                        <div className={`${styles.expBox} ${styles.boxExhibition}`}>
                            <div className={styles.expClass}>0-0 (場所)</div>
                            <div className={styles.expTitle}>展示団体</div>
                        </div>
                        <div className={`${styles.expBox} ${styles.boxShop}`}>
                            <div className={styles.expClass}>0-0 (場所)</div>
                            <div className={styles.expTitle}>物販団体</div>
                        </div>
                        <div className={`${styles.expBox} ${styles.boxStage}`}>
                            <div className={styles.expClass}>0-0 (場所)</div>
                            <div className={styles.expTitle}>ステージ</div>
                        </div>
                    </div>

                    <div className={styles.expToilet}>
                        <div className={styles.expToiletInner}>
                            <Image 
                                src={"maps/mentoilet.svg"} 
                                alt={"男子トイレ"}
                                width={50}
                                height={50}
                            />
                            <p>男子トイレ</p>
                        </div>
                        <div className={styles.expToiletInner}>
                            <Image 
                                src={"maps/womentoilet.svg"} 
                                alt={"女子トイレ"}
                                width={50}
                                height={50}
                            />
                            <p>女子トイレ</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*ポップアップ*/}
            {selectedRoom && (
                <div
                    className={styles.popupOverlay}
                    onClick={() => setSelectedRoom(null)}
                >
                    <div
                        className={styles.popup}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: "fixed",
                            left: popupPos.x,
                            top: popupPos.y,
                        }}
                    >
                        <h2>{selectedRoom}</h2>
                        <h2>{roomInfo?.location ?? selectedRoom}</h2>
                        <h2>{roomInfo?.title ?? selectedRoom}</h2>

                        {roomEvents.map((event) => (
                        <div key={event.room}>
                            {event.room}
                        </div>
                        ))}

                        <button
                            className={styles.goButton}
                            onClick={() => {
                                router.push(`/event?room=${selectedRoom}`);
                            }}
                        >
                            詳細
                        </button>

                        <button
                            className={styles.closeButton}
                                onClick={() => setSelectedRoom(null)}
                        >
                            閉じる
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default function page(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <MapContent/>
        </Suspense>
    )
}