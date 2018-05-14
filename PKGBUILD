# Maintainer: Bandie <bandie@chaospott.de>

pkgname=pam_panic-git
pkgver=r118.7e548bd
pkgrel=4
pkgdesc="A PAM module that protects sensitive data and provides a panic function for emergency situations."
arch=('any')
url="https://github.com/pampanic/pam_panic"
license=('GPL3')
# depends=('')
makedepends=('git' 'automake' 'autoconf' 'make' 'gcc' 'which' 'groff' 'gettext' 'm4' 'fakeroot' 'gawk' 'pam' 'cryptsetup')
#checkdepends=('') # Soon it will be cmake
validpgpkeys=('E2D7876915312785DC086BFCC1E133BC65A822DD')
source=("$pkgname-$pkgver::git://github.com/pampanic/pam_panic.git")
sha512sums=('SKIP')

pkgver() {
  cd "$pkgname-$pkgver"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd $pkgname-$pkgver
  autoreconf -i
  ./configure --prefix=/usr
  make
}

check() {
  echo "No checks yet. But soon!"
}

package() {
  cd $pkgname-$pkgver
  make DESTDIR="$pkgdir/" install
}

