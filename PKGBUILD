# Maintainer: Ashley Whetter <(firstname) @ awhetter.co.uk>
# Contributor: Deon Spengler <deon at spengler dot co dot za>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: William Rea <sillywilly@gmail.com>
# Contributor: Hans Janssen <hans@janserv.xs4all.nl>

pkgname='flightgear'
pkgver=2020.3.2
_pkgver=${pkgver%.*}
pkgrel=1
pkgdesc="An open-source, multi-platform flight simulator"
arch=('x86_64')
depends=('libxmu' 'libxi' 'zlib' 'openscenegraph' 'libxrandr' 'glu' 'openal')
makedepends=('boost' 'cmake' 'mesa' 'sharutils' 'simgear' 'qt5-base' 'qt5-declarative' 'qt5-svg')
optdepends=('qt5-base: fgfs --launcher'
            'qt5-declarative: fgfs --launcher'
            'flightgear-data')
license=("GPL")
url="http://www.flightgear.org/"
options=('makeflags')
source=("http://downloads.sourceforge.net/project/flightgear/release-${_pkgver}/${pkgname}-${pkgver}.tar.bz2")
sha256sums=('ad9bbca886f85e9081222a2403c0c6cc19d4aa69a3be6889b9c9726c56decc14')

prepare() {
  cd "$srcdir"/flightgear-$pkgver
  sed -i 's|Exec=.*|Exec=fgfs --fg-root=/usr/share/flightgear/data|' package/org.flightgear.FlightGear.desktop
}

build() {
  mkdir -p "$srcdir"/flightgear-build
  cd "$srcdir"/flightgear-build
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DFG_DATA_DIR:STRING="/usr/share/flightgear/data" \
    -DCMAKE_BUILD_TYPE=Release \
    -DFG_BUILD_TYPE=Release \
    ../flightgear-$pkgver
  make
}

package() {
  cd "$srcdir"/flightgear-build
  make DESTDIR="$pkgdir" install

  cd "$srcdir"/flightgear-$pkgver
  install -Dm0644 package/flightgear.ico "$pkgdir"/usr/share/icons/flightgear.ico
  install -Dm0644 scripts/completion/fg-completion.bash "$pkgdir"/usr/share/bash-completion/completions/fgfs
  install -Dm0644 scripts/completion/fg-completion.zsh "$pkgdir"/usr/share/zsh/site-functions/_fgfs
  ln -sf flightgear "$pkgdir"/usr/share/FlightGear
}
