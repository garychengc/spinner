let spinner = ('|/-\\|/-\\|');
for (let i = 0; i < spinner.length; ++i) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}  `);
  }, 100 * i)
}
setTimeout(()=> {
  process.stdout.write('\n');
}, 100 * (spinner.length - 1));