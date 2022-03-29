import { assertEquals } from "https://deno.land/std@0.132.0/testing/asserts.ts";
import { signalsByName } from "./mod.ts";

Deno.test("Signals By Name Test", () => {
  assertEquals(signalsByName.SIGINT, {
    name: "SIGINT",
    number: 2,
    description: "User interruption with CTRL-C",
    supported: true,
    action: "terminate",
    forced: false,
    standard: "ansi",
  }, "supported");

  assertEquals(signalsByName.SIGUNUSED, {
    name: "SIGUNUSED",
    number: 31,
    description: "Invalid system call",
    supported: false,
    action: "terminate",
    forced: false,
    standard: "other",
  }, "unsupported");
});
