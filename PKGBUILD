# Maintainer: spider-mario <spidermario@free.fr>
pkgname=mini-audicle
pkgver=1.3.3
pkgrel=2
pkgdesc='Integrated Development + Performance Environment for ChucK'
arch=('i686' 'x86_64')
url="http://audicle.cs.princeton.edu/mini/"
license=('GPL')
groups=('multimedia')
depends=('qscintilla-qt4' 'libsndfile'
# Uncomment one of the following three lines depending on the backend that you
# want. Also uncomment the corresponding make target in build() below.
# Default: PulseAudio
         'libpulse'
#        'alsa-lib'
#        'jack'
)
optdepends=('chuck: for documentation and command line interface')
source=("http://audicle.cs.princeton.edu/mini/release/files/miniAudicle-$pkgver.tgz"
        'miniAudicle.desktop')
sha512sums=('fb07741073638cd7d8557b3b1ffe0aa2eca81b13e375999ddb6db88aa5c9b47c70784945758fbef72a494b8af65ca8f3a19aef9320eb300374a467ada76217b5'
            'b0b5fe3b9f4b9e423b9e54f8f4d5503c31ebe7f48faaeafd54cbc227fb6be3467f87e4590d2ad73db0289fc0d6d36c9e52998ff5b0ecb75ca70017acff8dc00b')

prepare() {
	cd "miniAudicle-$pkgver"/src
	sed -e '/GIT_REVISION/,+2 d' -i miniAudicle.pro
}

build() {
	cd "miniAudicle-$pkgver"/src
	make \
		linux-pulse
#		linux-alsa
#		linux-jack
}

package() {
	install -Dm644 miniAudicle.desktop "$pkgdir"/usr/share/applications/miniAudicle.desktop

	cd "miniAudicle-$pkgver"/src
	install -Dm755 miniAudicle "$pkgdir"/usr/bin/miniAudicle
	install -Dm644 qt/icon/miniAudicle.png "$pkgdir"/usr/share/pixmaps/miniAudicle.png
}
