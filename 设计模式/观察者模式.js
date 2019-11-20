class Subject {
  constructor(name, state) {
    this.name = name;
    this.state = state;
    this.obseverList = [] // 观察者 存在 被观察者内部
  }

  attach(observer) {
    this.obseverList.push(observer)
  }

  update(newState) {
    this.state = newState;
    this.obseverList.forEach(o => o.update(newState))
  }

}

class Observer {
  constructor(name) {
    this.name = name
  }

  update(newState) {
    console.log(newState)
  }
}

const sub = new Subject('sub', { age: 1 });
const obj1 = new Observer('obj1');
const obj2 = new Observer('obj2');

sub.attach(obj1);
sub.attach(obj2);

sub.update({ age: 2 });

