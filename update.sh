#!/bin/sh
# remove folder /learn
cd /var/www/html
rm -r learn
# clone from github
git clone https://github.com/tobiasschoch/learn.git
# copy shiny-tutorial files
cp -r /var/www/html/learn/tutorial_en/ /opt/shiny-server/samples/
cp -r /var/www/html/learn/tutorial_de/ /opt/shiny-server/samples/

