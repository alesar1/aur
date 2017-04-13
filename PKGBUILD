# Maintainer:  Michael Kogan <michael dot kogan at gmx dot net>
# Based on PKGBUILD for wire-desktop by Conor Anderson

pkgname=unreel
pkgver=1.0.2
pkgrel=1
pkgdesc="A GUI to create Reveal presentations"
arch=('i686' 'x86_64')
url="https://github.com/linux-man/unreel"
license=('GPL3')
depends=('gconf' 'libnotify' 'libappindicator-gtk2' 'libxtst' 'nss')
makedepends=('npm')
source=("https://github.com/linux-man/unreel/archive/v$pkgver.tar.gz")
md5sums=('2a7526dd39834b22c3b6b4cce80b5236')

prepare() {
  gendesk -f -n --name=Unreel --pkgname="${pkgname}" --pkgdesc="${pkgdesc}" --exec="${pkgname}" --categories="Office"
}

build() {
  cd "${srcdir}/$pkgname-$pkgver"
  npm install
  if [ $CARCH == 'x86_64' ]; then
    node_modules/.bin/build --linux --x64 --dir
  elif [ $CARCH == 'i686' ]; then
    node_modules/.bin/build --linux --ia32 --dir
  else
    echo "Unknown architecture"; exit 1;
  fi
}

package() {
  # Place files
  install -d "${pkgdir}/usr/lib/${pkgname}"
  if [ $CARCH == 'x86_64' ]; then
    cp -a "${srcdir}/${pkgname}-${pkgver}/dist/linux-unpacked/"* "${pkgdir}/usr/lib/${pkgname}"
  elif [ $CARCH == 'i686' ]; then
    cp -a "${srcdir}/${pkgname}-${pkgver}/dist/linux-ia32-unpacked/"* "${pkgdir}/usr/lib/${pkgname}"
  else
    echo "Unknown architecture"; exit 1;
  fi
  
  # Symlink main binary
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/${pkgname}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  
  # Place desktop entry and icon
  desktop-file-install -m 644 --dir "${pkgdir}/usr/share/applications/" "${srcdir}/${pkgname}.desktop"
  install -dm755 "${pkgdir}/usr/share/icons/hicolor/512x512/apps"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/icons/icon.png" \
      "${pkgdir}/usr/share/icons/hicolor/512x512/apps/${pkgname}.png"
}