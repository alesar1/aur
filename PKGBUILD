# Maintainer: c0re100 <c0rehusky@gmail.com> - https://husky.dev

pkgname=qbittorrent-enhanced-nox-git
pkgver=4.1.8.2.r0.gdc59bb6fe
pkgrel=1
pkgdesc="A bittorrent client powered by C++, Qt5 and the good libtorrent library (Enhanced Edition)"
arch=('arm' 'armv6h' 'armv7h' 'aarch64' 'i686' 'x86_64')
url="https://github.com/c0re100/qBittorrent-Enhanced-Edition"
license=('custom' 'GPL')
depends=('libtorrent-rasterbar' 'qt5-base')
makedepends=('boost' 'git' 'qt5-tools')
optdepends=('python: needed for torrent search tab')
conflicts=('qbittorrent-nox')
provides=('qbittorrent-nox')
source=("${pkgname%-*}::git+https://github.com/c0re100/qBittorrent-Enhanced-Edition.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-*}

  _tag=$(git tag -l --sort -v:refname | sed -n '1,1{s/release-//p}')
  _rev=$(git rev-list --count release-${_tag}..HEAD)
  _hash=$(git rev-parse --short HEAD)
  printf "%s.r%s.g%s" "$_tag" "$_rev" "$_hash"
}

build() {
  cd ${pkgname%-*}

  # tell qmake not to break makepkg's debug/!strip options
  export QBT_ADD_CONFIG='nostrip'

  ./configure --prefix=/usr --disable-gui
  make
}

package() {
  cd ${pkgname%-*}

  make INSTALL_ROOT="$pkgdir/" install
  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/COPYING
}
