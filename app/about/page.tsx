
import React from "react";
import Header from "@/components/Header/Header";
import styles from './about.module.css'
import Image from 'next/image';

export default function About() {
    return(
        <div>
            <div className={styles.toppers}>
                <Header
                    title="ABOUT"
                    backgroundImage="/header/header-pc.png" 
                    />
            </div>
            <div className={styles.syousai}>
                <h1> 《翠翔祭とは》</h1>
                <p>翠翔祭とは毎年6月末に行われる神奈川県立横浜翠嵐高校の文化祭です。 コロナの年度は一般公開できなかったものの、去年から一般公開を再開し、約1万人の方々に来場いただきました。 来場お待ちしております。</p>
            </div>
       
       
       
        </div>
)
}   
