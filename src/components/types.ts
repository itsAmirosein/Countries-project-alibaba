export type CardsProps = {
    cardInfo: CardInfoType
}

type CardInfoType = {
    name?: string;
    flag?: string;
    population?: number;
    region?: string;
    capital?: string
}