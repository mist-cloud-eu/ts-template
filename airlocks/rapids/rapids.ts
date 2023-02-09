import {
  MIME_TYPES,
  postToRapids,
  replyToOrigin,
} from "@mist-cloud-eu/mist-tools-ts";

export function postIntermediateEvent(body: {
  greeting: string;
  recipient: string;
}) {
  postToRapids("intermediate", {
    content: JSON.stringify(body),
    mime: MIME_TYPES.json,
  });
}
export function postReplyEvent(body: string) {
  replyToOrigin(body, MIME_TYPES.txt);
}
