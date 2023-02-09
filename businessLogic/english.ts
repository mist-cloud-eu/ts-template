import { postIntermediateEvent } from "../airlocks/rapids/rapids";

export function handleEnglishGreeting(recipient: string) {
  postIntermediateEvent({ greeting: "Hello", recipient });
}
