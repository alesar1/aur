# Maintainer: James Harvey <jamespharvey20@gmail.com>
# * No namcap warnings or errors
# Up to date with fedora's ibacm-1.1.0-1.el7.src.rpm, except not using their coverity and compile warning fixes patch, for arch's preference of vanilla upstream, unless substantial need shown

pkgname=ibacm
pkgver=1.1.0
pkgrel=1
pkgdesc='OpenFabrics Alliance InfiniBand communication manager daemon for librdmacm'
#        Helps reduce load of managing path lookup records on large InfiniBand fabrics.
#        When properly configured, can reduce SA packet load of a large IB cluster from O(n^2) to O(n).
#        Provides framework for name, address, and route resolution services over InfiniBand.
arch=('x86_64' 'i686')
url=('https://www.openfabrics.org/index.php/overview.html')
license=('GPL2' 'custom:"Open Fabrics Alliance BSD"')
depends=('libibverbs' 'libibumad')
source=("https://downloads.openfabrics.org/downloads/rdmacm/${pkgname}-${pkgver}.tar.gz"
        'ibacm.service')
md5sums=('0e31f454343f5adb677c443125680eae'
         'ddb76ae6e28a18fcc984770b5699ea00')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  # Not sure why lpthread isn't used by default, without it, it gives linker errors
  ./configure --prefix=/usr \
              --sbindir=/usr/bin \
              --libexecdir=/usr/lib \
              --sysconfdir=/etc \
              --localstatedir=/var \
              --mandir=/usr/share/man \
              CFLAGS="-lpthread" \
              CXXFLAGS="-lpthread"
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"

  # Convert from init.d to systemd
  rm -rf ${pkgdir}/etc/init.d
  # If ${pkgdir}/etc is empty (it should be, since /etc/init.d/ was removed) remove it
  if ! [ "$(ls -A ${pkgdir}/etc)" ]; then
     rm -rf ${pkgdir}/etc/
  fi

  install -Dm644 "${srcdir}/ibacm.service" "${pkgdir}/usr/lib/systemd/system/ibacm.service"
}
