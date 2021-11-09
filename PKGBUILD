# Maintainer: lxgr <lxgr@protonmail.com>

pkgbase='pokete-git'
pkgname='pokete-git'
pkgver=0.6.0.r2.g5d65464
pkgrel=1
pkgdesc="A small terminal based game in the style of a very popular and old game from gamefreak."
arch=(any)
url="https://github.com/lxgr-linux/pokete"
license=('GPL3')
provides=('pokete')
depends=('python' 'python-scrap_engine-git')
makedepends=('git')
source=("$pkgbase"::'git+https://github.com/lxgr-linux/pokete')
md5sums=('SKIP')

pkgver() {
  cd "$pkgbase"
  git describe --tags --always | sed -r 's|release-||g;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/$pkgbase"
  ./gen_wiki.py
}

package() {
  cd "${srcdir}/$pkgbase"
  install -dm755 "$pkgdir/usr/share/pokete"
  install -dm755 "$pkgdir/usr/bin/"
  install -Dm644 ./assets/pokete.desktop "$pkgdir/usr/share/applications/pokete.desktop"
  cp -r ./* "$pkgdir/usr/share/pokete"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/pokete/LICENSE"
  ln -s "/usr/share/pokete/pokete.py" "$pkgdir/usr/bin/"
}
