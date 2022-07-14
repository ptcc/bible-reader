import { readFile } from "fs/promises";
import { groupBy, prop } from "ramda";

interface Line {
  chapter: string;
  verse: string;
  text: string;
}

export const getBookContent = async (id: string) => {
  const text = (await readFile("./data/almeida2020.txt")).toString();
  const groups = text
    .split("\n")
    .filter((line) => line.startsWith(`${id} `))
    .map(
      (line) =>
        /\w{3}\s(?<chapter>\d{3}):(?<verse>\d{3})\s(?<text>.*)/.exec(line)
          ?.groups || { chapter: id }
    )
    .filter((obj) => !!obj)
    .map((lineData) => ({
      chapter: lineData?.chapter,
      verse: lineData?.verse,
      text: lineData?.text,
    }));
  return groupBy(prop("chapter"), groups);
};
