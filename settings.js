const packageJSON = require("./package.json");
const col = require("svjsl").colors.fg;

module.exports = {
    debug: {
        verboseLogging: false,      // set to true to enable extra debug output
        progressBarDisabled: false, // set to true to disable the progress bar - greatly improves readability of verbose debug output
    },
    info: {
        name: "JokeAPI",                                // the name of JokeAPI
        desc: packageJSON.description,                  // the description of JokeAPI
        projGitHub: "https://github.com/Sv443/JokeAPI", // URL to the project's GitHub page
        version: packageJSON.version,                   // the version as a string
        versionInt: packageJSON.version.split("."),     // the version as a number array
        docsURL: "https://sv443.net/jokeapi",           // the URL to the documentation of JokeAPI
        author: {
            name: packageJSON.author.name,      // author name
            email: packageJSON.author.email,    // author email
            website: packageJSON.author.url,    // author website
            github: "https://github.com/Sv443", // author github page
        },
        infoMsg: "If you want to be updated on the status of JokeAPI, please consider following me on Twitter (https://twitter.com/Sv443_dev) or joining my Discord server (https://discord.gg/aBH4uRG)",
    },
    init: {
        initDirs: [ // directories that should be generated if they don't exist - paths relative to root of project - doesn't necessarily need trailing slash
            "./data/logs",
        ],
    },
    wrapper: {
        mainFilePath: "./src/main.js",     // main script file
        logFilePath: "./data/wrapper.log", // wrapper log file
        skipWrapping: false,               // whether or not to skip the wrapping through node-wrap
        crashTimeout: 2000,                // big enough of a timeout to hopefully allow all possible hiccups to settle down before restarting
    },
    jokes: {
        jokesFilePath: "./data/jokes.json",                  // path to the jokes file
        jokeSubmissionURL: "https://sv443.net/r/submitjoke", // joke submission url
        possible: {
            anyCategoryName: "Any", // the name of the "Any" category
            categories: [           // all categories (excluding "Any")
                "Miscellaneous",
                "Programming",
                "Dark"
            ],
            flags: [                // all flags
                "nsfw",
                "religious",
                "political"
            ],
        },
        fileFormatsPath: "./data/fileFormats.json", // path to the file formats file
        defaultFileFormat: {
            fileFormat: "json",           // the default file format string
            mimeType: "application/json", // the default file format mime type
        },
    },
    httpServer: {
        port: 8079,         // http server port
        allowCORS: true,    // whether or not to allow Cross Origin Resource Sharing
        rateLimiting: 30,   // amount of allowed requests per below defined timeframe
        timeFrame: 1,       // timeframe in min - also supports floating point numbers
        disableCache: true, // whether or not to disable the cache - default: true (setting to false may prevent the users from getting new jokes)
        infoHeaders: true,  // whether or not to add an informational header about JokeAPI to each request
    },
    errors: {
        errorRegistryIncludePath: "./data/errorRegistry", // path to the error registry
        errorLogDir: "./data/logs/",                      // path to the error log directory - needs trailing slash
    },
    lists: {
        blacklistPath: "./data/lists/blacklist.json",               // path to the IP blacklist
        whitelistPath: "./data/lists/whitelist.json",               // path to the IP whitelist
        consoleBlacklistPath: "./data/lists/consoleBlacklist.json", // path to the IP console blacklist
    },
    documentation: {
        dirPath: "./docs/",                  // path to the documentation directory - needs trailing slash
        rawDirPath: "./docs/raw/",           // path to the raw documentation files directory - needs trailing slash
        daemonInterval: 5,                   // interval (in seconds) at which the daemon checks for changes in the documentation directory
        error404path: "./docs/err/404.html", // path to the 404 error page
        error500path: "./docs/err/500.html", // path to the 500 error page
    },
    endpoints: {
        dirPath: "./endpoints/", // path to the dir containing all the endpoint scripts
    },
    colors: {
        success: col.green,     // when request successful
        error: col.red,         // when request errored
        ratelimit: col.magenta, // when request rate limited
        docs: col.yellow,       // when docs were requested
    }
}