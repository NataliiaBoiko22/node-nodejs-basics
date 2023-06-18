//  node src/cli/args --propName "RS" --prop2Name "School"
const parseArgs = () => {
  const args = process.argv;
  const parsedArgs = {};

  for (let i = 2; i < args.length; i += 2) {
    const propName = args[i].substring(2);
    const value = args[i + 1];

    parsedArgs[propName] = value;
  }

  const formattedArgs = Object.entries(parsedArgs).map(
    ([propName, value]) => `${propName} is ${value}`
  );

  console.log(formattedArgs.join(", "));
};

parseArgs();
