# Copyright (C) 2020  Matthew "strager" Glazar
# See end of file for extended copyright information.

# Maintainer: Matthew "strager" Glazar <strager.nds@gmail.com>
# Contributor: Shivam Mehta <sm.cse at gmail dot com>

pkgname=quick-lint-js
pkgver=0.4.0
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
sha512sums=('033b4665e94850cd1ab9e4665e1ad294989c8514062fb27abf031eb163c0daf7810b6f6a778a3695bee21759c5981621aa17d57b1dd8ba46322c6b96b07265a2')

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
