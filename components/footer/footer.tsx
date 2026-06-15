"use client"
import "./footer.css";
import {
    LineShareButton,
    LineIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon,
} from 'next-share'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faFacebook,
    faLine,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    return (
        <div className="_fot_">
            <h1>〈 SHARE 〉</h1>
            <div className="footer-icon">
                <TwitterShareButton
                    url={'https://suishosai2026.vercel.app/'}
                    title={'6/27-28にかけて翠翔祭2026が開催中！ぜひご来場ください！'}
                >
                    <FontAwesomeIcon icon={faXTwitter} size="lg" />
                </TwitterShareButton>
                <FacebookShareButton
                    url={'https://suishosai2026.vercel.app/'}
                    quote={'6/27-28にかけて翠翔祭2026が開催中！ぜひご来場ください！'}
                    hashtag={'#翠翔祭2026'}
                >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </FacebookShareButton>
                <LineShareButton
                    url={'https://suishosai2026.vercel.app/'}
                    title={'6/27-28にかけて翠翔祭2026が開催中！ぜひご来場ください！'}
                >
                    <FontAwesomeIcon icon={faLine} size="lg" />
                </LineShareButton>
            </div>
            <div className="show">
                <a href="/about">翠翔祭2026について詳しく</a>
                <a href="/attention">支払方法・諸注意について</a>
            </div>
            <p>翠翔祭2026</p>
            <p>@神奈川県立横浜翠嵐高等学校</p>
        </div>
    );
}
