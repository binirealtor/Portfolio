import React from 'react';

// From Header
export const SunIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
);

export const MoonIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
);

// From Hero
export const ArrowDownTrayIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

// From About
export const BriefcaseIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/0tjmDq5.png" alt="Projects Completed" className={`${className || "w-full h-full"} object-contain dark:invert-0 invert`} />
);

export const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-full h-full"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-full h-full"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const LocationMarkerIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

// From Skills
export const AnimationIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/frV65ub.gif" alt="2D/3D Animation" className={`${className || "w-full h-full"} object-contain`} />
);

export const VideoEditingIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/YCnWirS.gif" alt="Video Editing" className={`${className || "w-full h-full"} object-contain`} />
);

export const MotionGraphicsIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/xpu31WS.gif" alt="Motion Graphics" className={`${className || "w-full h-full"} object-contain`} />
);

export const CharacterAnimationIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/RRnfmas.gif" alt="Character Animation" className={`${className || "w-full h-full"} object-contain`} />
);

export const SocialMediaIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/ewheocG.gif" alt="Social Media & YouTube" className={`${className || "w-full h-full"} object-contain`} />
);

export const WeddingIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/6wS0eiB.gif" alt="Wedding & Event Videos" className={`${className || "w-full h-full"} object-contain`} />
);

// From Portfolio
export const CompareArrowsIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18M16.5 3L21 7.5m0 0L16.5 12M21 7.5H3" />
    </svg>
);

// From PortfolioModal
export const PuzzlePieceIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.66.539-1.2 1.2-1.2h3.553c.66 0 1.2.54 1.2 1.2v3.553c0 .66-.539 1.2-1.2 1.2h-2.974c-.66 0-1.2-.54-1.2-1.2v-2.379h-1.179c-.66 0-1.2-.54-1.2-1.2V6.087zM9.75 18.75c0 .66-.539 1.2-1.2 1.2H5.003c-.66 0-1.2-.54-1.2-1.2V15.2c0-.66.539-1.2 1.2-1.2h2.974c.66 0 1.2.54 1.2 1.2v2.379h1.179c.66 0 1.2.54 1.2 1.2v.021z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.003 6.087c0-.66.539-1.2 1.2-1.2h3.553c.66 0 1.2.54 1.2 1.2v3.553c0 .66-.539 1.2-1.2 1.2H7.23c-.66 0-1.2-.54-1.2-1.2v-2.379H4.853c-.66 0-1.2-.54-1.2-1.2V6.087zM18.997 18.75c0 .66-.539 1.2-1.2 1.2h-3.553c-.66 0-1.2-.54-1.2-1.2v-3.553c0-.66.539-1.2 1.2-1.2h2.974c.66 0 1.2.54 1.2 1.2v2.379h1.179c.66 0 1.2.54 1.2 1.2v.021z" />
    </svg>
);

export const LightBulbIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.25H10.5a6.01 6.01 0 001.5 11.25v.003zm0 5.25a2.25 2.25 0 01-2.25-2.25H9a3.75 3.75 0 013.75-3.75h.008a3.75 3.75 0 013.75 3.75h-1.5a2.25 2.25 0 01-2.25 2.25z" />
    </svg>
);

export const TrophyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-full h-full"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75c-.622 0-1.125.504-1.125 1.125V18.75m9 0h-9m9 0a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H15M6.75 18.75a2.25 2.25 0 01-2.25-2.25v-1.5a2.25 2.25 0 012.25-2.25H9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5V9A2.25 2.25 0 0111.25 6.75h1.5A2.25 2.25 0 0115 9v4.5" />
    </svg>
);


// From AIQuoteEstimator
export const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.567L16.5 21.75l-.398-1.183a3.375 3.375 0 00-2.456-2.456L12.5 18l1.183-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.183a3.375 3.375 0 002.456 2.456L20.25 18l-1.183.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

// From Contact & others
export const UpworkIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/CBXGVEi.png" alt="Upwork" className={`${className || "w-full h-full"} object-contain`} />
);

export const TikTokIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/8y4Lrc5.png" alt="TikTok" className={`${className || "w-full h-full object-contain"} dark:invert-0 invert`} />
);

export const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/az2tvJ7.png" alt="LinkedIn" className={`${className || "w-6 h-6"} object-contain`} />
);

export const EmailIcon: React.FC<{className?: string}> = ({className}) => (
    <img src="https://i.imgur.com/uTaWlHJ.png" alt="Email" className={`${className || "w-6 h-6"} object-contain dark:invert-0 invert`} />
);


// From BehindTheScenes
export const WrenchScrewdriverIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

// From GearAndSetup
export const CodeBracketSquareIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V5.75A2.25 2.25 0 0018 3.5H6A2.25 2.25 0 003.75 5.75v12.25A2.25 2.25 0 006 20.25z" />
    </svg>
);

export const CpuChipIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-19.5 0h1.5M12 4.5v15" />
    </svg>
);

export const CameraIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);


// From FAQ
export const PlusIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

// From ReferralBanner
export const MegaphoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
);

// From StickyNav
export const HomeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

// For new UpworkProfile component
export const StarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-full h-full"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.479.038.673.684.314 1.003l-4.062 3.693a.563.563 0 00-.162.59l1.18 5.43a.563.563 0 01-.816.62l-4.9-2.822a.563.563 0 00-.527 0l-4.9 2.822a.563.563 0 01-.816-.62l1.18-5.43a.563.563 0 00-.162-.59l-4.062-3.693c-.359-.319-.165-.965.314-1.003l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);

export const ArrowTopRightOnSquareIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.125c.621 0 1.125.504 1.125 1.125V10.5m-7.5-4.125h7.5-7.5z" />
    </svg>
);