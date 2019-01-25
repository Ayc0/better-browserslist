html`
  <${Div} id="foo"> hello ${you} 😀${"<"} <//>
`;

const a = [1, 2, 3];
const b = [1, ...a, 2, 3];

const c = { a: 1, b: 2, c: 3 };
const d = { a: 2, ...c, c: 5 };

class A {
  b() {
    return this.c();
  }
  c() {
    return () => 5;
  }
}

const App = () => <div>asd</div>;
