import { postReplyEvent } from "../airlocks/rapids/rapids";

export function handleIntermediate(greeting: string, recipient: string) {
  postReplyEvent(`${greeting}, ${recipient}!`);
}
