#!/bin/bash

# extracts NPM environment variable names
npm_val() {
    local value=$(ENV | grep -e "npm_package_$1" | cut -d "=" -f 2)
    echo $value
}

# splits a string on dashes and rejoins with first letter uppercased
pretty() {
    IFS=\-
    local output
    for c in $1; do
        output="$output ${c^}"
    done

    echo $output
}

# get our prettified package variables
declare version=$(npm_val version)
declare name=$(npm_val name)
declare deployment=$(clasp deployments | tail -n 1 | cut -d " " -f 2)

# deploy a new version of the library
clasp deploy \
    -i "$deployment" \
    -d "$(pretty $name) | ${version}"

# get the latest library version
declare lib_version=$(clasp versions | tail -n 1 | cut -d " " -f 1)

# update README "latest version" field
declare readme_path="README.md"
declare latest_tag=$(git tag --list | tail -n 1)

# replace old version with the new one
sed -i \
    -e "s/\(.\?Latest library version:\) [0-9]\+/\1 $lib_version/" \
    -e "s/\(.\?\"version\":\) \"[0-9]\+\"/\1 \"$lib_version\"/" \
    "$readme_path"

# forward the latest tag & show latest log
git add "$readme_path"
git commit --amend --no-edit
git tag -af "$latest_tag" -m $(git cat-file tag "$latest_tag" | tail -n 1)
git log -n 1
