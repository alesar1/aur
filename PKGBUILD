# Maintainer: Sumner Evans <me [at] sumnerevans [dot] com>

pkgbase='navidrome-git'
pkgname=(navidrome-git)
pkgver=v0.14.5.r1.gd09a218
pkgrel=1
pkgdesc='Music Server and Streamer compatible with Subsonic/Airsonic'
url='https://www.navidrome.org/'
license=('GPL3')
arch=(x86_64 armv6h armv7h aarch64)
provides=('navidrome')
conflicts=('navidrome')
makedepends=('go' 'git' 'npm')
depends=('ffmpeg')
source=('navidrome-git::git+https://github.com/deluan/navidrome.git')
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${pkgname}"

    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/${pkgname}"

    make setup
    make buildall
}

package() {
  install -Dm755 "${srcdir}/${pkgname}/navidrome" "$pkgdir/usr/bin/navidrome"
}

