# $Id$
# Maintainer: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Sergej Pupykin <arch+pub@sergej.pp.ru>
# Contributor: Alexey D. <lq07829icatm@rambler.ru>

pkgname=psi-plus-git
pkgver=1.2.153.0.gb166f4ab
pkgrel=1
pkgdesc="Psi+ is a powerful Jabber client (Qt, C++) designed for the Jabber power users (built with Qt 5.x)"
url="http://psi-plus.com"
license=('GPL2')
arch=('i686' 'x86_64')
depends=('qt5-base' 'qt5-webkit' 'qt5-multimedia' 'qt5-x11extras' 'qca-qt5'
	 'libidn' 'aspell' 'libxss' 'qt5-svg' 'hunspell')
makedepends=('git' 'patch' 'qconf-git' 'cmake')
provides=("psi-plus=$pkgver" "psi-plus-qt5-git=$pkgver")
conflicts=('psi-plus' 'psi-plus-qt5-git' 'psi-plus-webkit-qt5-git' 'psi-plus-webkit-git')
source=("git://github.com/psi-plus/psi-plus-snapshots"
	"git://github.com/psi-plus/main.git"
	'conf.diff'
	'join.patch'
	'no-qca-qt4.patch')
sha256sums=('SKIP'
            'SKIP'
            '690770c7c8976d536d8c4078d01c28f187f510574ddffe91251f5045fa672e53'
            'ea25a58c7efe25979b8d257598608187380e8f35ace25e96cab9c357dcdbc974'
            'a6ea9a62100b6990b8a6c8590a6d0e9df095b99b6527bb5490a7fd3f6929ac23')


pkgver() {
  cd psi-plus-snapshots
  git describe --long --tags | sed 's/^v//;s/-/./g'
}            
            
prepare() {
  cd psi-plus-snapshots
  # make build date in --version output a bit more readable
  # sed "s/yyyyMMdd/yyyy-MM-dd/" -i qcm/conf.qcm
  # mkdir -p iconsets
  # cp -r "$srcdir"/main/iconsets/* ./iconsets
  # echo "$pkgver ($(date +"%Y-%m-%d"))" >version
  patch -p1 <"$srcdir"/join.patch
  patch -Np1 -i "${srcdir}/no-qca-qt4.patch"
}

build() {
  cd psi-plus-snapshots
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release ..
  make
}

package() {
  cd psi-plus-snapshots/build

  make DESTDIR="$pkgdir" install

  # install -dm755 "$pkgdir/usr/include/psi-plus/plugins"
  # install -m644 src/plugins/include/*.h "$pkgdir/usr/include/psi-plus/plugins"
}
