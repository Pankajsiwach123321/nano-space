import discord from '../assets/images/svg/discord.svg';
import appStore from '../assets/images/svg/app-store.svg';
import googlePlay from '../assets/images/svg/google-play.svg';
import { ABOUT_PATH, AI_UGC_PATH, APP_STORE_LINK, DISCORD_LINK, GOOGLE_PLAY_LINK, HOME_PATH, MARKET_PLACE_PATH, MORE_PATH } from './constant';
export const NAVBAR_LIST = [
    {
        name: "Home",
        url: HOME_PATH
    },
    {
        name: "About",
        url: ABOUT_PATH
    },
    {
        name: "AI-UGC",
        url: AI_UGC_PATH
    },
    {
        name: "Marketplace",
        url: MARKET_PLACE_PATH
    },
    {
        name: "More",
        url: MORE_PATH
    },
]
export const HEADER_SOCIAL_LIST = [

    { url: DISCORD_LINK, image: discord, },
    { url: APP_STORE_LINK, image: appStore, },
    { url: GOOGLE_PLAY_LINK, image: googlePlay, },

];
export const EXPLORE_LIST = ["Play with your own cute & adorable girls whose in charge of saving NANOSPACE world.", "Characters are fully customizable with various costumes, attractive gears and powerful weapons."]