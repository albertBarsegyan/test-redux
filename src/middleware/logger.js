export default function logger() {
  return (next) => (action) => {
    console.log(action);

    return next(action);
  };
}
