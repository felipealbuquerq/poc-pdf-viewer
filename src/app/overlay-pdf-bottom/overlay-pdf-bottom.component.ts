import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IOverlayDisplay } from 'src/app/models/IOverlayDisplay';

@Component({
  selector: 'overlay-pdf-bottom',
  templateUrl: './overlay-pdf-bottom.component.html',
  styleUrls: ['./overlay-pdf-bottom.component.scss'],
})
export class OverlayPDFBottomComponent implements OnInit {
  @Input() titulo: string;
  @Input() items: IOverlayDisplay[];
  @Input() itemSolo: IOverlayDisplay = null;
  @Output() selectedItem: EventEmitter<number> = new EventEmitter();
  @Output() clickSoloItem: EventEmitter<IOverlayDisplay> = new EventEmitter<IOverlayDisplay>();
  overlayHeight: string;

  anim = 0;

  constructor(
    private platform: Platform
  )
  {
  }

  ngOnInit() {
    this.platform.backButton.subscribe(() => {
      if (this.items && this.items.length) {
        this.toggle();
      }
    });
    this.overlayHeight = this.itemSolo == null ? 'height: 50%' : '';
  }

  transition() {
    // slide down -> reset anim
    if (this.anim === 2) {
      this.anim = 0;
    }
  }

  public toggle() {
    this.anim = this.anim <= 1 ? this.anim + 1 : this.anim - 1;
  }

  select(num: number) {
    this.selectedItem.emit(num);
    // this.toggle();
  }

  soloSelect(item: IOverlayDisplay) {
    this.clickSoloItem.emit(item);
  }
}
