import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";
import TaboolaMarket from "../../views/portfolio/TaboolaMarket";

const data = [
    
    {
        id: 1,
        title: "WEBSITE DESIGN & DEVELOPEMENT",
        slug: 'website-design-development',
        src: '/assets/img/project/project2/1.jpg',
        srcSlider: '/assets/img/project/project2/10.jpg',
        category: ['Formulation'],
        description: 'A well-recognized name in the world of social media optimization, GTF Technologi...',
        overlay: 2,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 2,
        title: "WEBSITE'S ANNUAL MAINTENANCE",
        slug: 'website-annual-maintenance',
        src: '/assets/img/project/project3/1.jpg',
        srcSlider: '/assets/img/project/project3/3.jpg',
        category: ['Preservation'],
        description: 'Recognized by Google among its top 30 partners in India, GTF Technologies commit...',
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 3,
        title: "SEARCH ENGINE OPTIMIZATION",
        slug: 'search-engine-optimization',
        category: ['SEO'],
        src: 'https://theme.dsngrid.com/video/droow.mp4',
        video: {
            poster: '/assets/img/project/project4/1.jpg',
            loop: true
        },
        description: 'Positioning your website in the first place on Google is our commitment. We alwa.',
        overlay: 2,
        component: (props) => <ToastReel {...props}/>
    },

    {
        id: 4,
        title: "PAID ADS",
        slug: 'paid-ads',
        category: ['Publicity'],
        description: 'No matter what your goals are: leads, subscribers, or followers, GTF Technologie...',
        src: '/assets/img/project/project1/1.jpg',
        srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 5,
        title: "DISPLAY MARKETING",
        slug: 'display-marketing',
        src: '/assets/img/project/project5/1.jpg',
        srcSlider: '/assets/img/project/project5/2.jpg',
        category: ['Exhibition'],
        description: 'GTF Technologies is committed to persuading your target audience through a thoro...',
        overlay: 2,
        component: (props) => <WhatIfGold {...props}/>
    },
    {
        id: 6,
        title: "YOUTUBE MARKETING",
        slug: 'youtube-marketing',
        category: ['Visually Advertising'],
        src: '/assets/img/project/project6/1.jpg',
        srcSlider: '/assets/img/project/project6/2.jpg',
        description: 'Your website is your digital face. Visuals, content, and appearance are its feat...',
        overlay: 2,
        component: (props) => <NileKabutha {...props}/>
    },
    {
        id: 7,
        title: "SOCIAL MEDIA OPTIMIZATION",
        slug: 'social-media-optimization',
        category: ['Networking'],
        src: '/assets/img/project/project7/1.jpg',
        srcSlider: '/assets/img/project/project7/4.jpg',
        description: 'GTF Technologies is a prestigious website development company in India with more...',
        overlay: 2,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 8,
        title: "SOCIAL MEDIA MARKETING",
        slug: 'social-media-marketing',
        src: '/assets/img/project/project8/1.jpg',
        srcSlider: '/assets/img/project/project8/4.jpg',
        category: ['E-Marketing'],
        description: 'GTF Technologies is a team of crackerjack website maintenance engineers. We rese...',
        overlay: 2,
        component: (props) => <NovaraConic {...props}/>
    },
    {
        id: 9,
        title: "ONLINE REPUTATION MANAGEMENT MARKETING",
        slug: 'online-reputation-management-marketing',
        category: ['ORM'],
        description: 'Multiply your sales with our custom YouTube marketing services. With more than 2...',
        src: '/assets/img/project/project9/1.jpg',
        srcSlider: '/assets/img/project/project9/3.jpg',
        overlay: 2,
        component: (props) => <BastianBux {...props}/>
    },

    {
        id: 10,
        title: "TABOOLA MARKETING",
        slug: 'taboola-marketing',
        category: ['AI Tech'],
        description: 'Grow your sales to the next level with our customized Taboola marketing services...',
        src: '/assets/img/project/project10/1.jpg',
        srcSlider: '/assets/img/project/project10/1.jpg',
        overlay: 2,
        component: (props) => <TaboolaMarket {...props}/>
    },

    
  
    
    
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};