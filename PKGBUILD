# Maintainer: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>

pkgname=webtorrent-desktop
pkgver=0.11.0
pkgrel=1
pkgdesc="Streaming torrent client."
arch=('i686' 'x86_64')
url="https://webtorrent.io/desktop"
license=('MIT')
depends=('gconf')
makedepends=('npm' 'git' 'zip')
conflicts=('webtorrent-desktop-git' 'webtorrent-desktop-bin')
source=("https://github.com/feross/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('fe0abc334fb351da84607ba99a02c17e8d7a1be237479c431e5905b096986fcb')

[ "$CARCH" = "i686" ]   && _platform=ia32
[ "$CARCH" = "x86_64" ] && _platform=x64

build() {
  cd "$pkgname-$pkgver"

  npm install
  npm run package -- linux --package=zip
}

package() {
  cd "$pkgname-$pkgver/dist"

  install -dm755 "${pkgdir}/usr/share"
  install -dm755 "${pkgdir}/usr/bin"

  cp -a "WebTorrent-linux-${_platform}" "${pkgdir}/usr/share/${pkgname}"
  ln -s "/usr/share/${pkgname}/WebTorrent" "${pkgdir}/usr/bin/${pkgname}"

  install -Dm644 "WebTorrent-linux-${_platform}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

