# Maintainer: Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Gomasy <nyan@gomasy.jp>
# Contributor: Alexandre BIQUE <bique.alexandre@gmail.com>
# Contributor: Patrick Burroughs (Celti) <celti@celti.name>

pkgname='libreswan'
pkgver='3.31'
pkgrel='1'
pkgdesc='IPsec implementation with IKEv1 and IKEv2 keying protocols'
arch=('i686' 'x86_64')
url='https://libreswan.org/'
license=('GPL' 'MPL')
depends=('systemd' 'unbound' 'nss' 'libcap-ng' 'curl')
depends+=('python2')
makedepends=('docbook-xsl' 'xmlto' 'flex' 'bison')
conflicts=('freeswan' 'openswan' 'strongswan' 'ipsec-tools')
backup=('etc/ipsec.conf' 'etc/ipsec.secrets' 'etc/pam.d/pluto')
_srcdir="${pkgname}-${pkgver}"
source=(
  "https://download.libreswan.org/${pkgname}-${pkgver}.tar.gz"
  'tmpfiles.conf'
)
md5sums=('5f9ad5ed71c6b9c30cb54c969b617ace'
         '77399a739ee99f8bc54837684d7c39d5')
sha256sums=('4ad9732b30d07a9f4b838fb5580fa11b7b65e073bf97665591ee611bc2d6b8f3'
            '78265c690d58228c3bcc1a8793456172c39d493d268e9d9b1816288d0a47f573')

_bargs=(
  USE_XAUTH=true USE_LIBCAP_NG=true USE_LEAK_DETECTIVE=false USE_LABELED_IPSEC=false USE_DNSSEC=false
  INC_USRLOCAL=/usr INC_MANDIR=share/man
  FINALSBINDIR=/usr/bin FINALLIBEXECDIR=/usr/lib/ipsec
)

build() {
  cd "${_srcdir}"
  # Disable new warning introduced with GCC 6 (-Wunused-const-variable=)
  CFLAGS="$CFLAGS -Wno-error=sign-compare -Wno-error=unused-const-variable -Wno-error=implicit-fallthrough -Wno-error=maybe-uninitialized -Wno-error=pointer-compare -Wno-error=format-truncation" \
  make -s "${_bargs[@]}" programs
}

package() {
  cd "${_srcdir}"

  make DESTDIR="${pkgdir}/" "${_bargs[@]}" install

  sed -e '1s|python|python2|' -i "${pkgdir}/usr/lib/ipsec/verify"
  install -Dpm644 "${srcdir}/tmpfiles.conf" "${pkgdir}/usr/lib/tmpfiles.d/libreswan.conf"
  rm -rf "${pkgdir}/var"
}

# vim:set ts=2 sw=2 et:
