#!/bin/sh
source mysql_install.conf

# Create database
dbsetup="CREATE DATABASE sensors;";
mysql -u $mysql_user -p$mysql_password -e "$dbsetup";

# Create tabls test
dbtable="CREATE TABLE sensors.temperature ( id int NOT NULL AUTO_INCREMENT, temperature FLOAT, date DATETIME, PRIMARY KEY (id) )";
mysql -u $mysql_user -p$mysql_password -e "$dbtable";