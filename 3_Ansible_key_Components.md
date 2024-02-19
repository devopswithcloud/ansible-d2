## Ansible Key components/Terms
* `inventory`: List of nodes to which ansible controller server should communicate 
    * by default the location is available at `/etc/ansible/hosts` , but we can pass our own custom inventory as well using `-i`
* `Module`:
    * Module is the smallest automation unit in Ansible 
    * For every task we want to perform, we need to check the relevant module from ansible. 
    * Based on the module selected, we need to pass the arguments . 
* `Task`:
    * Task in ansible will be consisting of Modules. 
* `play`:
    * Play in ansible will be consisting of multiple tasks. 
* `playbooks`: 
    * Playbook in ansible will be consisting of one or more plays. 