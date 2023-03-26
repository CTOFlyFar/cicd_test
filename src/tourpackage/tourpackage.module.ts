import { S3Module } from './../s3/s3.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { TourpackageService } from './tourpackage.service';
import { TourpackageController } from './tourpackage.controller';
import { Tourpackage } from './entities/tourpackage.entity';
import { AlbumImage } from './entities/albumimage.entity';
import { VisitedPlace } from './entities/visitedplace.entity';
import { Packageinclusion } from './entities/packageInclusion.entitry';
import { tourpackageplan } from './entities/tourpackageplan.entity';
import { packageexcluions } from './entities/packageexclsuions.entity';
import { packagehighlight } from './entities/packagehighlight.entity';
import { bookingpolicy } from './entities/bookingpolicy.entity';
import { refundpolicy } from './entities/refundpolicy.entity';
import { MainImage } from './entities/mainimage.entity';


@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true
    }),
    S3Module,
    TypeOrmModule.forFeature([
    Tourpackage,
    MainImage,
    AlbumImage,
    VisitedPlace,
    Packageinclusion,
    tourpackageplan,
    packageexcluions,
    packagehighlight,
    bookingpolicy,
    Tourpackage,
    refundpolicy,
  ])],
  controllers: [TourpackageController],
  providers: [TourpackageService]
})
export class TourpackageModule {}
