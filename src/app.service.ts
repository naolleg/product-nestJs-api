import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(a:number,b:number): number {

const sum:number=a+b;
    return sum;
  }
}
