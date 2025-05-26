#!/bin/bash
# Stop on error
set -e
# Load nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# Move to folder with the apps from the github
cd /root
# Clone the repo
git clone https://github.com/DmitryLankmiller/GithubActionsTestProject
# Move to specific repo
cd /root/GithubActionsTestProject
# Install Node.js
nvm install
# Check node version
node -v
# Check npm version
npm -v
# Install dependencies
npm i
# Build application
pnpm w build
# Move build to the www folder
cp -rf /root/GithubActionsTestProject/webapp/dist/* /var/www/default
# Remove repo
rm -rf /root/GithubActionsTestProject
7mTF
