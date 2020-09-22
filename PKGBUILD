# Maintainer: Christoph Bayer <chrbayer@criby.de>

pkgname=mod_authn_otp
pkgver=1.1.9
pkgrel=2
pkgdesc='Apache module for one time password authentication'
arch=('i686' 'x86_64')
url='https://github.com/archiecobbs/mod-authn-otp'
license=('Apache')
depends=('openssl')
makedepends=('apache')
source=("https://s3.amazonaws.com/archie-public/mod-authn-otp/${pkgname}-${pkgver}.tar.gz")
md5sums=('8e2ba07ca2cef76e8de8bae9bb2baf98')

package() {
  cd $srcdir/${pkgname}-${pkgver}
  ./configure
  make || return 1
  mkdir -p "${pkgdir}/usr/lib/httpd/modules/"
  make DESTDIR="${pkgdir}" install
}
