#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: FILE_NAME argument is required."
  echo "Usage: . ./scripts/quiz.sh FILE_NAME"
  exit 1
fi

FILE_NAME=$1

TEMPLATES_DIR="./src/_templates"
QUIZZES_DIR="./src/quizzes"

if [ ! -d "$QUIZZES_DIR" ]; then
  echo "$QUIZZES_DIR directory does not exist. Creating it now..."
  mkdir -p "$QUIZZES_DIR"
  echo "$QUIZZES_DIR directory created."
fi

TEMPLATE_FILE="$TEMPLATES_DIR/template.js"
TEMPLATE_TEST_CASES_FILE="$TEMPLATES_DIR/template-test-cases.js"

if [ ! -f "$TEMPLATE_FILE" ] || [ ! -f "$TEMPLATE_TEST_CASES_FILE" ]; then
  echo "Error: Template files do not exist in $TEMPLATES_DIR."
  exit 1
fi

NEW_FILE="$QUIZZES_DIR/${FILE_NAME}.js"
NEW_TEST_CASES_FILE="$QUIZZES_DIR/${FILE_NAME}-test-cases.js"

if [ -f "$NEW_FILE" ] || [ -f "$NEW_TEST_CASES_FILE" ]; then
  echo "Error: $NEW_FILE or $NEW_TEST_CASES_FILE already exists. File creation failed."
  exit 1
fi

cp "$TEMPLATE_FILE" "$NEW_FILE"
cp "$TEMPLATE_TEST_CASES_FILE" "$NEW_TEST_CASES_FILE"

echo "$NEW_FILE and $NEW_TEST_CASES_FILE have been created successfully."
