import { Component, OnInit, Input } from '@angular/core';
import { DataFinderService } from 'src/app/services/data-finder.service';

@Component({
  selector: 'app-render',
  template: `<markdown [data]="markdown" lineNumbers></markdown>`,
  styleUrls: ['./render.component.scss']
})

export class RenderComponent implements OnInit {

  @Input() public test: string;

  public markdown: string;

  constructor(private dataFinder: DataFinderService) { }

  async ngOnInit() {
    console.log(this.test);
    this.dataFinder.getDataAsync('./assets/markdown/test.md');
    // this.dataFinder.getDataAsync2('./assets/markdown/test.txt');
    const data = await this.dataFinder.getDataAsync('./assets/markdown/test.md');
    console.log(data);
    this.markdown = data;
  }
}
