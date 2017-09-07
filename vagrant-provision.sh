sudo apt-get update
sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev -y

git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc\

if [ ! -d "~/.rbenv/plugins/ruby-build"]; then
  git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
fi

if [ ! -d "~/home/ubuntu/.rbenv/2.3.1"]; then
  rbenv install 2.3.1
fi

rbenv global 2.3.1

rbenv rehash

echo "gem: --no-document" > ~/.gemrc
gem install bundler

gem install rails -v 4.1.5

cd /tmp
\curl -sSL https://deb.nodesource.com/setup_6.x -o nodejs.sh
cat /tmp/nodejs.sh | sudo -E bash -

sudo apt-get install -y nodejs

cd /vagrant
bundle install
gem install unicorn

apt-get install mongodb

sudo mkdir -p /data/db/

sudo chown `id -u` /data/db

