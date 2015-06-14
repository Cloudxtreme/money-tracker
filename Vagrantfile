# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.host_name = "budgetz.lo"
  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.synced_folder "D:\\Sites\\monymon", "/home/vagrant/monymon", type: "rsync", rsync__exclude: [".meteor/", "git/", ".idea/"]

  config.ssh.forward_agent = true
  config.ssh.insert_key = false

end
