export default class Log4j {
  constructor(log4js: any) {
    log4js.configure({
      appenders: {
        fileout: { type: "file", filename: "fileout.log" },
        datafileout: {
          type: "dateFile",
          filename: "datafileout.log",
          pattern: ".yyyy-MM-dd-hh-mm-ss-SSS"
        },
        consoleout: { type: "console" },
      },
      categories: {
        default: { appenders: ["fileout", "consoleout"], level: "debug" },
        anything: { appenders: ["consoleout"], level: "debug" }
      }
    });
  }
}