# Maintainer: Sophie Tauchert <sophie@999eagle.moe>

pkgname=gkraken
pkgver=1.1.3
pkgrel=1
pkgdesc="GUI that allows to control cooling of NZXT Kraken X (X42, X52, X62 or X72) pumps from Linux"
arch=('any')
url="https://gitlab.com/leinardi/gkraken"
license=('GPL3')
depends=('gobject-introspection' 'libappindicator-gtk3' 'liquidctl' 'python' 'python-gobject' 'python-hidapi' 'python-injector' 'python-matplotlib' 'python-peewee' 'python-psutil' 'python-pyxdg' 'python-requests' 'python-rx')
makedepends=('meson' 'appstream-glib')
provides=()
conflicts=()
install="$pkgname.install"
source=("https://gitlab.com/leinardi/gkraken/-/archive/$pkgver/$pkgname-$pkgver.tar.gz"
        '60-gkraken.rules')
sha256sums=('ffb8a54c5b8aad002caedda8775c20bbe3ee0b59a116b0618a1634b2f4d5b5ca'
            '26ce441dbe4a6e4e0ae879570612aa60e268eb0a5ef26589c40ad117b51bfb8c')

build() {
	if [[ -d "$srcdir/build" ]]; then
		rm -rf "$srcdir/build"
	fi
	meson --prefix /usr --buildtype=plain "$pkgname-$pkgver" build
	ninja -C build
}

check() {
	ninja -C build test
}

package() {
	DESTDIR="$pkgdir" ninja -C build install
	install -Dm644 "$srcdir/60-gkraken.rules" "$pkgdir/usr/lib/udev/rules.d/60-gkraken.rules"
}
