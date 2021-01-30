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
sudo cp /var/www/html/R_repo/R-4.0.3-win.exe /var/www/html/learn/website/download/
sudo cp /var/www/html/R_repo/R-4.0.3.pkg /var/www/html/learn/website/download/

#-------------------------------------------------------------------------------
# tutorials
#-------------------------------------------------------------------------------
# copy tutorials 
sudo cp -r /var/www/html/learn/tutorial_en /srv/shiny-server/
sudo cp -r /var/www/html/learn/tutorial_de /srv/shiny-server/

# change permissions
sudo chmod -R 775 /srv/shiny-server/tutorial_en
sudo chmod -R 775 /srv/shiny-server/tutorial_de

# sudo R rmarkdown::run("categorical_data.Rmd") #in sudo R
# for every tutorial...

# change permissions
sudo chmod -R 775 /srv/shiny-server/sample-apps/

