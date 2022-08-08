# Maintainer: Bruce Zhang
# Co-Maintainer: William Tang <galaxyking0419@gmail.com>
# Contributor: lilac <lilac@build.archlinuxcn.org>
# Contributor: 吕海涛 <aur@lvht.net>

_extname=swoole
pkgname=php-$_extname
pkgver=5.0.0
pkgrel=1
pkgdesc="Coroutine-based concurrency library for PHP"
arch=('x86_64')
url="https://github.com/swoole/swoole-src"
license=('Apache')
depends=('php')
makedepends=('gcc' 'make')

source=("https://github.com/swoole/swoole-src/archive/refs/tags/v$pkgver.tar.gz"
        "$_extname.ini")
sha256sums=('460ae95865af17bdd986720c775b3752cedfc27c2b0efe96cc28ff24d5b1ffdc'
            '58d1d032fe130fee8666238d14013e51c75683d7b806c61d1ada3bb8470adb44')

build() {
    cd $_extname-src-$pkgver
    phpize
    ./configure --enable-swoole-curl --enable-http2 --enable-openssl
    make
}

package() {
    mkdir -p "$pkgdir"/etc/php/conf.d \
        "$pkgdir"/usr/include/php/ext \
        "$pkgdir"/usr/lib/php/modules \
        "$pkgdir"/usr/share/licenses/$pkgname

    cp $_extname.ini "$pkgdir"/etc/php/conf.d/

    cd $_extname-src-$pkgver
    cp -a include "$pkgdir"/usr/include/php/ext/$_extname
    mv .libs/$_extname.so "$pkgdir"/usr/lib/php/modules/
    cp LICENSE "$pkgdir"/usr/share/licenses/$pkgname/
}
