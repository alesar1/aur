# Maintainer: David Parrish <daveparrish@tutanota.com>
# Maintainer: David Parrish <BM-2cU1Bk3fXVo9VrGpo2YQFJ1it31gSuAy5j>

pkgname=pybitmessage-git
pkgver=v0.6.0.r1.gaf0dfdc
pkgrel=1
pkgdesc="Decentralized and trustless P2P communications protocol for sending encrypted messages to another person or to many subscribers"
arch=('any')
depends=('openssl' 'python2' 'python2-pyqt4' 'qt4' 'sqlite')
optdepends=('mpg123: MP3 sounds support'
            'alsa-utils: WAV sounds support')
url="https://github.com/Bitmessage/PyBitmessage"
license=('MIT')
source=("${pkgname}::git+https://github.com/Bitmessage/PyBitmessage.git")
sha256sums=('SKIP')
provides=('pybitmessage')

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  msg 'Creating shell executable'
  echo -e '#!/bin/sh\ncd /usr/share/'${pkgname}'\nexec python2 bitmessagemain.py' > pybitmessage.sh
  chmod +x pybitmessage.sh

  cd "$pkgname"

  msg 'Fixing Python version...'
  find . -type f -print0 | xargs -0 sed -i 's#/usr/bin/python#/usr/bin/python2#g'
  find . -type f -print0 | xargs -0 sed -i 's#/usr/bin/env python#/usr/bin/env python2#g'
}

build() {
  cd "$srcdir/$pkgname/src/bitmsghash"
  make
}

package() {
  cd "$pkgname"

  msg 'Installing shared files...'
  mkdir -p "$pkgdir"/usr/share/$pkgname
  cp -R src/* "$pkgdir"/usr/share/$pkgname

  msg 'Installing desktop icons...'
  install -D -m644 desktop/pybitmessage.desktop "$pkgdir/usr/share/applications/pybitmessage.desktop"
  install -D -m644 src/images/can-icon-24px.png "$pkgdir/usr/share/icons/hicolor/24x24/apps/pybitmessage.png"
  install -D -m644 desktop/can-icon.svg "$pkgdir/usr/share/icons/hicolor/scalable/apps/pybitmessage.svg"
  install -D -m644 desktop/can-icon.svg "$pkgdir/usr/share/pixmaps/pybitmessage.svg"

  msg 'Installing executable...'
  install -D -m755 $srcdir/pybitmessage.sh "$pkgdir/usr/bin/pybitmessage"

  msg 'Installing man page...'
  mkdir -p "$pkgdir/usr/share/man/man1"
  install -m644 man/pybitmessage.1.gz "$pkgdir/usr/share/man/man1"
}
