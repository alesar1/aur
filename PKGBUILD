# Maintainer: Geballin - Guillaume Ballin <macniaque at free dot fr>
pkgname=ttk-theme-chooser
pkgver=1.2
pkgrel=1
pkgdesc="TTK theme chooser is an application to choose and set the default TTK theme"
url="https://github.com/Geballin/TTK-Theme-chooser"
arch=('x86_64' 'i686')
license=('GPLv3')
depends=('tcl' 'tk' 'tcllib')
optdepends=('ttk-themes: A collection of new TTK themes')
makedepends=(make)
conflicts=()
replaces=()
backup=()
install=
source=("https://github.com/Geballin/TTK-Theme-chooser/archive/${pkgver}.tar.gz")

md5sums=('58dccd1e5a8982d7eb78f2c929a67c0d')

build() {
  tar xzf ${pkgver}.tar.gz
  cd TTK-Theme-chooser-${pkgver}
  ./configure --prefix=/usr
  make
  }

package() {
  cd TTK-Theme-chooser-${pkgver}
  make DESTDIR="${pkgdir}" install
  }
