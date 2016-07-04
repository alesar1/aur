# Maintainer: substanceof <vk-cli.dev[at]ya[dot]ru>
pkgname=vk-cli
pkgver=0.7.3
pkgrel=1
pkgdesc="A console (ncurses) client for vk.com written in D"
arch=('x86_64' 'i686')
url="https://github.com/HaCk3Dq/vk"
license=('Apache')
depends=('curl' 'openssl' 'ncurses>=5.7')
makedepends=('dub' 'dmd>=2.071.0' 'git' 'dtools')
optdepends=('mpv: for music playback')
provides=("$pkgname")
conflicts=()

source=("git+https://github.com/HaCk3Dq/vk.git#tag=${pkgver}")
md5sums=('SKIP')

_gitname=vk

build() {
  cd "$srcdir/$_gitname"
  dub build --config=release-shared --build=release
}

package() {
  cd "$srcdir/$_gitname"
  _installdir="${pkgdir}/usr/bin"

  mkdir -p "${_installdir}"
  cp vk "${_installdir}/vk"
}

