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

function createData(address: string, amount: number, percentage: number) {
    return { address, amount, percentage };
}

export const fundingHistoryRows = [
    createData('DfiHPh4VyKSTVF6eqhBfbxpiZrEkrHXt2ZE9JS5qHhBU', 3.8, 19),
    createData('8zJ5xX7PEkYHgwkUg5xzwENxm4hkE9drBsCvgzE9KHGt', 2.6, 13),
    createData('4NwS4ezQ3tU2UzuwXKVzHj8YxQyJvE8YaGqBaX6dNcBf', 2.2, 11),
    createData('GWvhqdYfNFqTuqh4gXL91CSdDKJGYLzs8sHzRi9qF4PZ', 1.8, 9),
    createData('Hx6LbkMrW3H5NVaZjvbJRqiHrcvVi7uWCqwWZSKkgBXD', 1.6, 8),
    createData('9ZNTfG4NyQgxy2SWjSPQGzUicdE5conGZXzgJXzDQB7K', 1.4, 7),
    createData('EWmw9RKUkd5qxYKFRPNBAz4SzX6mDqG4QYkGH3wNedKK', 1.2, 6),
    createData('3Gj5CXz8iz3gs9dKhSwDBvCmoGcCGZrXrtTKFHXyuWwF', 1.1, 5.5),
    createData('7kqHBqxJqCE1h4oWvLvWFNFa5jkPpuz1HGvS5PAHqhL9', 0.9, 4.5),
    createData('BXZ22xbckqLwqhw8pxGyy8ZCvWE4SpvyHgt7S6vEDUT5', 0.8, 4),
    createData('5KtxEqMz6JxWgAL3qB6H2vHQGQkZkYt7FEJjXRJZfyTG', 0.7, 3.5),
    createData('HNxVbMaMeKhCiYZPqLyc8dxGRWPrGX5RbCDZQo7vJhkS', 0.6, 3),
    createData('4eJ3PTDcQvxJKvKzMyvJFRwSMYnJJHRhh7qMrG6EbBEn', 0.5, 2.5),
    createData('6YxzRxZqp3L6BzDjX9bf9h3EHXkzwWjywvQ5KHtJ5QYq', 0.4, 2),
    createData('2ZqaTLm4NxNkZJ36GEUZCkqRCD9ZDqGmka8HgBDsdVkU', 0.4, 2),
    createData('9ZNTfG4NyQgxy2SWjSPQGzUicdE5conGZXzgJXzDQB7K', 1.4, 7)
].sort((a, b) => (a.amount < b.amount ? -1 : 1));