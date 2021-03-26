# hlark
an javascript toolbox

# use in browser

```javascript
let obj1 = {
    age: 1
}
let obj2 = {
    username:'hello'
}

hlark.applyMixins(obj1, [obj2]);

console.log("🚀 ~ obj1", obj1); //{age: 1, username: "hello"}
```

# typescript
```typescript
import hlark from 'hlark';
class Dog {
    age: any;
    hello() {
        console.log("🚀 ~ Dog ~ hello ~  this.age", this.age);
    }
}

class Cat implements Dog {
    age = 1;
    hello() { }
}

hlark.applyClassMixins(Cat, [Dog]);

let cat1 = new Cat();
console.log("🚀 ~ cat1", cat1);//Dog { age: 1 }
cat1.hello();//hello ~  this.age 1
```

# commonjs
```javascript
var hlark = require('hlark');

let obj1 = {
    age: 1
}
let obj2 = {
    username:'hello'
}

hlark.applyMixins(obj1, [obj2]);

console.log("🚀 ~ obj1", obj1);//{ age: 1, username: 'hello' }
```