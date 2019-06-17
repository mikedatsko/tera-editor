import { Component, OnInit } from '@angular/core';
import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';
import 'brace/theme/clouds';
import 'brace/theme/dracula';
import 'brace/mode/javascript';
import { AceComponent, AceDirective, AceConfigInterface } from 'ngx-ace-wrapper';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  config: AceConfigInterface = {
    mode: 'text',
    theme: 'github',
    readOnly : false
  };
  value: string = '';

  constructor() { }

  ngOnInit() {
  }

}
