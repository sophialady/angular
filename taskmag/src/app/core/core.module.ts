import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MdIconRegistry } from '@angular/material';
import { HttpModule } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from 'app/utils/svg.util';



@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent, FooterComponent,
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) {
     if ( parent ) {
        throw new Error('模块已经存在,不能再次加载！');
     }
     loadSvgResources(ir, ds);
  }
}
