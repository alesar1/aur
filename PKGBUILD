# Maintainer: Cassandra Watergate (saltedcoffii) <cassandrawatergate@outlook.com>

_pkgname=ffmpeg-audio-thumbnailer
pkgname=$_pkgname-git
pkgver=r3.e60cb30
pkgrel=1
pkgdesc="A minimal audio file thumbnailer for file managers, such as nautilus, dolphin, thunar, and nemo."
url="https://github.com/saltedcoffii/ffmpeg-audio-thumbnailer"
arch=(any)
depends=('ffmpeg')
license=('GPL3 or any later version')
provides=('ffmpeg-audio-thumbnailer')
conflicts=('ffmpeg-audio-thumbnailer')
source=("git+$url.git")
sha256sums=('SKIP')

build() {
  cd $_pkgname
  make
}

check() {
  cd $_pkgname
  make check
}

package() {
  cd $_pkgname
  make DESTDIR="$pkgdir" PREFIX="/usr" install
}
