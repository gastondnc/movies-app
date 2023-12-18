import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Pager {
  actual: number;
  total: number;
}

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})

export class PagerComponent implements OnInit {
@Input('pager-data') pager: Pager = { actual: 1, total: 1 }
@Output('on-goto-page') gotoPageEmitter: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(goToPage: number){
    console.log(goToPage)
    this.gotoPageEmitter.emit(goToPage)
  }

}
