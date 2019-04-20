# Maintainer: Jean Lucas <jean@4ray.co>

pkgname=whalebird-git
pkgver=2.7.0+107+gf819d49
pkgrel=1
pkgdesc='Electron-based Mastodon/Pleroma client (git)'
arch=(i686 x86_64)
url=https://whalebird.org
license=(MIT)
conflicts=(whalebird whalebird-bin)
makedepends=(git npm)
source=(git+https://github.com/h3poteto/whalebird-desktop)
sha512sums=('SKIP')

pkgver() {
  cd whalebird-desktop
  git describe --tags | sed 's#-#+#g'
}

build() {
  cd whalebird-desktop
  npm install
  npm run build:dir
}

package() {
  install -d "$pkgdir"/usr/{share,bin}
  cp -a whalebird-desktop/build/linux-unpacked \
    "$pkgdir"/usr/share/whalebird-desktop
  ln -s /usr/share/whalebird-desktop/whalebird "$pkgdir"/usr/bin/whalebird
}
