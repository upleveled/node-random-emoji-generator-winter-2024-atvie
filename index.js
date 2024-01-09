import { argv } from 'node:process';
import * as emoji from 'node-emoji';

const randomEmoji = emoji.random();
const emojiName = argv[2];

if (argv.length < 3) {
  console.log(randomEmoji.emoji);
} else if (emoji.get(emojiName)) {
  const userInputEmoji = emoji.get(emojiName);
  console.log(userInputEmoji);
} else {
  console.log('This emoji does not exist');
}
