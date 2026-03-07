
import React from "react";
import Header from "@/components/Header/Header";
import "./about.css"
import Image from 'next/image';

export default function About() {
    return(
        <div>
            <div className="toppers">
                <Header
                    title="ABOUT"
                    backgroundImage="/header/header-pc.png" 
                    />
            </div>
            <div className="syousai">
                <h1 className="midashi">
                <p>翠翔祭とは</p>
                </h1>
                <p>翠翔祭とは江戸時代から伝統的に続いている豊作を願う祭りである。</p>
            </div>
        </div>
)
}   
