#!/bin/bash
# author: grimi
# name: mime-archpkg
# require: grep, sed, convert (imagemagick), rsvg-convert (librsvg), gtk-update-icon-cache

declare MODE=usage
declare MYDIR=/usr/share/mime-archpkg
declare -r NAME=application-x-archpkg
declare MUTE=0


add() {
   # $1 = theme (if not present, add for all), $2 = [0|1] mute
   local file theme elem suf abc one="$1"
   local -i size mute=${2:-$MUTE}
   local -a taba tab
   if [[ -d $MYDIR ]]; then
      cd "$MYDIR"
      for file in *.svgz; do
         theme="/usr/share/icons/${file%.svgz}"
         if [[ $one ]]; then
            if [[ ${file%.svgz} != $one ]]; then
               continue
            fi
         fi
         if [[ -f $theme/index.theme ]]; then
            if [[ $mute -ne 1 ]]; then
               echo ">> Adding mimetype icons for $theme... <<"
            fi
            taba=($(grep "\[.*mimetypes.*\]" "$theme/index.theme"|sed 's/\[//; s/\]//'))
            for elem in "${taba[@]}"; do
               tab=($(echo $elem|sed 's/\//\n/'))
               if [[ ${elem/scalable/} != ${elem} ]]; then
                  size=0
               else
                  if [[ ${tab[0]/[0-9]/} != ${tab[0]} ]]; then
                     abc="${tab[0]}"
                  elif [[ ${tab[1]/[0-9]/} != ${tab[1]} ]]; then
                     abc="${tab[1]}"
                  else
                     continue
                  fi
                  if [[ -h $theme/$abc ]]; then         # skip link
                     continue
                  fi
                  if [[ ${abc/@2x/} != $abc ]]; then
                     abc=${abc/@2x/}
                     size=${abc/x*/}
                     size=$size*2
                  else
                     size=${abc/x*/}
                  fi
               fi
               if [[ $size -ne 0 ]]; then
                  if [[ -f $theme/$elem/package.svg ]]; then
                     suf=svg
                  else
                     suf=png
                  fi
                  convert -resize ${size}x${size} -background none "$file" /tmp/archpkg.$suf
                  install -m644 /tmp/archpkg.$suf "$theme/$elem/$NAME.$suf"
               else
                  rsvg-convert -o /tmp/archpkg.svg -f svg "$file"
                  install -m644 /tmp/archpkg.svg "$theme/$elem/$NAME.svg"
               fi
            done
            if [[ -f $theme/icon-theme.cache ]]; then
               gtk-update-icon-cache -q -f "$theme"
            fi
         fi
      done
   fi
}

remove() {
   # $1 = theme (if not present, remove from all)
   local file theme one="$1"
   if [[ -d $MYDIR ]]; then
      cd "$MYDIR"
      for file in *.svgz; do
         theme="/usr/share/icons/${file%.svgz}"
         if [[ $one ]]; then
            if [[ ${file%.svgz} != $one ]]; then
               continue
            fi
         fi
         if [[ -d $theme ]]; then
            if [[ $MUTE -ne 1 ]]; then
               echo ">> Removing installed mimetype icons from $theme... <<"
            fi
            find "$theme/" -type f -name $NAME.png -exec rm "{}" \;
            find "$theme/" -type f -name $NAME.svg -exec rm "{}" \;
            if [[ -f $theme/icon-theme.cache ]]; then
               gtk-update-icon-cache -q -f "$theme"
            fi
         fi
      done
   fi
}

update() {
   # $1 = theme (if not present, update for all)
   local file theme one="$1"
   if [[ -d $MYDIR ]]; then
      cd "$MYDIR"
      for file in *.svgz; do
         theme="/usr/share/icons/${file%.svgz}"
         if [[ $one ]]; then
            if [[ ${file%.svgz} != $one ]]; then
               continue
            fi
         fi
         if [[ -d $theme && -f $theme/index.theme ]]; then
            if [[ $MUTE -ne 1 ]]; then
               echo ">> Updating installed mimetype icons for $theme... <<"
            fi
            find "$theme/" -type f -name $NAME.png -exec rm "{}" \;
            find "$theme/" -type f -name $NAME.svg -exec rm "{}" \;
            add "${file%.svgz}" 1
         fi
      done
   fi

}

usage() {
   echo "USAGE: [-q] <-a|-u|-r> [theme]"
   echo "     -q: don't comment action"
   echo "     -a: add archpkg mime icons"
   echo "     -u: update archpkg mime icons"
   echo "     -r: remove archpkg mime icons"
   echo "  theme: action only for entered theme"
}


if [[ $1 == "-q" ]]; then
   MUTE=1
   shift
fi


case "$1" in
   -a) MODE=add ;;
   -u) MODE=update ;;
   -r) MODE=remove ;;
esac

if [[ $MODE != "usage" && $USER != "root" ]]; then
   echo "root privileges needed!"
   exit 1
fi

$MODE "$2"


