import { Signal } from "./types.ts";

// List of realtime signals with information about them
export const getRealtimeSignals = function () {
  const length = SIGRTMAX - SIGRTMIN + 1;
  return Array.from({ length }, getRealtimeSignal);
};

const getRealtimeSignal = function (_value: never, index: number): Signal {
  return {
    name: `SIGRT${index + 1}`,
    number: SIGRTMIN + index,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix",
  };
};

const SIGRTMIN = 34;
export const SIGRTMAX = 64;
