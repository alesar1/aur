# Maintainer: Dmitry Valter <`echo ZHZhbHRlciA8YXQ+IHByb3Rvbm1haWwgPGRvdD4gY29tCg== | base64 -d`>

pkgname=drawio-desktop
pkgver=18.0.4
pkgrel=1
pkgdesc='Diagram drawing application built on web technology'
arch=('any')
url='https://github.com/jgraph/drawio-desktop'
license=('Apache')
depends=(electron18 libnotify shared-mime-info)
makedepends=(yarn ant 'nodejs>=12')
options=('!strip')
source=("drawio-$pkgver.tar.gz::https://github.com/jgraph/drawio/archive/v$pkgver.tar.gz"
        "drawio-desktop-$pkgver.tar.gz::https://github.com/jgraph/drawio-desktop/archive/v$pkgver.tar.gz"
        "drawio.xml")
sha512sums=('5ecc717d4f2a4389f2750a0ff8d441f3623c8f8835c1ec129ba297f49cf560a21161358eee03da68ed66b968d8ea0c31984e495235db6907db3fa2efc265debd'
            '4c805c67746466ea2487df54f9f36ac968f5c1cba5e1ffab836123291f13105a03faeb978737b9e0bfbdde7154533563dd1a1153eaf7ff45014011f65054e504'
            '8899108b4112f065173a077ca68d4d915780bcc993c69924098e134fa05338a20cb0391720b7b45c27071f789fbe5a6a02228dd633570e91fb4482082c480539')

build() {
  cd "$srcdir/drawio-$pkgver"/etc/build
  ant app
  cd "$srcdir/drawio-$pkgver"/src/main/webapp

  rm -rf "META-INF" "WEB-INF"

  # disable updater
  sed -e '/electron-updater/d' -i 'package.json'
  local updater='const autoUpdater = { on: () => {}, setFeedURL: () => {}, checkForUpdates: () => {} }'
  sed -e 's/.*require("electron-updater").*/'"$updater"'/' -e '/checkForUpdates,/d' -i 'electron.js'

  # fix version in package.json
  sed -i 's/"version": ".*"/"version": "'"$pkgver"'"/g' package.json

  yarn install --cache-folder ../npm-cache --prod
  yarn autoclean -I
  yarn autoclean -F

  # remove paths refering build directories
  find . -name 'package.json' -exec sed "s,$srcdir/src/drawio-$pkgver/src/main/webapp,/usr/lib/drawio,g" -i {} \;

  rm -f 'package-lock.json'
  find . -name '.yarnclean'         -exec rm -fv {} \;
  find . -name 'yarn.lock'          -exec rm -fv {} \;
  find . -name '.airtap.yml'        -exec rm -fv {} \;
  find . -name '.bin'               -exec rm -fvr {} +
  find . -name 'well-known'         -exec rm -fvr {} +
  find . -name '.coveralls.yml'     -exec rm -fv {} \;
  find . -name '.gitignore'         -exec rm -fv {} \;
  find . -name '.github'            -exec rm -fvr {} +
  find . -name '.eslintrc*'         -exec rm -fv {} \;
  find . -name '.jscs.json'         -exec rm -fv {} \;
  find . -name '.npmignore'         -exec rm -fv {} \;
  find . -name '.prettierrc.js'     -exec rm -fv {} \;
  find . -name '.travis.yml'        -exec rm -fv {} \;
  find . -name '.tonic_example.js'  -exec rm -fv {} \;

}

package() {
  cd "$srcdir/drawio-$pkgver"/src/main/webapp

  mkdir -p "$pkgdir/usr/lib"
  cp -rp . "$pkgdir/usr/lib/draw.io"

  # fix file permissions
  chmod -R g+r,o+r "$pkgdir/usr/lib/draw.io"

  # create run script
  mkdir -p "$pkgdir/usr/bin"
  printf '%s\n' \
  '#!/bin/sh' \
  'exec electron18 /usr/lib/draw.io "$@"' \
  > "$pkgdir/usr/bin/draw.io"
  chmod a+x "$pkgdir/usr/bin/draw.io"

  # create desktop file
  mkdir -p "$pkgdir/usr/share/applications"
  printf '%s\n' \
  '[Desktop Entry]' \
  'Name=drawio' \
  'Comment=draw.io desktop' \
  'Exec=/usr/bin/draw.io %U' \
  'Terminal=false' \
  'Type=Application' \
  'Icon=draw.io' \
  'StartupWMClass=draw.io' \
  'Categories=Graphics;' \
  > "$pkgdir/usr/share/applications/draw.io.desktop"

  ln -s /usr/bin/draw.io "$pkgdir/usr/bin/drawio"

 # shared-mime-info defines vsdx differently from vsd, thus upstream setup seems to be incorrect
  MIMETYPE="$(grep mimeType "$srcdir/drawio-desktop-$pkgver/electron-builder-linux-mac.json" | \
              sed 's/.*"mimeType":.*"\(.*\)".*/\1/g' | \
              sed 's/vnd\.visio/vnd.ms-visio.drawing.main+xml/g' | tr '\n' ';')"
  if [[ -n "${MIMETYPE}" ]]; then
      echo "MimeType=${MIMETYPE}" >> "$pkgdir/usr/share/applications/draw.io.desktop"
  fi

  # create icons
  cd "$srcdir/drawio-desktop-$pkgver"
  find 'build' -regex '.*/[0-9]+x[0-9]+\.png' |
  grep -o '[0-9]\+' | 
  sort -u |
  while read size; do
    if [[ -f "build/${size}x${size}.png" ]]; then
      install -Dm644 "build/${size}x${size}.png" \
      "$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/draw.io.png"
    fi
  install -Dm644 "$srcdir/drawio.xml" "$pkgdir/usr/share/mime/packages/drawio.xml" 
  done
}
