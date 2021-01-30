#Maintainer: Severin Glöckner <severin.gloeckner@stud.htwk-leipzig.de>

pkgname=xmlmind-xmleditor
_pkgname=xxe
pkgver=9.4.1
_pkgver=${pkgver//./_}
pkgrel=3
pkgdesc="IDE for editing XML files"
license=('Custom')
url="https://www.xmlmind.com/xmleditor"
arch=('any')
depends=('java-runtime>=8' 'bash' 'perl')
optdepends=('cups-pdf: for the ability to print into PDF-files')
makedepends=('libicns' 'gendesk' 'elinks')
install=${_pkgname}.install
source=("http://www.xmlmind.com/xmleditor/_download/xxe-perso-${_pkgver}.zip")
sha256sums=('7387309eef8ece02f1379d721991884b7a68d5861d78595cabeaa43d22b3f70a')

prepare() {
  # use better icons
  icns2png -x xxe-perso-${_pkgver}/bin/icon/xxe.icns

  # create launcher
  gendesk -f -n \
      --pkgname="$_pkgname" \
      --name="XXE" \
      --genericname="XML IDE" \
      --comment="Edit XML files" \
      --exec=xxe \
      --startupnotify=True \
      --categories='Development;IDE;Java' \
      --mimetypes='text/xml' \
      --custom="Keywords=xmlmind
Comment[de]=XML-Dateien bearbeiten"

  # Set Java options with a launch script
  cat << EOF > xxe.sh
#!/bin/sh

# Useful Java options:
# -Dawt.useSystemAAFontSettings=on -> Required for proper scaling
# -Dswing.aatext=true -> Optional
# -Dsun.java2d.opengl=true -> Would probably cause issues with the context menus
# -Djdk.gtk.version=3 -> Use gtk3 instead of gtk2 when using the GTK LAF
# -Dswing.defaultlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel -> Set LAF

export _JAVA_OPTIONS="-Dawt.useSystemAAFontSettings=on -Dswing.aatext=true"

exec /opt/xxe/bin/xxe \$@
EOF

  # Save license in plain text format
  # (downloading, using consistent headings, removing website navigation stuff and website footer)
  curl https://www.xmlmind.com/xmleditor/license_xxe_perso.html | \
  sed -r -e   's/(<h)2([^>]*>)/\11\2/' | \
  sed -r -e 's/(<\/h)2([^>]*>)/\11\2/' | \
  elinks -dump -no-references -no-home | \
  sed '1,/Dictionary Builder/d' | \
  sed '/══════════════════════════════════════════════════════════════════════════/,$ d' \
  > LICENSE

  # If this fails, either the license or the website might have changed
  if [ "$(md5sum LICENSE)" != "a577425d88ff73d99c5f951f1932dc93  LICENSE" ]; then
    echo ""
    echo ">>> License file needs to be reviewed"
    echo ""
    exit 1
  fi
}

package() {
  mkdir -p "${pkgdir}"/opt
  mkdir -p "${pkgdir}"/usr/bin
  mkdir -p "${pkgdir}"/usr/share/doc/${_pkgname}
  mkdir -p "${pkgdir}"/usr/share/licenses/${_pkgname}

  cp -a xxe-perso-${_pkgver} "${pkgdir}"/opt/xxe/

  ln -s /opt/xxe/bin/xxetool "${pkgdir}"/usr/bin/xxetool
  ln -s /opt/xxe/bin/xmltool "${pkgdir}"/usr/bin/xmltool
  ln -s /opt/xxe/bin/csscheck "${pkgdir}"/usr/bin/csscheck
  ln -s /opt/xxe/bin/authvalue "${pkgdir}"/usr/bin/authvalue
  ln -s /opt/xxe/bin/deployxxe "${pkgdir}"/usr/bin/deployxxe

  ln -s /opt/xxe/doc "${pkgdir}"/usr/share/doc/${_pkgname}
  ln -s /opt/xxe/demo "${pkgdir}"/usr/share/doc/${_pkgname}

  ln -s /opt/xxe/legal "${pkgdir}"/usr/share/licenses/${_pkgname}
  ln -s /opt/xxe/legal.txt "${pkgdir}"/usr/share/licenses/${_pkgname}

  # place icons
  for size in 16 32 128 256 512; do
      install -Dm644 "xxe_${size}x${size}x32.png" \
        "${pkgdir}"/usr/share/icons/hicolor/${size}x${size}/apps/xxe.png
  done

  # place launcher
  install -Dm755 xxe.sh "${pkgdir}"/usr/bin/xxe
  install -Dm644 xxe.desktop -t "${pkgdir}"/usr/share/applications/

  # place license
  install -Dm644 LICENSE -t "${pkgdir}"/usr/share/licenses/${_pkgname}/
  ln -s ${_pkgname} "${pkgdir}"/usr/share/licenses/${pkgname}

  # remove unneeded stuff
  find  "${pkgdir}"/opt/xxe/bin/ -name \*.bat -delete
  find  "${pkgdir}"/opt/xxe/bin/ -name \*.exe -delete
  rm    "${pkgdir}"/opt/xxe/bin/xxe.jstart
  rm -r "${pkgdir}"/opt/xxe/bin/icon
}
