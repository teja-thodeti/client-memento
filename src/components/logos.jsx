import netflix from "../assets/logos/netflix.webp";
import prime from "../assets/logos/prime.jpg";
import spotify from "../assets/logos/spotify.png";
import steam from "../assets/logos/steam.jpg";
import hbomax from "../assets/logos/hbomax.jpg";
import hulu from "../assets/logos/hulu.jpg";
import hotstar from "../assets/logos/jiohotstar_logo.jpg";
import nintendo from "../assets/logos/nintendo.png";
import playstore from "../assets/logos/playstore.jpg";
import playstation from "../assets/logos/Ps.avif";
import xbox from "../assets/logos/xbox.webp";
import youtube from "../assets/logos/youtube.png";
import ytmusic from "../assets/logos/ytmusic.jpg";
import fallbackLogo from "../assets/logos/images.png";

const logos = {
    Netflix: netflix,
    "Prime Video": prime,
    Spotify: spotify,
    Steam: steam,
    "HBO Max": hbomax,
    Hulu: hulu,
    "JioHotstar": hotstar,
    Nintendo: nintendo,
    "Play Store": playstore,
    PlayStation: playstation,
    "Xbox Game Pass": xbox,
    YouTube: youtube,
    "YouTube Music": ytmusic,
};

const normalizeName = (value = "") =>
    value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

const aliases = {
    netflix: "Netflix",
    "prime video": "Prime Video",
    prime: "Prime Video",
    spotify: "Spotify",
    steam: "Steam",
    "hbo max": "HBO Max",
    hulu: "Hulu",
    jiohotstar: "JioHotstar",
    nintendo: "Nintendo",
    "play store": "Play Store",
    playstation: "PlayStation",
    "xbox game pass": "Xbox Game Pass",
    youtube: "YouTube",
    "youtube music": "YouTube Music",
};

export function getLogoByName(name) {
    const normalizedName = normalizeName(name);
    const mappedName = aliases[normalizedName];
    const matchedKey = mappedName || Object.keys(logos).find((key) => normalizeName(key) === normalizedName);

    return logos[matchedKey] || fallbackLogo;
}

export default logos;