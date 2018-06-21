const http = require("http");

module.exports = app => {
    const config = app.src.config.config;

    process.env.TZ = config.timezone;
    if (process.env.NODE_ENV !== "test") {
        if (process.env.FORCE || false) {
            process.exit(0);
        } else {
            const server = app.listen(app.get("port"), () => {
                console.log(`

  Autor: Adrian Marcelo Berazaín Mallea

          .=     ,        =.
  _  _   /'/    )\\,/,/(_   \\ \\
   '//-.|  (  ,\\\\)\\//\\)\\/_  ) |
   //___\\   '\\\\\\/\\\\/\\/\\\\///'  /
,-"~'-._ '"--'_   '"""'  _ \\''"~-,_
\\       '-.  '_'.      .'_' \\ ,-"~'/
 '.__.-''/   (-\\        /-) |-.__,'
   ||   |     \\O)  /^\\ (O/  |
   '\\\\  |         /   '\\    /
     \\\\  \\       /      '\\ /
      '\\\\ '-.  /' .---.--.\\
        '\\\\/'~(, '()      ()'
         /(O) \\\\   _,.-.,_/
        //  \\\\ '\\''      /
       / |  ||   '""""~"'
     /'  |__||        
           'o     URL shortener...
           
        `);
                console.log("      Host: 127.0.0.1:" + app.get("port") + "                                   ");
            });
        }
    } else if (typeof (global.server) === 'undefined') {
        if (process.env.FORCE || false) {
            process.exit(0);
        }
    }
};