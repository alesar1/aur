# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor : xav <xav at ethertricks dot net>

set -u
pkgname='ipsumdump'
pkgver='1.82'
pkgrel='1'
pkgdesc='A tool that summarizes TCP/IP dump files into a self-describing ASCII format easily readable by humans and programs'
arch=('i686' 'x86_64')
url='http://www.cs.ucla.edu/~kohler/ipsumdump/'
license=('GPL2' 'custom:Click')
depends=('gcc-libs' 'libpcap')
source=("http://www.cs.ucla.edu/~kohler/${pkgname}/${pkgname}-${pkgver}.tar.gz" 'LICENSE')
sha256sums=('149a08324990fafa04b8d3dea2bf9e2d9f977891aba68ad6cf97647cc6c19c4f'
            '5824ab84c843681a0c7b3a71fcaf2412d0cb4c38baf6883e77eb19e41499557f')

prepare() {
  set -u
  cd "${srcdir}/${pkgname}-${pkgver}"
  local _CPPFLAGS_OLD="${CPPFLAGS}"
  export CPPFLAGS="${CPPFLAGS/-D_FORTIFY_SOURCE=2/}" # messes up configure
  ./configure --prefix='/usr' --mandir='/usr/share/man' --sbindir='/usr/bin'
  export CPPFLAGS="${_CPPFLAGS_OLD}"
  set +u
}

build() {
  set -u
  cd "${srcdir}/${pkgname}-${pkgver}"
  make -s -j $(nproc)
  set +u
}

package() {
  set -u
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dpm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Ensure there are no forbidden paths
  #! grep -alqr "/sbin" "${pkgdir}" || echo "${}" # the executables have sbin fallback which is OK
  ! grep -alqr "/usr/tmp" "${pkgdir}" || echo "${}"
  set +u
}
set +u
