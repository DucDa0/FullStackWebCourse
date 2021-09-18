class Tuong {
  name: string;
  type: string;
  skills: string[];

  constructor(name: string, type: string, skills: string[]) {
    this.name = name;
    this.type = type;
    this.skills = skills;
  }

  getInfo(): string {
    return `${this.name}, ${this.type}, ${this.skills}`;
  }
}

class Miner extends Tuong {
  dig: number;
  constructor(name: string, type: string, skills: string[], dig: number) {
    super(name, type, skills);
    this.dig = dig;
  }

  getInfo(): string {
    const baseInfo = super.getInfo();
    return `${baseInfo}, ${this.dig}`;
  }
}

const miner = new Miner("Miner", "Earth", ["dao mo"], 500);
console.log(miner.getInfo());
