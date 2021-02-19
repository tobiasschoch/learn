cd /var/www/html
# sudo git init	

# remove the current version 
sudo rm -r learn/  	

# retrieve from github
sudo git clone https://github.com/tobiasschoch/learn.git

#-------------------------------------------------------------------------------
# website 
#-------------------------------------------------------------------------------
# copy R binaries to download folder
sudo mkdir /var/www/html/learn/website/download
sudo cp /var/www/html/R_repo/R-4.0.3-win.exe /var/www/html/learn/website/download/
sudo cp /var/www/html/R_repo/R-4.0.3.pkg /var/www/html/learn/website/download/

#-------------------------------------------------------------------------------
# tutorials
#-------------------------------------------------------------------------------
# copy tutorials 
sudo cp -r /var/www/html/learn/tutorial_en /srv/shiny-server/

# allenfalls zuerst mkdir tutorial_de
sudo cp -r /var/www/html/learn/tutorial_de /srv/shiny-server/

# change permissions
sudo chmod -R 775 /srv/shiny-server/tutorial_en
sudo chmod -R 775 /srv/shiny-server/tutorial_de

# update/ render the tutorials
#FIXME: funktioniert nicht 
sudo Rscript -e "setwd('/srv/shiny-server/tutorial_en/basics/')" - e "rmarkdown::run('basics.Rmd')"
sudo Rscript -e "setwd('/srv/shiny-server/tutorial_en/console/')" - e "rmarkdown::run('console.Rmd')"
sudo Rscript -e "setwd('/srv/shiny-server/tutorial_en/data_structures_1/')" - e "rmarkdown::run('data_structures_1.Rmd')"
sudo Rscript -e "setwd('/srv/shiny-server/tutorial_en/intro/')" - e "rmarkdown::run('intro.Rmd')"
sudo Rscript -e "setwd('/srv/shiny-server/tutorial_en/simple_regression/')" - e "rmarkdown::run('simple_regression.Rmd')"

# change permissions
sudo chmod -R 775 /srv/shiny-server/tutorial_en

# restart server
systemctl restart shiny-server.service

