import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOfferProvider1Dto, CreateOfferPayloadDto } from './create-offer-provider1.dto';
import { CreateOfferProvider2Dto } from './create-offer-provider2.dto';
import { OfferBoxSizeEnum } from '../../../constants/offer-box-size.enum';

export class OfferSerializeDto {
  
  @IsNumber()
  id: number;

  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @MaxLength(255)
  slug?: string;

  @IsString()
  description: string;

  @IsString()
  requirements: string;

  @IsString()
  @MaxLength(255)
  thumbnail: string;

  @IsEnum(OfferBoxSizeEnum)
  boxSize: string;

  @IsBoolean()
  isDesktop: boolean;

  @IsBoolean()
  isAndroid: boolean;

  @IsBoolean()
  isIos: boolean;

  @IsString()
  @MaxLength(255)
  offerUrlTemplate: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  providerName?: string;

  @IsString()
  externalOfferId: string;

  constructor(payload: CreateOfferProvider1Dto | CreateOfferProvider2Dto) {
  
    if (payload instanceof CreateOfferProvider2Dto) {  
      this.externalOfferId = payload.campaign_id.toString();
      this.name = payload.name;
      this.offerUrlTemplate = payload.tracking_url;
      this.requirements = payload.instructions;
      this.description = payload.description;
      this.isAndroid = payload.OS.android;
      this.isIos = payload.OS.ios;
      this.isDesktop = payload.OS.web; 
    } else {
      this.externalOfferId = payload.offer_id;
      this.name = payload.offer_name;
      this.description = payload.offer_desc;
      this.requirements = payload.call_to_action;
      this.offerUrlTemplate = payload.offer_url;
      this.thumbnail = payload.image_url;
      if ('mobile' == payload.platform && "iphone_ipad" == payload.device) {
        this.isAndroid = false;
        this.isIos = true;
        this.isDesktop = false;
      } else {
        this.isAndroid = true;
        this.isIos = false;
        this.isDesktop = true;;
      }  
    }
  }
}

export class OfferSerializePayloadDto {
    
  @Type(() => OfferSerializeDto)
  @ValidateNested({ each: true })
  offers: OfferSerializeDto[];

  constructor(createOfferPayloadDto: CreateOfferPayloadDto) {
    this.offers = [];
    for (const createOfferProvider1Dto of createOfferPayloadDto.offers) {
      this.offers.push(new OfferSerializeDto(createOfferProvider1Dto));
    }
  }
}

