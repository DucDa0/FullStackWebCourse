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
    constructor(name, hp, damage, range=10){
        super(name, hp, damage);// sử dụng lai thuộc tính của base Class.
        this.range=range;
    }
    attack(enemy){
        super.attack(enemy);// sử dụng lại function của base Class.
        this.hp+=this.damage;
    }
    static buff(){// static thì gọi trực tiếp qua Class, không cần khởi tạo
        console.log('Static Method')
    }
}


const heroA=new RangeHero('A', 100, 20);
const heroB=new Hero('B', 200, 5);
heroA.attack(heroB);
RangeHero.buff();
console.log({heroA, heroB});