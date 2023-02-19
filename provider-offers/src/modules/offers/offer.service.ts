import { Injectable } from "@nestjs/common";
import { CreateOfferPayloadDto } from "./dto/create-offer-provider1.dto";
import { CreateOfferProvider2Dto } from './dto/create-offer-provider2.dto';
import { OfferSerializeDto } from './dto/offer-serializer.dto';
import { OfferSerializePayloadDto } from "./dto/offer-serializer.dto";

@Injectable()
export class OfferService {

    createProvider1Offer(createOfferPayloadDto: CreateOfferPayloadDto) {
        
        const result = new OfferSerializePayloadDto(createOfferPayloadDto);
        console.log(result);
    }

    createProvider2Offer(createOfferProvider2Dto: CreateOfferProvider2Dto) {
        
        console.log(new OfferSerializeDto(createOfferProvider2Dto));
    }
}