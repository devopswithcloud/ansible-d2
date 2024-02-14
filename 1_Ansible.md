## Pull and Push based 
* In `Pull` based CM, on the worker nodes we need to install a `software agent` of the CM server who is responsible for commuincation, and making sure the desired state is met, 
* In `Push` based CM , there will be `no agents`  requored on the nodes. 
* in push based cm, the cm server needs to have the below ones
    * List of all the nodes to commuincate, and make the desired state met
    * The credentials to communicate to the nodes.
    * It will use SSH/Winrm to communicated to the nodes
* CM tools like chef, puppet are pull based.
* Ansible is a push based CM
* the agents on the pull based will periodically check for any configuration changes from the central server. 
