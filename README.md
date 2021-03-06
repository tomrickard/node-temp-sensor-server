# Temperature Sensor Server

A remote sensing demo. The server accepts sensor data from a temperature sensor relay. Data is transmitted via websockets and stored in a MySQL database. The server provides a web interface to view the data in either real-time or static formats. Uses:

- Express
- Handlebars
- MySQL
- Socket.io
- Stylus
- Line-chart
- Datetime-picker

## Usage

To start the server:

```
npm run start
```

To run tests:

```
npm run test
```

Build CSS files from stylus

```
npm run stylus
```

Build and watch CSS files

```
npm run stylus-w
```

## Static Page

The static page display data from the sensor. It defaults to the last ten hours. The start and end datetimes can be adjusted using the toggles.

![Static Chart](/markdown_images/static.png)

## Live page

The live page displays real-time data. It defaults to the last hour + live updates. The start date-time can be adjusted using the toggles. The data series size can accumulate points or stay fixed. When fixed the start point moves every time a new point arrives.

![Live Chart](/markdown_images/live.png)

## Vagrant

The Vagrant file can be used to provision a LAMP stack on Ubuntu 14.04 (Trusty Tahr). If you have Vagrant just run:

```
vagrant up
```

Vagrant should automatically provision the machine using the *vagrant-bootstrap.sh* file. PhpMyAdmin is installed along side the LAMP stack. Usernames and passwords are set in the *mysql_install.conf* file.

## MySQL

Must have a MySQL database provisioned to work. In the *vagrant_files* directory there is a helper script *setup_sensor_database.sh* that created the *sensor* database and *temperature* table.

## License

MIT