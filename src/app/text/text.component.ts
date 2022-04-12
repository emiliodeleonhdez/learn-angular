import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() mainText = "";
  @Input() emilio: any;

  constructor() { }

  ngOnInit(): void {
  }

}
