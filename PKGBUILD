# Maintainer: Lars Hagström <lars@foldspace.nu>
# Contributor: Nephyrin Zey <nephyrin@doublezen.net>
# Contributor: John Schoenick <john@pointysoftware.net>
# Contributor: Geoffrey Teale <tealeg@googlemail.com>
pkgname=google-breakpad-git
pkgver=r1430.258591e
pkgrel=1
pkgdesc="An open-source multi-platform crash reporting system"
arch=('i686' 'x86_64' 'armv7h')
url="http://code.google.com/p/google-breakpad/"
license=('BSD')
makedepends=('git' 'depot-tools-git')
depends=('gcc-libs')
options=('staticlibs' '!strip')
conflicts=('google-breakpad-svn')

prepare() {
  msg2 "Source download is performed in pkgver. See https://bugs.archlinux.org/task/42433"
}

pkgver() {
  mkdir "$srcdir/${pkgname}"
  cd "$srcdir/${pkgname}"
  /opt/depot-tools-git/fetch breakpad > /dev/null

  cd "$srcdir/${pkgname}/src"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${pkgname}/src"

  msg2 "Configuring"
  ./configure --prefix=/usr
  msg2 "Building"
  make
}

package() {
  cd "$srcdir/${pkgname}/src"
  make DESTDIR="$pkgdir" install
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
}
