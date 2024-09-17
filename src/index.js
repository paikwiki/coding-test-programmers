import * as R from "ramda";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const quizzesDir = path.join(__dirname, "quizzes");

const fileName = process.argv[2];

function getLatestFile() {
  const files = fs.readdirSync(quizzesDir);

  const jsFiles = files.filter(
    (file) => file.endsWith(".js") && !file.endsWith("-test-cases.js")
  );

  if (jsFiles.length === 0) {
    console.error(
      "Error: No suitable .js files found in the quizzes directory."
    );
    process.exit(1);
  }

  const latestFile = jsFiles
    .map((file) => ({
      file,
      time: fs.statSync(path.join(quizzesDir, file)).mtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time)[0].file;

  return latestFile.replace(".js", "");
}

const selectedFileName = fileName || getLatestFile();

const { solution } = await import(`./quizzes/${selectedFileName}.js`);
const { testCases } = await import(
  `./quizzes/${selectedFileName}-test-cases.js`
);

console.log(`🤖 execute: ./quizzes/${selectedFileName}.js\n`);
testCases.forEach(({ input, output }, index) => {
  const result = solution(...input);
  const isEqual = R.equals(result, output);

  console.log(`Test Case ${index + 1}: ${isEqual ? "✅ Passed" : "❌ Failed"}`);
  if (!isEqual) {
    console.log(
      `  🔴 Expected: ${JSON.stringify(output)}, but got: ${JSON.stringify(
        result
      )}\n     Input: ${JSON.stringify(input)}`
    );
  }
});
