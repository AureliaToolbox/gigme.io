# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "aureliatoolbox-basebox"
  config.vm.network :forwarded_port, guest: 3000, host: 3000

  config.vm.provision :shell, path: "bootstrap.sh"
end
