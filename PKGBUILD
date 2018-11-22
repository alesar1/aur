# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=dbxfs
pkgver=1.0.39
pkgrel=1
pkgdesc="User-space file system for Dropbox"
arch=('i686' 'x86_64')
url="https://github.com/rianhunter/dbxfs"
license=('GPL3')
depends=('fuse2'
        'python-dropbox>=3.38'
        'python-appdirs>=1.4' #'python-appdirs<2'
        'python-userspacefs>=1.0.13' #'python-userspacefs<2'
        'python-block_tracing>=1.0.1' #'python-block_tracing<2'
        #'python-privy>=6.0' 'python-privy<7'
        'python-privy'
        #'python-keyring>=15.1.0' 'python-keyring<16'
        'python-keyrings-alt>=3.1' #'python-keyrings-alt<4'
        'python-sentry_sdk>=0.3') #'python-sentry_sdk<1'
makedepends=('python-setuptools')
replaces=('python-dbxfs')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
        "$pkgname.patch")
md5sums=('c128a0dbf1efeeb83cd566af7dcae08d'
         '3bf993bef07b19ff2bafec3eeb4ff72a')

prepare() {
    cd $pkgname-$pkgver
    patch -Np1 -i "$srcdir/$pkgname.patch"
    sed -i 's/"keyring>=15.1.0,<16",/"keyring>=15.1.0",/g' setup.py
}

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1
}
