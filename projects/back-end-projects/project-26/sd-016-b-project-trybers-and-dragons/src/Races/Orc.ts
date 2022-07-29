import Race from './Race';

class Orc extends Race {
  //
  private _maxLifePoints: number;
  private static _count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Orc._count += 1;
    this._maxLifePoints = 74;
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

export default Orc;
