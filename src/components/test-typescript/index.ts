export interface TestMethods {
  onClick?: () => void;
}
export interface TestComponentProps extends TestMethods {
  className?: string;
  style?: string;
  value: string;
}

Component({
  props: {
    value: '',
    onClick: () => {},
  } as TestComponentProps,

  methods: {
    onTest() {
      const a: number = 5;
      console.log(a);
    },
  },
});
