## Update and grab new packages needed

sudo apt-get update
sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev -y

## Pull down rbenv to manage ruby

git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc\

## Add a plugin for rbenv called ruby-build

if [ ! -d ~/.rbenv/plugins/ruby-build ]; then
  git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
fi

## Install ruby 2.3.1 and set as the default global ruby for the vm

if [ ! -d ~/home/ubuntu/.rbenv/2.3.1 ]; then
  rbenv install 2.3.1
fi
rbenv global 2.3.1
rbenv rehash

## Disable documentation on downloaded gems

echo "gem: --no-document" > ~/.gemrc

## Install bundler for managing ruby gems

gem install bundler

## Install rails 4.1.5

gem install rails -v 4.1.5

## Install nodejs

cd /tmp
\curl -sSL https://deb.nodesource.com/setup_6.x -o nodejs.sh
cat /tmp/nodejs.sh | sudo -E bash -

sudo apt-get install -y nodejs

## Install the app dependencies

cd /vagrant
bundle install
gem install unicorn

sudo apt-get install mongodb -y

sudo mkdir -p /data/db/

sudo chown `id -u` /data/db
