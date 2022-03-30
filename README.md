[![Build](https://github.com/RafoxDev/human-signals/workflows/Test/badge.svg)](https://github.com/RafoxDev/human-signals/actions)

Human-friendly process signals ported to deno.

This is a map of known process signals with some information about each signal.

Unlike
[`os.constants.signals`](https://nodejs.org/api/os.html#os_signal_constants)
this includes:

- human-friendly [descriptions](#description)
- [default actions](#action), including whether they [can be prevented](#forced)
- whether the signal is [supported](#supported) by the current OS

# Example

```js
import { signalsByName } from "https://deno.land/x/human_signals/mod.ts";

console.log(signalsByName.SIGINT);
// {
//   name: 'SIGINT',
//   number: 2,
//   description: 'User interruption with CTRL-C',
//   supported: true,
//   action: 'terminate',
//   forced: false,
//   standard: 'ansi'
// }
```

# Usage

## signalsByName

_Type_: `object`

Object whose keys are signal [names](#name) and values are
[signal objects](#signal).

## signal

_Type_: `object`

Signal object with the following properties.

### name

_Type_: `string`

Standard name of the signal, for example `'SIGINT'`.

### number

_Type_: `number`

Code number of the signal, for example `2`. While most `number` are
cross-platform, some are different between different OS.

### description

_Type_: `string`

Human-friendly description for the signal, for example
`'User interruption with CTRL-C'`.

### supported

_Type_: `boolean`

Whether the current OS can handle this signal in Node.js using
[`process.on(name, handler)`](https://nodejs.org/api/process.html#process_signal_events).

The list of supported signals
[is OS-specific](https://github.com/ehmicky/cross-platform-node-guide/blob/main/docs/6_networking_ipc/signals.md#cross-platform-signals).

### action

_Type_: `string`\
_Enum_: `'terminate'`, `'core'`, `'ignore'`, `'pause'`, `'unpause'`

What is the default action for this signal when it is not handled.

### forced

_Type_: `boolean`

Whether the signal's default action cannot be prevented. This is `true` for
`SIGTERM`, `SIGKILL` and `SIGSTOP`.

### standard

_Type_: `string`\
_Enum_: `'ansi'`, `'posix'`, `'bsd'`, `'systemv'`, `'other'`

Which standard defined that signal.
