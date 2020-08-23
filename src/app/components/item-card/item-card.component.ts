import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductViewModel} from "../../models/product-view.model";
import {ItemTypesEnum} from "../../dictionary/item-types.enum";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() public item: any;
  @Input() public itemType: ItemTypesEnum;
  @Input() public withButtons: boolean;
  @Output() public itemChanged: EventEmitter<any> = new EventEmitter<any>();
  public itemTypesEnum: typeof ItemTypesEnum = ItemTypesEnum;

  constructor() {
  }

  ngOnInit() {
  }

  public addClick(item: any): void {
    if (this.itemType === ItemTypesEnum.RAZLIV) {
      if (item.totalCount !== 0) {
        item.totalCount = item.totalCount + 0.5;
      } else {
        item.totalCount = item.totalCount + 1;
      }
      this.itemChanged.emit(item);
    }
  }

  public minusClick(item: any): void {
    if (this.itemType === ItemTypesEnum.RAZLIV) {
      if (item.totalCount !== 1) {
        item.totalCount = item.totalCount - 0.5;
      } else {
        item.totalCount = item.totalCount - 1;
      }
      this.itemChanged.emit(item);
    }
  }

}
