# Maintainer: tjbp (archlinux@tjbp.net)

pkgname='php-svn'
pkgver='1.0.2'
pkgrel='3'
pkgdesc='PHP PECL extension to provide bindings for the Subversion revision control system'
arch=('i686' 'x86_64')
url='https://pecl.php.net/package/svn'
license=('PHP')
depends=('php>=4.0' 'php<7.0' 'subversion')
source=("http://pecl.php.net/get/svn-$pkgver.tgz")
sha256sums=('ca0ea834e745a1aae65b456800bb5c5cfd7c4eceff281f7a8e317d30726e48cd')

build() {
    cd "$srcdir/svn-$pkgver"
    phpize
    ./configure \
    --prefix=/usr
    make
    echo 'extension=svn.so' > svn.ini
}

package() {
    pushd "$srcdir/svn-$pkgver"
    make INSTALL_ROOT="$pkgdir" install
    install -Dm644 svn.ini "$pkgdir/etc/php/conf.d/svn.ini"
    popd
}
