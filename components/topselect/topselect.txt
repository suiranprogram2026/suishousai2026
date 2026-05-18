import styles from "./topselect.module.css"
import Image from 'next/image';

export default function TopSelect() {
    return (
        <>
            <div className={styles.topselect}>
                <div className={`${styles.circle} ${styles.event}`}>
                    <a href="/event"className={styles.circle}>イベント検索</a>
                    <div className={styles.iconWrap}>
                        <Image
                            className={styles.topicon}
                            src="/topsearch/search.svg"
                            alt=""
                            width={1000}
                            height={1000}
                            priority                            
                        />
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <div className={`${styles.circle} ${styles.map}`}>
                        <a href="/map" className={styles.circle}>校内マップ</a>
                        <div className={styles.iconWrap}>
                            <Image
                                className={styles.topicon}
                                src="/topsearch/map.svg"
                                alt=""
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                    </div>

                    <div className={`${styles.circle} ${styles.timetable}`}>
                        <a href="/timetable" className={styles.circle}>タイムテーブル</a>
                        <div className={styles.iconWrap}>
                            <Image
                                className={styles.topicon}
                                src="/topsearch/calendar.svg"
                                alt=""
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}





   