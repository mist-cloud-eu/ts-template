import { postIntermediateEvent } from "../airlocks/rapids/rapids";

export function handleSpanishGreeting(recipient: string) {
  postIntermediateEvent({ greeting: "Hola", recipient });
}
