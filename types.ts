export type SignalAction =
  | "terminate"
  | "core"
  | "ignore"
  | "pause"
  | "unpause";
export type SignalStandard =
  | "ansi"
  | "posix"
  | "bsd"
  | "systemv"
  | "other";

export type SignalName =
  | "SIGABRT"
  | "SIGALRM"
  | "SIGBUS"
  | "SIGCHLD"
  | "SIGCONT"
  | "SIGEMT"
  | "SIGFPE"
  | "SIGHUP"
  | "SIGILL"
  | "SIGINFO"
  | "SIGINT"
  | "SIGIO"
  | "SIGKILL"
  | "SIGPIPE"
  | "SIGPROF"
  | "SIGPWR"
  | "SIGQUIT"
  | "SIGSEGV"
  | "SIGSTKFLT"
  | "SIGSTOP"
  | "SIGSYS"
  | "SIGTERM"
  | "SIGTRAP"
  | "SIGTSTP"
  | "SIGTTIN"
  | "SIGTTOU"
  | "SIGURG"
  | "SIGUSR1"
  | "SIGUSR2"
  | "SIGVTALRM"
  | "SIGWINCH"
  | "SIGXCPU"
  | "SIGXFSZ";

export type Signal = {
  /**
   * Standard name of the signal, for example 'SIGINT'.
   */
  name: string;
  /**
   * Code number of the signal, for example 2. While most number are cross-platform, some are different between different OS.
   */
  number: number;
  /**
   * Human-friendly description for the signal, for example 'User interruption with CTRL-C'.
   */
  description: string;
  /**
   * Whether the current OS can handle this signal in Node.js using process.on(name, handler). The list of supported signals is OS-specific.
   */
  supported?: boolean;
  /**
   * What is the default action for this signal when it is not handled.
   */
  action: SignalAction;
  /**
   * Whether the signal's default action cannot be prevented. This is true for SIGTERM, SIGKILL and SIGSTOP.
   */
  forced?: boolean;
  /**
   * Which standard defined that signal.
   */
  standard: SignalStandard;
};
