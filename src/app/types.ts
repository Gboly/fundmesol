export type ArrayOfStrings = Array<string>

export interface cardDetails {
    id: number,
    image: string,
    title: string,
    solTarget: number,
    solRaised: number,
    deadline: string
}

export type campaignCardsDetails = Array<cardDetails>
