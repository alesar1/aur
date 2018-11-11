# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=artanis-git
pkgver=0.2.5.206.gaf624e5
pkgrel=1
pkgdesc="A fast monolithic web-framework of Scheme"
arch=('x86_64')
url="http://web-artanis.com/"
license=('GPL')
depends=('guile')
makedepends=('git')
provides=('artanis')
conflicts=('artanis')
source=("git+https://gitlab.com/NalaGinrut/artanis.git")
md5sums=('SKIP')
options=('!strip')

pkgver() {
  cd ${pkgname%-git}
  git describe|cut -c2-|tr - .
}

build() {
  cd ${pkgname%-git}
  ./autogen.sh 
  GUILE_EFFECTIVE_VERSION=2.2 ./configure --prefix=/usr \
			 --bindir=/usr/bin \
			 --datarootdir=/usr/share \
			 --infodir=/usr/share/info 
  make
  make docs
}

check() {
  cd ${pkgname%-git}
  export GUILE_LOAD_PATH=$GUILE_LOAD_PATH:.
  guile -c '(display (@ (artanis artanis) artanis-version))'
}

package() {
  cd ${pkgname%-git}
  make DESTDIR="$pkgdir/" install
  # repair
  cp -r "$pkgdir"/bin "$pkgdir"/usr
  rm -r "$pkgdir"/bin
}
