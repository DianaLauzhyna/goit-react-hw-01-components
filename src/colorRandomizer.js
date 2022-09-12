export default function colorRandomizer() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
