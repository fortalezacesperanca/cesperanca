export default function If({ condition, children }: any) {
  return <>{condition ? children : null}</>;
}
