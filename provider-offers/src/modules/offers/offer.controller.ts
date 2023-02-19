import { Body, Controller, Post } from '@nestjs/common';
import { OfferService } from './offer.service';
import { CreateOfferPayloadDto } from './dto/create-offer-provider1.dto';
import { CreateOfferProvider2Dto } from './dto/create-offer-provider2.dto';

@Controller('offer')
export class OfferController {
    constructor(private offerService: OfferService) {
    }

    @Post('crate-provider1-offer')
    createProvider1Offer(@Body()createOfferPayloadDto: CreateOfferPayloadDto) {
        this.offerService.createProvider1Offer(createOfferPayloadDto);
    }

    @Post('crate-provider2-offer')
    createProvider2Offer(@Body()createOfferProvider2Dto: CreateOfferProvider2Dto) {
        this.offerService.createProvider2Offer(createOfferProvider2Dto);
    }
}
