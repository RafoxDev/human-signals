import { constants } from "./deps.ts";

import { SIGNALS } from "./core.ts";
import { getRealtimeSignals } from "./realtime.ts";
import { Signal, SignalName } from "./types.ts";

// Retrieve list of know signals (including realtime) with information about
// them
export const getSignals = function () {
  const realtimeSignals = getRealtimeSignals();
  const signals = [...SIGNALS, ...realtimeSignals].map(normalizeSignal);
  return signals;
};

// Normalize signal:
//  - `number`: signal numbers are OS-specific. This is taken into account by
//    `os.constants.signals`. However we provide a default `number` since some
//     signals are not defined for some OS.
//  - `forced`: set default to `false`
//  - `supported`: set value
const normalizeSignal = function ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard,
}: Signal): Signal {
  const {
    signals: { [name as SignalName]: constantSignal },
  } = constants;
  const supported = constantSignal !== undefined;
  const constantSignalNumber = SIGNALS.find((signal) =>
    signal.name === constantSignal
  )?.number;
  const number = supported && constantSignalNumber
    ? constantSignalNumber
    : defaultNumber;
  return {
    name,
    number: number,
    description,
    supported,
    action,
    forced,
    standard,
  };
};
