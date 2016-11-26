# Maintainer: Andrew Lin <andrewlin16 at gmail dot com>
# Contributor: Simon Thorpe <simon at hivetechnology dot com dot au>
pkgname=openmpt
pkgver=1.26.07.00
pkgrel=1
pkgdesc="Audio module tracker formerly known as ModPlug Tracker"
arch=('i686' 'x86_64')
url="https://openmpt.org/"
license=('BSD')
depends=('wine-mono' 'wine_gecko')
makedepends=('gendesk' 'imagemagick')
optdepends=('bash-completion: tab completion support')
source_i686=("http://sagamusix.de/openmpt/download/OpenMPT-$pkgver.zip")
source_x86_64=("http://sagamusix.de/openmpt/download/OpenMPT-$pkgver-x64.zip")
sha1sums_i686=('1744b18ae62617aa66f9920c4c3e1047321673c5')
sha1sums_x86_64=('6adb9e70c6b563956f90736f8787c5c4fd2e50f9')

prepare(){
  convert "$srcdir/OpenMPT-$pkgver/mpt.ico" "$srcdir/icon.png"
  gendesk -n --pkgname "$pkgname" --pkgdesc "$pkgdesc" \
    --name='OpenMPT' \
    --mimetype='audio/x-mod;audio/x-s3m;audio/x-xm;audio/x-it;audio/x-mptm' \
    --categories 'Audio;Sequencer;Midi;AudioVideoEditing;Music;AudioVideo;'
}

package(){
  mkdir -p $pkgdir/usr/share
  mkdir -p $pkgdir/usr/bin
  mkdir -p $pkgdir/usr/share/bash-completion/completions
  cp -R $srcdir/OpenMPT-$pkgver $pkgdir/usr/share/openmpt
  echo -e '#!/bin/bash\n[[ "$1" == "" ]] && wine /usr/share/openmpt/mptrack.exe\n[[ "$1" != "" ]] && wine /usr/share/openmpt/mptrack.exe "$(winepath -w "$1")"' >$pkgdir/usr/bin/openmpt
  chmod +x $pkgdir/usr/bin/openmpt
  install -Dm644 "$srcdir/icon-2.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  
  mkdir -p $pkgdir/usr/share/mime/application
  echo -e '<?xml version="1.0" encoding="utf-8"?><mime-type xmlns="http://www.freedesktop.org/standards/shared-mime-info" type="audio/x-mptm"><glob pattern="*.mptm"/><comment>OpenMPT Module</comment></mime-type>' >"$pkgdir/usr/share/mime/application/x-mptm.xml"
  
  # This list of supported file extensions was taken from the features page of the website. There is probably a more complete list somewhere.
  echo "_openmpt() { local cur prev words cword split; _init_completion -s || return; _filedir '@(669|AMF|AMS|DBM|DIGI|DMF|DSM|FAR|GDM|ICE|ST26|IMF|IT|ITP|J2B|M15|STK|MDL|MED|MO3|MOD|MPTM|MT2|MTM|OKT|PLM|PSM|PTM|S3M|STM|ULT|UMX|WOW|XM)'; } && complete -F _openmpt openmpt" >$pkgdir/usr/share/bash-completion/completions/openmpt
}
