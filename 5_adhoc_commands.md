## Ping Module 
```bash
# add controller as the host machine
sudo vi /etc/ansible/hosts
    localhost
ansible all -m ping  -o # If we want to print output in a single line
```

## Shell Module
* https://docs.ansible.com/ansible/2.9/modules/shell_module.html#shell-module
```bash
ansible all -m shell -a "date"
ansible all -m shell -a "df -h"
```

## Yum module:
* If i want to execute/install on a single ndoe, availble in the host file, we can use the below syntax
```bash
ansible private_ip_address -m modulename
ansible 10.182.0.10 -m yum -a "name=tree"

# the above command will fail, due to non root user 
ansible 10.182.0.10 -b -m yum -a "name=tree"
```

## Copy Module:
```bash
ansible all -i inv -m copy -a "src=testing.txt dest=/tmp/monday.txt"
```

## Grouping
```bash
10.182.0.10

[dbservers]
10.182.0.10
10.182.0.11

[appservers]
10.182.0.10

siva.db1.com
siva.db2.com

siva.db[1: 6].com

# If some servers are not in any group, then we need to keep them at the begining of the host
```

## Connect using Username and Password/PEM
```bash
# Create a New host either centos/ubuntu and create a user called ansible.

# sudo vi /etc/ansible/hosts
# If we want to connect using username and password
HOST_IP ansible_user=USER_NAME ansible_password=PASSWORD

# if we want to connect using username and PEM
HOST_IP ansible_user=USER_NAME ansible_ssh_private_key_file=PATH_OF_THE_KEY
```

