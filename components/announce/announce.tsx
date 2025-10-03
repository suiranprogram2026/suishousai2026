"use client"

import { AnnounceItem } from "@/utils/announce"

export default function Announce() {
    return(
        <div className="annouce">
            <div className="announce-item">
                <div className="title">
                    {AnnounceItem.title}
                </div>
            </div>
        </div>
    )
}