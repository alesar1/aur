# Maintainer: Carneiro <gabriel dot chaves dot carneiro at gmail dot com>
pkgname=pulsemeeter
pkgver=1.2.14
pkgrel=1
pkgdesc="A pulseaudio audio routing application"
url="https://github.com/theRealCarneiro/pulsemeeter"
arch=('i686' 'x86_64')
license=('MIT')
depends=('gtk3' 'libappindicator-gtk3' 'python' 'python-gobject' 'python-appdirs' 'python-pulsectl' 'pulse-vumeter-git' 'noise-suppression-for-voice' 'swh-plugins')
provides=('pulsemeeter')
makedepends=('git' 'python-setuptools')
optdepends=('glade: customize interface' 'pulseaudio' 'pipewire-pulse')
source=("$url/archive/refs/tags/v$pkgver.tar.gz")
md5sums=(12453797344223ed23344bd9c02c9f74)

pkgver(){
	cd $pkgname-$pkgver
	printf "%s" $(python setup.py --version)
}

build() {
	cd $pkgname-$pkgver
	python setup.py build
}

package() {
	cd $pkgname-$pkgver
	python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1 --skip-build
}
