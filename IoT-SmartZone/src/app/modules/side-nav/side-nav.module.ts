import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [SideNavComponent, ToolbarComponent],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [SideNavComponent, ToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SideNavModule {}
