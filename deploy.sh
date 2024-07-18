#!/bin/bash

# Exit on error
set -e

# Define variables
BUILD_DIR="dist"
REPO="https://github.com/ExileSoul/exilesoul.github.io.git"
BRANCH="gh-pages"

# Build the project
echo "Building the project..."
npm run build

# Navigate to the build directory
cd $BUILD_DIR

# Initialize a new Git repository
echo "Initializing a new Git repository..."
git init

# Configure Git user
git config user.name "Gabriel Baillargeon"
git config user.email "gabrielbaillargeonsd@gmail.com"

# Add and commit the build files
echo "Committing the build files..."
git add -A
git commit -m "Deploy to GitHub Pages"

# Add the remote repository
echo "Adding remote repository..."
git remote add origin $REPO

# Push to the gh-pages branch
echo "Pushing to $BRANCH branch..."
git push -f origin master:$BRANCH

# Go back to the project root
cd ..

echo "Deployment successful!"
