# Maintainer: Jean Lucas <jean@4ray.co>
# Contributor: Pieter Goetschalckx <3.14.e.ter [at] gmail [dot] com>
# Contributor: Eric Engestrom <aur [at] engestrom [dot] ch>
# Contributor: Attila Bukor <r1pp3rj4ck [at] w4it [dot] eu>

pkgname=popcorntime-git
pkgver=0.3.10+r6429+g1537575b
pkgrel=1
pkgdesc='BitTorrent client with integrated media player (git)'
arch=(i686 x86_64)
url=https://popcorntime.sh
license=(GPL3)
depends=(alsa-lib atk cairo gdk-pixbuf2 gtk3 libcups libx11 libxcb libxcomposite libxcursor libxdamage libxext libxfixes libxi libxrandr libxrender libxss libxtst nspr nss pango)
makedepends=(git yarn npm)
provides=(popcorntime)
conflicts=(popcorntime popcorntime-ce)
options=(!strip)
source=(git+https://github.com/popcorn-official/popcorn-desktop#branch=development
        popcorntime.desktop
        nwjs-patch.diff)
sha512sums=('SKIP'
            'abf5d406467422168944244b95eac0d2c23ca4140cd803afeea852e9a15a5176a019a5772be919234fe01ceec0d8d135158900e828144b0079018015662f7dcd'
            '4749e7e521b0e784a956231baccb0841a0f28a7f7415d6e47f24ba3138e4fe88c2e6d9defcd10acbe86718a42a6b99dcbddaa20d95df584c71ad2ad653a180cf')

pkgver() {
  cd popcorn-desktop
  echo $(git tag)+r$(git rev-list --count HEAD)+g$(git rev-parse --short HEAD)
}

prepare() {
  cd popcorn-desktop
  patch -p1 --binary < "$srcdir/nwjs-patch.diff"
}

build() {
  cd popcorn-desktop
  yarn config set yarn-offline-mirror ./node_modules/
  yarn install --ignore-engines
  yarn build
}

package() {
  cd popcorn-desktop

  install -d "$pkgdir"/usr/{share,bin}

  cp -a build/Popcorn-Time/$([ $CARCH = x86_64 ] && echo linux64 || echo linux32) \
    "$pkgdir"/usr/share/popcorntime

  # Fix file permissions
  find "$pkgdir"/usr/share/popcorntime -type f -not -name Popcorn-Time -exec chmod 644 {} +

  ln -s /usr/share/popcorntime/Popcorn-Time "$pkgdir"/usr/bin/popcorntime

  install -Dm 644 ../popcorntime.desktop -t "$pkgdir"/usr/share/applications
  install -Dm 644 src/app/images/icon.png "$pkgdir"/usr/share/icons/hicolor/256x256/apps/popcorntime.png
}
