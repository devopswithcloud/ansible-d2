## Create Ansible Nodes
```bash
# Create a Ansible Controller
gcloud compute instances create ansiblecontroller --zone us-west4-b --machine-type e2-medium --create-disk=auto-delete=yes,boot=yes,device-name=ansiblecontroller,image=projects/centos-cloud/global/images/centos-7-v20240110,mode=rw,size=20 --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default

# Create a Ansible Centos node
gcloud compute instances create ansible-centos-host --zone us-west4-b --machine-type e2-medium --create-disk=auto-delete=yes,boot=yes,device-name=ansiblecontroller,image=projects/centos-cloud/global/images/centos-7-v20240110,mode=rw,size=20 --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default

# Create a Ansible Other Centos node
gcloud compute instances create ansible-centos-host-other --zone us-west4-b --machine-type e2-medium --create-disk=auto-delete=yes,boot=yes,device-name=ansiblecontroller,image=projects/centos-cloud/global/images/centos-7-v20240110,mode=rw,size=20 --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default

# Create a Ubuntu node
gcloud compute instances create ansiblehost-ubuntu --zone=us-west4-b --machine-type=e2-medium --create-disk=auto-delete=yes,boot=yes,device-name=ansiblehost-ubuntu,image=projects/ubuntu-os-cloud/global/images/ubuntu-2004-focal-v20240209,mode=rw,size=10 --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default

# Create a Ansible Ubuntu node
```

## Install Ansible
```bash
# Login with the root user and create a user called ansible and this user should be havign sudo permissions on all the servers. # Creating a user called ansible on the hosts(both controller and worker)
useradd ansible
passwd ansible

# We need to make the necessary entrys in to sudo file, so ansible user can go with sudo and also with password less access.
visudo
ansible         ALL=(ALL)       NOPASSWD: ALL

# Next, by default these machines cant be logged in using the password. So make sure the password based authentication is enabled
vi /etc/ssh/sshd_config

# Restart the sshd service
service sshd restart

# Install Ansible on the controller only.
yum install ansible -y 
```


## Generate ssh key
```bash
# Generate the SSH key in the Ansible Server
ssh-keygen

# Even though we have the key generated, still comnnecting to the host machine its asking for the password.
# Now, copy the key generated to the host machine as the ansible user. 

ssh-copy-id ansible@<PRIVAT_IP>
```

## Test Ansible Installation
```bash
# Ansible need the host machine details to communciate and perform certain tasks.
# The default host/inventory file is avaialble at this location

vi /etc/ansible/hosts
ansible -m ping all
```