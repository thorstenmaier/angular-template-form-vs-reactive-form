import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-color-selector',
  templateUrl: './template-color-selector.component.html',
  styleUrls: ['./template-color-selector.component.css'],
})
export class TemplateColorSelectorComponent implements OnInit {
  color: string;

  constructor() {}

  ngOnInit(): void {}
}
