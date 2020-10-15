import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-color-multi-selector',
  templateUrl: './template-color-multi-selector.component.html',
  styleUrls: ['./template-color-multi-selector.component.css'],
})
export class TemplateColorMultiSelectorComponent implements OnInit {
  colors: string[];

  constructor() {}

  ngOnInit(): void {}
}
