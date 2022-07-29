import Race from './Race';

class Halfling extends Race {
  //
  private _maxLifePoints: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Halfling._count += 1;
    this._maxLifePoints = 60;
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

export default Halfling;
