"use client";
import React, { useMemo, useState } from 'react';
import './TimeTable.css';
import Header from '../Header/Header';
import { festivalDetail, FestivalDetail } from '@/utils/festivaldetail';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Button } from '../ui/button';

type Event = { id: string; stage: 'outdoor' | 'gym'; start: string; end: string; title: string; cell: number; };

const startHour = 9;
const endHour = 16; // 16:00
const totalHours = endHour - startHour;
const rowHeight = 120; // px per hour
const hours = Array.from({ length: totalHours + 1 }, (_, i) => startHour + i);

// parse "HH:MM" to decimal hours
const parseTime = (time: string): number => {
    const [h, m] = time.split(':').map(Number);
    return h + m / 60;
};

// format decimal hours to "HH:MM"
const formatTime = (dec: number): string => {
    const h = Math.floor(dec);
    const m = Math.round((dec - h) * 60);
    const mm = m.toString().padStart(2, '0');
    return `${h}:${mm}`;
};

const getInitialDay = (): number => {
    const today = new Date();
    const date = today.getDate();
    return date <= 28 ? 1 : 2;
};

// sampleEvents: start/end as "HH:MM"
const sampleEvents: Record<number, Event[]> = {
    1: [
        { id: 'e1', cell: 62, stage: 'gym', start: '09:40', end: '10:10', title: 'スイラン！ブラバン！ビックバン！' },
        { id: 'e2', cell: 71, stage: 'gym', start: '10:40', end: '11:10', title: '音楽部' },
        { id: 'e3', cell: 41, stage: 'gym', start: '11:35', end: '11:55', title: '書道部' },
        { id: 'e4', cell: 70, stage: 'gym', start: '12:15', end: '12:30', title: '朝鮮学校' },
        { id: 'e5', cell: 69, stage: 'gym', start: '12:35', end: '13:05', title: '定時制多文化共生研究会' },
        { id: 'e6', cell: 66, stage: 'gym', start: '13:20', end: '13:50', title: '弦楽部'},
        { id: 'e7', cell: 59, stage: 'gym', start: '14:25', end: '15:10', title: '夢走舞踊（ダンス部）'},

    ],
    2: [
        { id: 'e11', cell: 59, stage: 'gym', start: '09:40', end: '10:25', title: '夢走舞踊（ダンス部）' },
        { id: 'e12', cell: 67, stage: 'gym', start: '11:00', end: '11:20', title: 'Project Untitled' },
        { id: 'e13', cell: 66, stage: 'gym', start: '11:50', end: '12:20', title: '弦楽部' },
        { id: 'e14', cell: 65, stage: 'gym', start: '12:45', end: '13:25', title: '翠嵐ピアノの会' },
        { id: 'e15', cell: 71, stage: 'gym', start: '13:45', end: '14:15', title: '音楽部' },
        { id: 'e16', cell: 62, stage: 'gym', start: '14:40', end: '15:10', title: 'スイラン！ブラバン！ビックバン！' }
       /* { id: 'e17', cell: 64, stage: 'outdoor', start: '10:30', end: '10:50', title: 'ミントブルー' },
        { id: 'e18', cell: 68, stage: 'outdoor', start: '11:10', end: '11:40', title: 'どすこいコンテスト' },
        { id: 'e19', cell: 61, stage: 'outdoor', start: '13:00', end: '14:00', title: '生徒会執行部' }*/
    ],
};

const TimeTable: React.FC = () => {
    const detailMap = useMemo(() => {
        const map: { [key: string]: FestivalDetail } = {};
        for (const detail of festivalDetail) {
            map[detail.id.toString()] = detail;
        }
        return map;
    }, []);

    const [day, setDay] = useState<number>(getInitialDay());

    return (
        <div className="container">
            {/**トップ画像 */}
            <div className="toppers">
                <Header
                    title="TIMETABLE"
                    backgroundImage="/header/header-pc.png"
                 />
            </div>
            {/* Toggle Day */}
            <div className="toggleContainer">
                <div className="toggle">
                    <div
                        className="toggleThumb"
                        style={{ left: day === 1 ? '2px' : 'calc(50% + 2px)' }}
                    />
                    <button className={`toggleOption ${day === 1 ? 'selected' : ''}`} onClick={() => setDay(1)}>
                        Day 1
                    </button>
                    <button className={`toggleOption ${day === 2 ? 'selected' : ''}`} onClick={() => setDay(2)}>
                        Day 2
                    </button>
                </div>
            </div>

            <div className="dayNow">
                <div className={`day1 ${day === 1 ? 'active' : ''}`}>DAY1</div>
                <div className={`day2 ${day === 2 ? 'active' : ''}`}>DAY2</div>
            </div>


            {/* Header */}
            <div className="headerRow">
                <div className="headerAxis" />
                <div className="headerStage">
                    <div className="stageTitle">野外ステージ</div>
                </div>
                <div className="headerStage">
                    <div className="stageTitle">体育館ステージ</div>
                </div>
                <div className="headerAxis" />
            </div>

            {/* Time Axis & Events */}
            <div className="timeTableVertical">
                <div className="axis axisLeft">
                    {hours.map((hour, idx) => (
                        <div key={hour} className="axisLabel" style={{ top: `${idx * rowHeight}px` }}>
                            {`${hour}:00`}
                        </div>
                    ))}
                </div>

                <div className="eventsContainer" style={{ height: `${totalHours * rowHeight}px` }}>
                    {hours.map((_, idx) => (
                        <div key={idx} className="gridLine" style={{ top: `${idx * rowHeight}px` }} />
                    ))}

                    {sampleEvents[day].map((event) => {
                        const startDec = parseTime(event.start);
                        const endDec = parseTime(event.end);
                        const newStart = startDec;
                        const newEnd = endDec;
                        const top = (startDec - startHour) * rowHeight;
                        return (
                            <Drawer key={event.id}>
                                <DrawerTrigger asChild>
                                    <div
                                        className={`eventBox ${event.stage}`}
                                        style={{
                                            top: `${top}px`,
                                            height: `${(newEnd - newStart) * rowHeight}px`,
                                            width: 'calc(50% - 2px)',
                                            left: event.stage === 'outdoor' ? '0' : 'calc(50% + 2px)',
                                        }}
                                    >
                                        <div className="timeText">
                                            {formatTime(newStart)} - {formatTime(newEnd)}
                                        </div>
                                        {event.title}
                                    </div>
                                </DrawerTrigger>
                                <DrawerContent className="bg-[#55575C] text-white">
                                    <DrawerHeader>
                                        <DrawerTitle>{event.title}</DrawerTitle>
                                    </DrawerHeader>
                                    <div className='event_details'>{detailMap[event.cell.toString()]?.detail ?? "詳細情報がありません"}</div>
                                    <DrawerFooter>
                                        <DrawerClose asChild>
                                            <Button variant="outline">閉じる</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        );
                    })}
                </div>

                <div className="axis axisRight">
                    {hours.map((hour, idx) => (
                        <div key={hour} className="axisLabel" style={{ top: `${idx * rowHeight}px` }}>
                            {`${hour}:00`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimeTable;
