import { surpriseMePrompts } from "../constaints";

import filesaver from 'file-saver'
export default function getRandomPrompt(currentPrompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === currentPrompt) {
    return getRandomPrompt(currentPrompt); // avoid repeat
  }

  return randomPrompt;
}
//function for download image
export async function downloadImage(_id,photo) {
 filesaver.saveAs(photo, `downlaod-${_id}.jpeg`)
}
