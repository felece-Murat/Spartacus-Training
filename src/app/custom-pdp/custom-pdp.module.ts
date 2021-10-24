import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { StarRatingModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    CustomProductIntroComponent,
    CustomProductIntroComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent:{
          component: CustomProductIntroComponent
        } 
      }

    }as CmsConfig)
  ]
})
export class CustomPdpModule { }
