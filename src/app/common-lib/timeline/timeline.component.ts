import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { TimelineItem } from 'src/app/models/timeline-model';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '0px' })),
      transition('open => closed', [
        animate('0.5s 0s ease')
      ]),
      transition('closed => open', [
        animate('0.5s 0s ease')
      ])
    ])
  ]
})
export class TimelineComponent implements OnInit {
    @Input() timelineData: TimelineItem[];
    @Input() descriptorLabel: string;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleVisibility(item: TimelineItem) {
      item.showDescriptors = !item.showDescriptors;
  }
}
