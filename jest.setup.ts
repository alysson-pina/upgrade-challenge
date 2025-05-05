import { TextEncoder, TextDecoder } from 'util'

// Polyfill for environments where TextEncoder/TextDecoder aren't defined (Node < 19)
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as typeof global.TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}
