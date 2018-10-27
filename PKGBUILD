# Maintainer: Acidhub <dev@acidhub.click>

pkgname=stlib
pkgver=0.9
pkgrel=1
pkgdesc="Async library that provides features related to Steam client and compatible stuffs"
arch=('x86_64')
url="https://github.com/ShyPixie/stlib"
depends=('python>=3.6' 'python-aiohttp' 'python-beautifulsoup4' 'python-rsa')
optdepends=('stlib-plugins-git: A set of official plugins for stlib')
makedepends=('python-setuptools' 'gcc' 'unzip')
license=('GPL')
source=("https://github.com/ShyPixie/$pkgname/archive/v$pkgver.tar.gz"
        'steamworks_sdk_142.zip::file://steamworks_sdk_142.zip')
sha256sums=('88d0002770e8ed3850afa8b88d8463a6c9c934fcc1b8f43ac9e22bae33552279'
            '7695f8e183bef16dc2e663ffbdfad2248ae266bce8ff42066a3e88e1d54f0f42')

prepare() {
    cp -R sdk/* "$pkgname-$pkgver/src/steam_api/steamworks_sdk/"
    cd $pkgname-$pkgver
}

build() {
    cd $pkgname-$pkgver
    python setup.py build
}

package() {
    cd $pkgname-$pkgver
    python setup.py install --skip-build --optimize=1 --root="$pkgdir/"
}


