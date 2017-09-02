# cd /vagrant
# bundle install



# sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev nginx -y

# ## Install RBENV to manage ruby versions
# echo "---------------------------------"
# echo "Installing rbenv"

# git clone https://github.com/rbenv/rbenv.git ~/.rbenv

# echo "---------------------------------"
# echo "Setting rbenv on path ~/.bashrc"
# echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
# echo 'eval "$(rbenv init -)"' >> ~/.bashrc

# echo "Sourcing ~/.bashrc"
# source ~/.bashrc

# echo "Cloning"

# git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# rbenv install 2.3.1
# rbenv global 2.3.1

# ## Disable documentation on package installs

# echo "gem: --no-document" > ~/.gemrc
# gem install bundler

# ## Install rails
# echo "---------------------------------"
# echo "Installing rails"

# gem install rails -v 4.1.5

# ## Install unicorn to act as the process to serve the rails application
# ##   May need to be `apt-get install unicorn` or use bundle exec
# echo "---------------------------------"
# echo "Installing unicorn"

# gem install unicorn

# ## Install nodejs from a trusted source
# echo "---------------------------------"
# echo "Installing nodejs"

# cd /tmp
# \curl -sSL https://deb.nodesource.com/setup_6.x -o nodejs.sh
# less nodejs.sh

# cat /tmp/nodejs.sh | sudo -E bash -

# sudo apt-get install -y nodejs

# echo "---------------------------------"
# echo "Installing npm, jspm, gulp"

# cd /vagrant

# # install mongo next

# # cd to the app directory

# # install bundled gems

# # npm install

# npm install jspm -g -y
# npm install gulp -g -y
# npm install
# jspm install

# # update the nginx config

