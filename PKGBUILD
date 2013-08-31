# Contributor && Maintarner: Swift Geek <swiftgeek ɐt gmail døt com>
# TODO: ADD parser for config in /etc/makepkg.d/. Use that config instead of auto-detection! tidier code
# TODO: FIND AND FIX EDGE CASES (EMPTY VARS!) *SPANK*

pkgname=firefox-nightly-i18n
pkgver=0
pkgrel=0
pkgdesc='Universal i18n for firefox-nightly - xpi version'
url="http://download.cdn.mozilla.net/pub/mozilla.org/firefox/nightly/latest-mozilla-central-l10n/linux-$CARCH/xpi/"
arch=('i686' 'x86_64')
license=('MPL')
depends=('firefox-nightly')

countdown() {
  # TODO: FFS CHECK FOR MAIN PID
  local i 
  for ((i=$1; i>=1; i--)); do
    echo -ne "\rPress [i] to start interactive config in $i second(s) or any key to skip "
    sleep 1
  done
}

ls_lang () {
(  ftp -in ftp.mozilla.org <<EOF
user anonymous secrets
cd /pub/firefox/nightly/latest-mozilla-central-l10n/linux-$CARCH/xpi/
ls
EOF
) | grep ftp.*ftp.*firefox.*langpack.xpi$ | awk -F\. '{print $(NF-2)}' | tr '\n' ' '
}

package() {
  cd "${srcdir}"
  msg "Getting LANG-packs list from ftp.mozilla.com…"
  srv_lang_list=($(ls_lang))
  msg2 "Available LANG-packs on the server: ${srv_lang_list[*]}"
  sys_lang_list=($(grep -v \# /etc/locale.gen | awk -F\. '{print $1};'| tr '_' '-' | tr '\n' ' '))
  msg2 "Detected LANGs: ${sys_lang_list[*]}"

  # Matching results against system
  #TODO: fix for ja-JP-mac
  for i in ${!sys_lang_list[*]}; do
    if [[ " ${srv_lang_list[*]} " == *" ${sys_lang_list[$i]} "* ]]; then
      #echo "Perfect match"
      true
    elif [[ " ${srv_lang_list[*]} " == *" ${sys_lang_list[$i]%-*} "* ]]; then
      #echo "Cutted match"
      sys_lang_list[$i]=${sys_lang_list[$i]%-*}
    else
      warning "${sys_lang_list[$i]} was not found on the server - removing"
      unset sys_lang_list[$i]
    fi
  done
  msg "Matched LANGs: ${sys_lang_list[*]}"

  countdown 10 & countdown_pid=$!
  read -s -n 1 -t 10 ikey || true
  kill $countdown_pid
  echo -e -n "\n"

  if [ "$ikey" = "i" ]; then
    # Pre-select menu items
    for item in ${srv_lang_list[*]}; do
      if [[ " ${sys_lang_list[*]} " == *" ${item} "* ]]; then
        menu_lang_list+=($item desc on)
      else
        menu_lang_list+=($item desc off)
      fi
    done
    echo ${menu_lang_list[*]}
    # Display dialog
    selected_lang_list=$(dialog --clear --backtitle "$pkgname" --checklist 'Choose langpacks to include' 0 0 0 "${menu_lang_list[@]}" 2>&1 >/dev/tty)
    echo ${selected_lang_list[*]}
  else
    selected_lang_list=${sys_lang_list[*]}
    msg2 "Assuming auto-detect was good"
  fi

}
