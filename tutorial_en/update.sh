chmod -R 775 /opt/shiny-server/samples/tutorial_en

cd /opt/shiny-server/samples/tutorial_en/intro
sudo Rscript -e "rmarkdown::run('intro.Rmd')" -e "q('no')"

cd /opt/shiny-server/samples/tutorial_en/basic
sudo Rscript -e "rmarkdown::run('basic.Rmd')" -e "q('no')"

cd /opt/shiny-server/samples/tutorial_en/intermediate
sudo Rscript -e "rmarkdown::run('intermediate.Rmd')" -e "q('no')"


