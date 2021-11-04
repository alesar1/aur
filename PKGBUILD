# Maintainer: Mikołaj "D1SoveR" Banasik <d1sover@gmail.com>
pkgname='luxtorpeda-git'
pkgver=45.0.0.r320.5f2e835
pkgrel=2
pkgdesc='Steam Play compatibility tool to run games using native Linux engines'
arch=('x86_64' 'i686')
url='https://github.com/luxtorpeda-dev/luxtorpeda'
license=('GPL2')
depends=('sdl2' 'openssl' 'xz')
makedepends=('git' 'rust')
optdepends=('steam: The Steam client')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")

source=("git+${url}.git"
        'reproducible-build.patch'
        'size-optimisations.patch')
sha256sums=('SKIP'
            'e97cf95dedcf60c97edb3a693052964e4ce6da795631ca5c9f04182462f67895'
            '1aea00fecd857e8d7b8a3d4c3a5d2f9ef18007bb9366461b4f16878d64a7bf40')

pkgver() {
  cd "${pkgname%-git}"
  local base="$(grep -oP '(?<=^version = ")[^"]+(?="$)' Cargo.toml)"
  local revision_count="$(git rev-list --count HEAD)"
  local revision_commit="$(git rev-parse --short HEAD)"
  echo "$base.r$revision_count.$revision_commit"
}

prepare() {
  cd "${pkgname%-git}"
  patch -Np1 -i "$srcdir/reproducible-build.patch"
  patch -Np1 -i "$srcdir/size-optimisations.patch"
}

build() {
  cd "${pkgname%-git}"
  mkdir -p "target/release"
  make luxtorpeda
}

check() {
  cd "${pkgname%-git}"
  make test
}

package() {
  cd "${pkgname%-git}"
  make DESTDIR="$pkgdir" PREFIX=/usr install
}
