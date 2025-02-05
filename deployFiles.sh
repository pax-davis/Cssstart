#!/bin/bash

while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    echo "Missing required parameter."
    echo "syntax: deployFiles.sh -k <pem key> -h <hostname> -s <service>"
    exit 1
fi

echo "Deploying $service to $hostname..."
scp -i "$key" -r ./build ec2-user@$hostname:/var/www/html
