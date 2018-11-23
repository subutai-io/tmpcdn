# tempCDN
TempCDN is Fake CDN project for replacing Gorjun CDN project: https://github.com/subutai-io/cdn

## Virtual environmentcod
There are 2 files to bring up TempCDN:

- Vagrantfile
- vagrant-subutai.yml

It brings up VirtualBox VM Subutai peer, installs `git, curl, nodejs`

## How to

1. Specify your network interface to get public IP in Vagrantfile
2. Run `vagrant up`
3. Run `vagrant ssh`
4. Inside VM run `git clone https://github.com/subutai-io/tmpcdn.git`
5. Run `cd tempcdn` (tmpcdn)
6. Run `sudo subutai map add -p http -i localhost:18338 -e 8338 -n {your_ip_address}`
7. Run `npm install`
8. Run `node server`


Now your FakeCDN is accessible by http://{your_ip_address}:8338/kurjun/rest/raw/info?id={id_of_json_object}
