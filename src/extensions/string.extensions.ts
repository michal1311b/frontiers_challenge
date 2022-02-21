export function createShortcut(text: string): string {
  const letters = text.split(" ");
  let shortcut = "";
  letters.forEach((element) => {
    shortcut += element[0];
  });
  return shortcut;
}

export function getIndex(text: string): number {
  const alphabet = [
    ["a", "ą", "b"],
    ["c", "ć", "d"],
    ["e", "ę", "f"],
    ["g", "h", "i"],
    ["j", "k", "l", "ł"],
    ["m", "n", "ń", "o"],
    ["ó", "p", "q", "r"],
    ["s", "ś", "t", "u"],
    ["v", "w", "x", "y"],
    ["z", "ź", "ż"],
  ];

  const letters = text.match(/\p{Lu}/gu);
  let index = 0;

  if (letters != null) {
    letters.forEach((letter) => {
      alphabet.find((array, position) => {
        if (array.indexOf(letter.toLowerCase()) >= 0) {
          index += position;
        }
      });
    });
  }
  if (index >= 9) return index % 9;
  return index;
}

export function setSeparator(current: number, length: number): string {
  if (current == length - 1) {
    return ".";
  } else if (current == length - 2) {
    return "and";
  }
  return ",";
}
