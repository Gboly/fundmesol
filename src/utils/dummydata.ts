import { campaignCardsDetails } from "@/app/types";

export const campaignsData: campaignCardsDetails = [
    {
        id: 1,
        image: "/communityLight.png",
        // Ensure title has a limited character. Figure what works in a card at every breakpoint and implement it in the create campaign component.
        title: "$xmas listing on Dexscreener",
        solTarget: 2,
        solRaised: 0.2,
        // create a fxn to convert the date-time value from DB to a time relative from current time. E.g: 20days, a day, 24hours, 6hours, an hour etc
        // The max value should be 2 months i.e 60days. The fxn should return an empty string if the relative time exceeds this.
        deadline: "2days"
    },
    {
        id: 2,
        image: "/communityDark.png",
        // Ensure title has a limited character. Figure what works in a card at every breakpoint and implement it in the create campaign component.
        title: "Help me with a little liquidity",
        solTarget: 0.3,
        solRaised: 0,
        deadline: ""
    },
    {
        id: 3,
        image: "/communityDark.png",
        // Ensure title has a limited character. Figure what works in a card at every breakpoint and implement it in the create campaign component.
        title: "$FMS Lagos community event - NAIJA community",
        solTarget: 5,
        solRaised: 4.3,
        deadline: "30days"
    },
    {
        id: 4,
        image: "/communityLight.png",
        // Ensure title has a limited character. Figure what works in a card at every breakpoint and implement it in the create campaign component.
        title: "$FMS Abuja community event - NAIJA community",
        solTarget: 5,
        solRaised: 2.92,
        deadline: "54days"
    },
    {
        id: 5,
        image: "/communityDark.png",
        // Ensure title has a limited character. Figure what works in a card at every breakpoint and implement it in the create campaign component.
        title: "Feed the poor",
        solTarget: 1,
        solRaised: 0.05,
        deadline: "54mins"
    },
    {
        id: 6,
        image: "/communityLight.png",
        // Ensure title has a limited character. Figure what works in a card at every breakpoint and implement it in the create campaign component.
        title: "Save this child from cancer",
        solTarget: 10,
        solRaised: 2.72,
        deadline: "5hrs"
    },
]