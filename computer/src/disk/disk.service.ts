import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drowing 20 watts from power service');
    this.powerService.supplyPower(20);
    return `20 watts gone`;
  }
}
