import Race from './Race';

class Elf extends Race {
  //
  private _maxLifePoints: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Elf._count += 1;
    this._maxLifePoints = 99;
  }

  get name(): string {
    return super.name;
  }

  get dexterity(): number {
    return super.dexterity;
  }

  static createdRacesInstances() {
    return this._count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
