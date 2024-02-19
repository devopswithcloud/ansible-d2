## Create a webserver in ubuntu
```bash
# Update the repo
sudo apt update

# install apache2
sudo apt install apache2 -y

#defualt html file 
echo "Ansible Learning" > /var/www/html/index.html
```

* here are the list of modules [available](https://docs.ansible.com/ansible/2.9/modules/list_of_all_modules.html)
* For apt module [click here](https://docs.ansible.com/ansible/2.9/modules/apt_module.html#apt-module)
* We need to pass the parameters based on the module.
* Lets try to create the relavent ansible format for the above manual steps.
    * We have choosen the apt module, and we need to pass the below parameters:
        * name: apache2
        * state: present
        * update_cache: yes 
* Using the above arguments, now we need to inform ansible to execute,
* We can do this activity in 2 ways
    * adhoc
    * playbooks
* Adhoc command
```bash
ansible -b -i hosts -m apt -a "name=apache2 state=present update_cache=yes" all
```
* if we want to represent the above adhoc command in the playbook / yaml format
```yaml
---
# vi apache-install.yaml
- name: Installing a apache webserver 
  become: yes
  hosts: all
  tasts:
  - name: Install Apache2
    # Module
    apt:
      name: apache2
      state: present
      update_cache: yes
# We can execute the playbook using below command
# ansible-playbook -i hosts apache-install.yaml
```
