import { IsString, ValidateNested, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { OfferInterface1 } from '../../../interface/offer-inerface1';

export class CreateOfferProvider1Dto implements OfferInterface1 {

    @IsString()
    offer_id: string;

    @IsString()
    @MaxLength(255)
    offer_name: string;
  
    @IsString()
    offer_desc: string;
  
    @IsString()
    call_to_action: string;
    
    @IsString()
    @MaxLength(255)
    offer_url: string;
  
    @IsString()
    @MaxLength(255)
    image_url: string;
  
    @IsString()
    platform: string;
  
    @IsString()
    device: string;
};

export class CreateOfferPayloadDto {

    @Type(() => CreateOfferProvider1Dto)
    @ValidateNested( { each: true } )
    offers: CreateOfferProvider1Dto[];
}
