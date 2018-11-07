import {Hero} from "./Hero";

export class LlistaHeros {

  private heros: Hero[] = null;

  constructor() {
    this.heros = new Array();
  }

  addHero(hero: Hero): void {
    this.heros.push(hero);
  }

  getLlistatHeros(): string {
    let llistat = "[";
    llistat += '\n';
    this.heros.forEach((hero) => {
      llistat += hero.toString();
      llistat += '\n';
    });
    llistat += "]";
    return llistat;
  }

  size(): number {
    return this.heros.length;
  }

  getLlistat(): Hero[] {
    return this.heros;
  }

  deleteHero() {

    for(let i = 0; i < this.heros.length; i++) {
      const hero: Hero = this.heros[i];

    }

  }
}
