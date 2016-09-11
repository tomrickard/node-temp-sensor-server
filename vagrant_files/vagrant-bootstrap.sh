#!/bin/sh
# Remember this file is run as root by Vagrant
# Sudo is not needed

# Install Apache
apt-get update
apt-get install -y apache2

# Install Debian configuration tool
apt-get install -y debconf-utils

# Turn off user prompts
export DEBIAN_FRONTEND="noninteractive"

# Configure MySQL prompt data
debconf-set-selections <<< "mysql-server-5.5 mysql-server/root_password password test"
debconf-set-selections <<< "mysql-server-5.5 mysql-server/root_password_again password test" 

# Install MySQL
apt-get install -y mysql-server-5.5

# Secure MySQL with non-interactive version
# bash /vagrant/vagrant_files/mysql_secure_installation_mod

# Install PHP
sudo apt-get install -y php5 php5-mysql php5-mycrpt

# Enable mcrypt in Apache
php5enmod mcrypt 
service apache2 restart

# Change the order that Apache uses to execute files so that index.php is used over index.html
echo "<IfModule mod_dir.c>
    DirectoryIndex index.php index.html index.cgi index.pl index.php index.xhtml index.htm
</IfModule>" > /etc/apache2/mods-enabled/dir.conf

# Add PHP info landing page
echo "<?php
	phpinfo();
?>" > /var/www/html/info.php


# Configure PHPMyAdmin prompt data
debconf-set-selections <<< "phpmyadmin	phpmyadmin/dbconfig-install boolean true"
debconf-set-selections <<< "phpmyadmin	phpmyadmin/setup-password password test"
debconf-set-selections <<< "phpmyadmin	phpmyadmin/app-password-confirm password test"
debconf-set-selections <<< "phpmyadmin	phpmyadmin/password-confirm password test"
debconf-set-selections <<< "phpmyadmin	phpmyadmin/reconfigure-webserver multiselect apache2"

debconf-set-selections <<< "phpmyadmin	phpmyadmin/mysql/app-pass password test"
debconf-set-selections <<< "phpmyadmin	phpmyadmin/mysql/admin-pass password test"

# Install PHPMyAdmin
apt-get install -y phpmyadmin

# # Add htaccess to phpMyAdmin
# # Make password
apt-get install apache2-utils -y
htpasswd -b -c /etc/phpmyadmin/.htpasswd tom test

# # Add the following the the /ust/share/phpmyadmin directory
# # In the phpMyAdmin config file
echo "<Directory /usr/share/phpmyadmin>
        AuthType Basic
        AuthName \"Restricted Files\"
        AuthUserFile /etc/phpmyadmin/.htpasswd
        Require valid-user
</Directory>" >> /etc/apache2/conf-enabled/phpmyadmin.conf

# Restart Apache
service apache2 restart

# Create softlinks for codeiniter and simple_api.php
# rm /var/www/html/index.php
# ln -s /vagrant/CodeIgniter-3.1.0/index.php /var/www/html/index.php
# ln -s /vagrant/simple_api.php /var/www/html/simple_api.php

# # CSS, JS, image soflink
# ln -s /vagrant/CodeIgniter-3.1.0/application/css /var/www/html/css
# ln -s /vagrant/CodeIgniter-3.1.0/application/js /var/www/html/js
# ln -s /vagrant/CodeIgniter-3.1.0/application/images /var/www/html/images

#!/bin/bash
# installs NodeJS (which includes NPM) on Ubuntu 32/64 bit and Raspberry Pi arm6/arm7

# Move to download folder
cd /home/$(whoami)/Downloads

# Get latest stable node for Ubuntu x64
wget https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-x64.tar.xz

# Unpack the tarball
tar -xvf node-v4.5.0-linux-x64.tar.xz

# Copy files to the correct location
cd node-v4.5.0-linux-x64
sudo cp -R * /usr/local

# Change permission settings
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# Enable mcrypt in Apache
php5enmod mcrypt 
service apache2 restart

# Setup demo database
# bash /vagrant/vagrant_files/setup_sensor_database.sh