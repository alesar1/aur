# Maintainer: makz <contact+aur@makz.me>
# Maintainer: Light2Yellow <oleksii.vilchanskyi@gmail.com>

pkgname=ckb-next-git
pkgver=0.2.9.r97.gf364891
pkgrel=1
epoch=1
pkgdesc="Corsair Keyboard and Mouse Input Driver, git master branch"
arch=('i686' 'x86_64')
url="https://github.com/ckb-next/ckb-next"
license=('GPL2')
depends=('qt5-base' 'hicolor-icon-theme')
makedepends=('git')
optdepends=('libappindicator-gtk2: Ayatana indicators in Unity, KDE or Systray (GTK+ 2 library)')
conflicts=('ckb-git' 'ckb-git-latest' 'ckb-next')
provides=('ckb-next')
install=ckb-next-git.install
source=('ckb-next-git::git+https://github.com/ckb-next/ckb-next.git')
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-VCS}"
  # based only on annotated tags, always has long version as it's a rolling release
  # discards v, replaces dashes with dots
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}


build() {
  cd "$srcdir/${pkgname%-VCS}"

  cmake -H. -Bbuild \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_BUILD_TYPE="Release" \
    -DCMAKE_INSTALL_LIBEXECDIR="lib"
  cmake --build build --target all
}

package() {
  cd "$srcdir/${pkgname%-VCS}"

  DESTDIR="$pkgdir" cmake --build build --target install
}
