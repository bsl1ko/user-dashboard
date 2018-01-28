import { bindable } from 'aurelia-framework';

export class BarGraph {
  @bindable({attribute: 'graph-data'}) graphData: any;

  constructor() {
    
  }
}
