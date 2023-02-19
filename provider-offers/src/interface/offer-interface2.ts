export interface OfferInterface2 {
    campaign_id: number;
    icon: string;
    name: string;
    tracking_url: string;
    instructions: string;
    description: string;
    OS: { android: boolean; ios: boolean; web: boolean };
}