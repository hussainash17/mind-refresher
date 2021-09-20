import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerServie: PowerService) {}

  compute(a: number, b: number): number {
    console.log(`Drowing 10 watts from power service`);
    this.powerServie.supplyPower(10);
    return a + b;
  }
}
