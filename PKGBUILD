# Copyright (C) 2020  Matthew "strager" Glazar
# See end of file for extended copyright information.

# Maintainer: Matthew "strager" Glazar <strager.nds@gmail.com>
# Contributor: Shivam Mehta <sm.cse at gmail dot com>

pkgname=quick-lint-js
pkgver=0.3.0
pkgrel=1
pkgdesc="Find bugs in JavaScript programs"
arch=(aarch64 arm armv6h armv7h i686 pentium4 x86_64)
url="https://quick-lint-js.com/"
license=(Apache Boost GPL3)
depends=(gcc-libs)
makedepends=(cmake ninja)
checkdepends=(icu)
provides=()
conflicts=(quick-lint-js)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/quick-lint/${pkgname}/archive/refs/tags/${pkgver}.tar.gz")
sha512sums=('f0b7fa40b0da717f8be4f01f9e45d3b4147e82400ed7723c55a0c08a15c0a1607aa85e4c86cf3ebfa5a0b3012d9d91dae488614d3858e1fd9ae817188c9b8889')

build() {
  cd "${pkgname}-${pkgver}"
  cmake -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DQUICK_LINT_JS_INSTALL_LICENSES_DIR="share/licenses/${pkgname}" \
    -S . -B build
  ninja -C build
}

check() {
  cd "${pkgname}-${pkgver}"
  ninja -C build test
}

package() {
  cd "${pkgname}-${pkgver}"
  DESTDIR="${pkgdir}/" ninja -C build install

  # TODO(strager): Remove the following after releasing a new version:
  mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}/"
  mv "${pkgdir}/usr/share/doc/quick-lint-js/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/copyright"
  rmdir "${pkgdir}/usr/share/doc/quick-lint-js/"
  rmdir "${pkgdir}/usr/share/doc/"
}

# quick-lint-js finds bugs in JavaScript programs.
# Copyright (C) 2020  Matthew "strager" Glazar
#
# This file is part of quick-lint-js.
#
# quick-lint-js is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# quick-lint-js is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with quick-lint-js.  If not, see <https://www.gnu.org/licenses/>.
