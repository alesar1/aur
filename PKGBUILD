pkgname=faq
pkgver='0.0.6'
pkgdesc='faq is a tool intended to be a more flexible "jq", supporting additional formats.'
pkgrel='1'
arch=('any')
url='https://github.com/jzelinskie/faq'
license=('Apache')
depends=('jq')
makedepends=('go')
md5sums=('1c7e2a8bb060d36dcf07df39ea006fb4')
source=("https://github.com/jzelinskie/faq/archive/$pkgver.tar.gz")

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make build FAQ_LINK_STATIC=false FAQ_VERSION="$pkgver"
    make install DESTDIR="$pkgdir/"
}
