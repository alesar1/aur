# Maintainer: graysky <graysky AT archlinux DOT us>

pkgname=flac2all
pkgver=3.79
pkgrel=1
pkgdesc="Multi-threaded audio converter of FLAC to either Ogg Vorbis or MP3 retaining all tags and metadata."
arch=('any')
url="https://github.com/ZivaVatra/flac2all"
license=('GPL2')
conflicts=('flac2all-svn')
replaces=('flac2all-svn')
depends=('flac' 'python2')
optdepends=('lame: for mp3 support'
'vorbis-tools: for ogg support'
'opus-tools: for opus support')

source=("https://github.com/ZivaVatra/flac2all/archive/v$pkgver.tar.gz")
sha256sums=('0d51e4b53e57d928901955513d1c93a5e27eb030b1b088e4d43e6ccf346dae59')

package() {
	cd "$pkgname-$pkgver"

	install -Dm755 stable/$pkgname.py "$pkgdir"/usr/bin/$pkgname
	install -Dm644 stable/$pkgname.1 "$pkgdir"/usr/share/man/man1/$pkgname.1
}
