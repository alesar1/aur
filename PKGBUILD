# Maintainer: Donald Webster <fryfrog@gmail.com>
pkgname="ubooquity"
pkgver="2.1.1"
pkgrel=3
pkgdesc="Home server for comics and ebooks."
arch=(any)
url="https://vaemendis.net/ubooquity/"
license=('custom')
depends=('java-runtime-headless>=8')
optdepends=('java-runtime: For Ubooquity GUI')
source=("http://vaemendis.net/ubooquity/downloads/Ubooquity-${pkgver}.zip"
        'ubooquity.service'
        'ubooquity.sysusers'
        'ubooquity.tmpfiles')

sha512sums=('70d0d9f6aec9e80342ab338b03ebdd8e8aa54e0cd24c914a12a785167296d78ab041bebf4f73affb2a71b97a58ea18bb0e813c88377f0d4a45bdb12550a4b25e'
            'e46ec0e8e903ca1e21e824c420e237c4fb894047c1bfa6385ebb9b49843237355dfb92ebe57518c8620ab46928cfe0b41c4dc7cacbeb01ef1410495d19fc5f3c'
            'd4165d6e22b5e15e308f197ba1193b9a8724a327622f41af0baf451053b55b0280cddcea96e2d16772d7f055a980336de8459b43687431aacec9d164dc63eb9e'
            'ccf5219017ba1518bc6be6233a115e422e80117fe5ccd466b71996b2e376b7ba3e050cdbc54c8eae623a7d8c118d962ac87b57a4d4851f059f530a0da9bfe973')

package() {
  install -d -m 755 "${pkgdir}/usr/lib/ubooquity"
  cp -dpr --no-preserve=ownership "${srcdir}/Ubooquity.jar" "${pkgdir}/usr/lib/ubooquity"

  install -D -m 644 "${srcdir}/ubooquity.service" "${pkgdir}/usr/lib/systemd/system/ubooquity.service"
  install -D -m 644 "${srcdir}/ubooquity.sysusers" "${pkgdir}/usr/lib/sysusers.d/ubooquity.conf"
  install -D -m 644 "${srcdir}/ubooquity.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/ubooquity.conf"
}
