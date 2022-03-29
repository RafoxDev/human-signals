import { getSignals } from "./signals.ts";
import { Signal } from "./types.ts";

// Retrieve signalsByName, an object mapping signal name to signal properties.
const getSignalsByName = function () {
  const signals = getSignals();
  return Object.fromEntries(signals.map(getSignalByName));
};

const getSignalByName = function ({
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard,
}: Signal) {
  return [
    name,
    { name, number, description, supported, action, forced, standard },
  ];
};

export const signalsByName = getSignalsByName();
