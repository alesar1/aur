# Maintainer: brent s. <bts[at]square-r00t[dot]net>
# Maintainer: M.Carreira <arch@carreira.com.pt>
# Contributor: M.Carreira <arch@carreira.com.pt>

pkgname=mondo
pkgver=3.2.1
pkgrel=1
pkgdesc="A disaster recovery solution to create backup media that can be used to redeploy the damaged system"
arch=('i686' 'x86_64')
url="http://www.mondorescue.org/"
license=('GPL2')
depends=('mindi>=2.0.7' 'bzip2>=0.9' 'afio' 'cdrkit' 'binutils' 'libnewt>=0.50' 'buffer' 'syslinux>=1.52' 'slang')
makedepends=('libnewt>=0.50' 'gcc' 'autoconf' 'automake' 'libtool')
optdepends=('lzop: File compressor using lzo lib'
  'lzo: A portable lossless data compression library')
source=("ftp://ftp.mondorescue.org/src/${pkgname}-${pkgver}.tar.gz")
md5sums=('0625cb331e7312bab01fee7c418e108f')


package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  sed -i -e 's/kernel26/linux/g' src/mondorestore/mondo-rstr-tools.c
  ./configure --prefix=/usr --sbindir=/usr/bin
  make
  make DESTDIR=${pkgdir} install
  mkdir -p ${pkgdir}/var/cache/${pkgname}
  install -d ${pkgdir}/usr/share/doc/${pkgname}-${pkgver}
  install -m 644 INSTALL COPYING README* TODO AUTHORS NEWS* docs/en/mondorescue-howto.html docs/en/mondorescue-howto.pdf ${pkgdir}/usr/share/doc/${pkgname}-${pkgver}
}

