# Merged with official ABS akonadi-mime PKGBUILD by João, 2021/02/02 (all respective contributors apply herein)
# Maintainer: João Figueiredo <jf.mundox@gmail.com>

pkgname=akonadi-mime-git
pkgver=5.16.40_r1586.g5a290f2
pkgrel=1
pkgdesc="Libraries and daemons to implement basic email handling"
arch=($CARCH)
url="https://kontact.kde.org"
license=(LGPL)
depends=(libakonadi-git kmime-git)
makedepends=(git extra-cmake-modules-git kdoctools-git boost)
conflicts=(${pkgname%-git})
provides=(${pkgname%-git})
groups=(kdepim-git)
source=("git+https://github.com/KDE/${pkgname%-git}.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  _ver="$(grep -m1 'set(PIM_VERSION' CMakeLists.txt | cut -d '"' -f2 | tr - .)"
  echo "${_ver}_r$(git rev-list --count HEAD).g$(git rev-parse --short HEAD)"
}

build() {
  cmake -B build -S ${pkgname%-git} \
    -DBUILD_TESTING=OFF
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}
