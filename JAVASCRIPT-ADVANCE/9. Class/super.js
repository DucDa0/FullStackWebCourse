class Hero{
    constructor(name, hp, damage){
        this.name=name;
        this.hp=hp;
        this.damage=damage;
    }
    applyDamage(damage){
        this.hp-=damage;
    }
    attack(enemy){
        enemy.applyDamage(this.damage);
    }
}

class RangeHero extends Hero{
    constructor(name, hp, damage, range){
        super(name, hp, damage);// sử dụng lai thuộc tính của base Class.
        this.range=range;
    }
    attack(enemy){
        super.attack(enemy);// sử dụng lại function của base Class.
        this.hp+=this.damage;
    }
}


const heroA=new RangeHero('A', 100, 20);
const heroB=new Hero('B', 200, 5);

heroA.attack(heroB);
console.log({heroA, heroB});