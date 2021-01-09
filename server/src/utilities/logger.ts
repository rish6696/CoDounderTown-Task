import { createLogger, format, transports } from "winston";
import fs from "fs";
import path from "path";
import { DB_DATE_FORMAT } from "../constants";

const logDir = path.join(__dirname, "../logs");

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: DB_DATE_FORMAT,
    }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      level: "info",
      format: format.combine(
        format.colorize(),
        format.timestamp({
          format: DB_DATE_FORMAT,
        }),
        format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
      filename: "logs/info.log",
    }),
    new transports.File({
      level: "error",
      format: format.combine(
        format.colorize(),
        format.timestamp({
          format: DB_DATE_FORMAT,
        }),
        format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
      filename: "logs/error.log",
    }),
  ],
  exitOnError: false,
});

if (process.env.ENVIRONMENT !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp({
          format: DB_DATE_FORMAT,
        }),
        format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
    })
  );
}

export default logger;
