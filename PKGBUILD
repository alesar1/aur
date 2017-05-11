# Maintainer: Jonathan la Cour <jon@lacour.me>
# Contributor: Veeti Paananen <veeti.paananen@rojekti.fi>
pkgname=armory-bin
pkgver=0.96
_binver=0.96
pkgrel=1
pkgdesc="Full-featured Bitcoin wallet management application (official binary)"
arch=('x86_64')
url="https://github.com/goatpig/BitcoinArmory"
license=('AGPL3' 'MIT')
depends=('bitcoin-daemon' 'crypto++' 'python2' 'python2-pyqt4' 'python2-twisted' 'python2-psutil' 'swig' 'xdg-utils')
conflicts=('armory' 'armory-git')

# Don't blindly trust a random AUR package with your coins! Signed hashes available at
# https://github.com/goatpig/BitcoinArmory/releases with GPG ID 8C5211764922589A
_signatures="https://github.com/goatpig/BitcoinArmory/releases/download/v${pkgver}/sha256sum.txt.asc"
source=("https://github.com/goatpig/BitcoinArmory/releases/download/v${pkgver}/armory_${_binver}-gcc5.4_amd64.deb")
sha256sums=('987d1a262cb92a9bb70ce85ec75b15a4ef20f90c9ac322c00e7908fe086f2bf2')

check() {
  msg 'Validating GPG signature...'
  msg2 '(To disable: remove/rename check() function from PKGBUILD)'
  gpg --recv-key 8C5211764922589A
  curl -sL $_signatures -o sha256sum.txt.asc
  msg2 "Downloading $_signatures"
  gpg --verify 'sha256sum.txt.asc'
  msg2 'GPG signature is valid.'

  msg 'Validating signed checksum of downloaded binary...'
  grep 'gcc5\.4_amd64.deb' 'sha256sum.txt.asc' | tr -d '\r' | sha256sum -c -
  msg2 'Checksum valid.'
}

package() {
  tar xJf "$srcdir/data.tar.xz"

  find usr/lib/ -type f -exec sed -i 's|/usr/bin/python|/usr/bin/python2|g' {} \;
  find usr/lib/ -type f -exec sed -i 's|/usr/bin/env python|/usr/bin/env python2|g' {} \;

  mv usr $pkgdir

  cat "$pkgdir/usr/lib/armory/LICENSE.py" | tail -n +3 | head -n -1 > LICENSE
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
