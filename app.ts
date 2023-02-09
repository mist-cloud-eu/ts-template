import {
  Envelope,
  mistService,
  PayloadBufferPromise,
} from "@mist-cloud-eu/mist-tools-ts";
import { handleEnglishGreeting } from "./businessLogic/english";
import { handleIntermediate } from "./businessLogic/interm";
import { handleSpanishGreeting } from "./businessLogic/spanish";

async function englishAction(
  payloadBufferPromise: PayloadBufferPromise,
  e: Envelope
) {
  // Optionally, we can use the envelope to access event metadata
  let messageId = e.messageId;
  let traceId = e.traceId;
  // We can access the event body by first awaiting it, then converting it to a string
  let payloadBuffer = await payloadBufferPromise.then((x) => x);
  let payloadString = payloadBuffer.toString();
  // Then we call into our business logic
  handleEnglishGreeting(payloadString);
}

async function spanishAction(payloadBufferPromise: PayloadBufferPromise) {
  let payloadBuffer = await payloadBufferPromise.then((x) => x);
  let payloadString = payloadBuffer.toString();
  handleSpanishGreeting(payloadString);
}

async function intermediateAction(payloadBufferPromise: PayloadBufferPromise) {
  let payloadBuffer = await payloadBufferPromise.then((x) => x);
  let payloadString = payloadBuffer.toString();
  // In this case the payload is a serialized JSON object
  let payload: { greeting: string; recipient: string } =
    JSON.parse(payloadString);
  handleIntermediate(payload.greeting, payload.recipient);
}

mistService({
  englishAction,
  spanishAction,
  intermediateAction,
});
