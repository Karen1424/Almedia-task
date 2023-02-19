import { IsBoolean, IsNumber, IsString, ValidateNested, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { OfferInterface2 } from '../../../interface/offer-interface2';

export class OSTypes {

    @IsBoolean()
    android: boolean;
    
    @IsBoolean()
    ios: boolean;

    @IsBoolean()
    web: boolean
}
export class CreateOfferProvider2Dto implements OfferInterface2 {

    @IsNumber()
    campaign_id: number;

    @IsString()
    icon: string;

    @IsString()
    @MaxLength(255)
    name: string;

    @IsString()
    @MaxLength(255)
    tracking_url: string;

    @IsString()
    instructions: string;

    @IsString()
    description: string;
    
    @Type(() => OSTypes)
    @ValidateNested()
    OS: OSTypes;
}
  