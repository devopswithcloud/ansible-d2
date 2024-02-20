* if we want to pass multiple keys and values, and ask the user to pass the data in a file all together, then we can use `vars_files`

## Create a variable file
```bash
# vi variable.yaml
courseName: Openshift
batchNumber: 4
```

## Create a Playbook 
```yaml
# vi variableplay.yaml
---
- hosts: all
  become: true
  vars_files:
  - variable.yaml
  tasks:
  - name: Install Apache HTTPD
    yum:
      name: httpd
      state: present
  - name: Copy the index file
    template: # Dynamic data reflect  
      src: index.html
      dest: /var/www/html/index.html
    notify: 
    - Restart the service
# Handlers are the special task, which will run at the end of th play when notified by another task
  handlers: 
  - name: Restart the service
    service:
      name: httpd
      enabled: true
      state: restarted
```

* Passing variable using the run time will take presendece compared to the variables passed in the playbook or variables files.

## Pass the variable data dynamically for diff env
```yaml
# vi dev_vars.yaml
courseName: Devops-dev
batchNumber: 1-dev

# vi tst_vars.yaml
courseName: Devops-tst
batchNumber: 1-tst

# vi dynamicenvplay.yaml
---
- hosts: all
  become: true
  vars_files:
  - "{{envv}}_vars.yaml" # tst_vars.yaml
  tasks:
  - name: Install Apache HTTPD
    yum:
      name: httpd
      state: present
  - name: Copy the index file
    template: # Dynamic data reflect  
      src: index.html
      dest: /var/www/html/index.html
    notify: 
    - Restart the service
# Handlers are the special task, which will run at the end of th play when notified by another task
  handlers: 
  - name: Restart the service
    service:
      name: httpd
      enabled: true
      state: restarted
```

## Pass the `default` environment value
```yaml
# vi dynamicenvplay.yaml
---
- hosts: all
  become: true
  vars:
  - envv: dev
  vars_files:
  - "{{envv}}_vars.yaml" # tst_vars.yaml
  tasks:
  - name: Install Apache HTTPD
    yum:
      name: httpd
      state: present
  - name: Copy the index file
    template: # Dynamic data reflect  
      src: index.html
      dest: /var/www/html/index.html
    notify: 
    - Restart the service
# Handlers are the special task, which will run at the end of th play when notified by another task
  handlers: 
  - name: Restart the service
    service:
      name: httpd
      enabled: true
      state: restarted
```