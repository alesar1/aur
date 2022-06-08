# Maintainer: Martin Dünkelmann <nc-duenkekl3 at netcologne.de>
# Contributor: Alberto Sánchez Molero <alsamolero at gmail.com>
# Contributor: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: TDY <tdy@gmx.com>

pkgname=moneymanagerex-git
pkgver=1.5.14
pkgrel=2
pkgdesc="MoneyManagerEx is an easy-to-use personal finance suite. This package will always point to the newest tagged version."
arch=('x86_64')
url="http://www.moneymanagerex.org/"
license=('GPL')
depends=('wxgtk3-dev-opt' 'webkit2gtk')
makedepends=('curl' 'cmake' 'fakeroot' 'file' 'gawk' 'gcc' 'gettext' 'git' 'jq' 'lsb-release' 'make' 'pkg-config' 'rapidjson')
optdepends=('cups: for printing support')
replaces=('mmex')
provides=('moneymanagerex')
conflicts=('moneymanagerex')
source=(git+https://github.com/moneymanagerex/moneymanagerex.git)
sha512sums=('SKIP')
_github_api_uri=https://api.github.com/repos/moneymanagerex/moneymanagerex/releases/latest

pkgver() {
  curl --silent ${_github_api_uri} | jq -r '.tag_name[1:]'
}

prepare() {
  cd "${srcdir}"/moneymanagerex

  git checkout tags/$(curl --silent ${_github_api_uri} | jq -r '.tag_name')
  git submodule update --init --recursive
}

build() {
  WXGTK_PATH=/opt/wxgtk-dev

  cd "${srcdir}"/moneymanagerex

  # Disable all warnings when building, then configure CMake
  export CXXFLAGS=-w
  cmake -DCMAKE_BUILD_TYPE=Release -DwxWidgets_CONFIG_EXECUTABLE=${WXGTK_PATH}/bin/wx-config-gtk3 .

  # Make sure the linker bakes the non-standard path for wxWidgets into the executable
  export LD_RUN_PATH=${WXGTK_PATH}/lib
  cmake --build . --target package
}

package() {
  cd "${srcdir}"/moneymanagerex

  make DESTDIR="${pkgdir}" install
}
