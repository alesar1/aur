# Maintainer: Iwan Timmer <irtimmer@gmail.com>

pkgname=tpm2-pkcs11-git
pkgver=r150.10854c5
pkgrel=1
pkgdesc="A PKCS#11 interface for TPM2 hardware"
arch=('i686' 'x86_64')
url="https://github.com/tpm2-software/tpm2-pkcs11"
license=('BSD')
depends=('tpm2-tools' 'sqlite' 'python-cryptography' 'python-yaml')
makedepends=('git' 'autoconf-archive')
source=("git+https://github.com/tpm2-software/tpm2-pkcs11.git")
sha256sums=('SKIP')

pkgver() {
  cd $srcdir/tpm2-pkcs11
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd $srcdir/tpm2-pkcs11

  ./bootstrap
  ./configure --prefix /usr
  make

  cd tools
  python setup.py build
}

package() {
  cd $srcdir/tpm2-pkcs11
  make DESTDIR="$pkgdir/" install

  install -Dm644 LICENSE $pkgdir/usr/share/licenses/tpm2-pkcs11-git/LICENSE

  cd tools
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
