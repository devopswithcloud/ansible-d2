## Ansible Playbook Structure.
* Every playbook is represented in the form of YAML files.
* Ansible Playbook Structure
```yaml
---
- name: <name of the play>
  hosts: <which hosts this playbook should be executed>
  become: <true/false> # this willexecute with root priviliges
  tasks:
  - name: <name of the task>
    <module-name>:
        # paramters
        <module-parameter-1>: <value-1>
        <module-parameter-2>: <value-2>
        ..
        ..
--- 
# another one here 
```

* lets write a playbook to ping all nodes

ansible -i inv all -m ping
```yaml
---
- hosts: all # serverip or groupName
  become: true
  tasks:
  - name: Ping Servers
    ping: 
```