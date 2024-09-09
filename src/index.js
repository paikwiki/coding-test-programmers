import * as R from "ramda";

const fileName = process.argv[2];

if (!fileName) {
  console.error("Error: FILE_NAME argument is required.");
  process.exit(1);
}

const { solution } = await import(`./quizzes/${fileName}.js`);
const { testCases } = await import(`./quizzes/${fileName}-test-cases.js`);

testCases.forEach(({ input, output }, index) => {
  const result = Array.isArray(input) ? solution(...input) : solution(input);
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
