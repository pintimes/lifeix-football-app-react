#! /bin/bash

fname=$1
releaseAPI=${fname##*/}
ftp -nv <<- EOF
open 192.168.50.199
user lifeix lifeix 
bin
put $fname /cfootball/apk/${releaseAPI}
bye  
EOF 
