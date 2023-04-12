import yargsInteractive from 'yargs-interactive';

import { Executable } from './types';
import { isJSON } from "./utils";
import { Libs } from './libs';
import { Puzzles } from './puzzles';

export const run = () => {
  return yargsInteractive()
    .usage('$0 <command> [args]')
    .interactive({
      interactive: { default: true },
      puzzle: { describe: 'Puzzle:', type: 'input' },
      daemon: { describe: 'Run as daemon?', type: 'confirm', default: true },
      verbose: { describe: 'Run verbose?', type: 'confirm', default: false },
    })
    .then(argv => {
      const callParts: string = argv.puzzle.match(/^(\w+)\(([\w|\W]+)\)$/);
      const name: string = callParts[1] || '';
      const argString: string = callParts[2] || '';

      const args: unknown[] = [];
      if (argString && argString.length) {
        if (isJSON(argString)) {
          args.push(JSON.parse(argString));
        } else {
          argString.split(',').forEach((arg: string) => {
            const argument = arg.trim();
            args.push(isJSON(argument) ? JSON.parse(argument) : argument);
          });
        }
      }
      args.push(argv.verbose || false);

      if (argv.verbose) {
        console.log('Call parts: ', callParts, argv.puzzle);
        console.log('Arguments: ', args);
      }

      const exec: Executable = { ...Libs, ...Puzzles }[name] || null;

      if (!exec) {
        const message = `A Puzzle with a name ${name} is not found!\nA puzzle was called as ${callParts[0]}`;
        console.error(message);
        throw new Error(message);
      }

      exec.apply(this, args);

      if (argv.daemon) run();
    });
};

run();
