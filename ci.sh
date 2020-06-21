#!/bin/bash
git pull
mvn clean package
java -jar target/crm-0.0.1-SNAPSHOT.jar