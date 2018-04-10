# Maintainer: Ysblokje <ysblokje at gmail dot com>
pkgname=('gamemode-git')
pkgver=4f14c80
pkgrel=1
pkgdesc="GameMode is a daemon/lib combo for Linux that allows games to request a set of optimisations be temporarily applied to the host OS."
arch=('x86_64')
url="https://github.com/FeralInteractive/gamemode.git"
license=('MIT')
depends=('systemd' 'polkit')
makedepends=('meson' 'ninja' 'pkg-config')
provides=('gamemode')
source=("git+https://github.com/FeralInteractive/gamemode.git")
sha256sums=('SKIP')

pkgver() {
    cd gamemode
    echo $(git rev-parse --short HEAD)
}

build() {
  cd gamemode
  meson --prefix=/usr build -Dwithsystemd-user-unit-dir=/etc/systemd/user
  cd build
  ninja
}

package() {
  cd gamemode/build
  DESTDIR=$pkgdir ninja install
}

