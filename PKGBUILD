# Maintainer: Mark Laws <eMm Dee eLl at 60 hz dot org>
# Contributor: Ben Darwin <bcdarwin@gmail.com>

pkgname=ats2-contrib
_pkgname=ATS2-Postiats-contrib
pkgver=0.3.11
pkgrel=1
pkgdesc="Extra libraries for the ATS2 programming language"
arch=('any')
url="http://www.ats-lang.org/"
license=('GPL3')
depends=("ats2-postiats=${pkgver}")
options=('staticlibs')
source=("https://downloads.sourceforge.net/project/ats2-lang/ats2-lang/ats2-postiats-${pkgver}/${_pkgname}-${pkgver}.tgz")
sha1sums=('7c0913b4f84d9a815d3e010327517e6f384bb83d')

prepare() {
    # Duplicated from upstream's ats2-postiats archive
    rm -fr "${srcdir}/${_pkgname}-${pkgver}/contrib/libatscc/DATS"
    rm -fr "${srcdir}/${_pkgname}-${pkgver}/contrib/libatscc/SATS"
    rm -fr "${srcdir}/${_pkgname}-${pkgver}/contrib/libatscc/basics.sats"
}

package() {
  source /etc/profile.d/ats2-postiats.sh
  local patshome="${pkgdir%%/}/${PATSHOME}"
  local profiled="${pkgdir}/etc/profile.d"

  mkdir -p "${patshome}"
  mkdir -p "${profiled}"
  cp -a "${srcdir}/${_pkgname}-${pkgver}/." "${patshome}"

  cat <<EOF > "${profiled}/${pkgname}.sh"
source /etc/profile.d/ats2-postiats.sh
export PATSHOMERELOC=\$PATSHOME
EOF

  cat <<EOF > "${profiled}/${pkgname}.csh"
source /etc/profile.d/ats2-postiats.csh
setenv PATSHOMERELOC \$PATSHOME
EOF
}

# Local Variables:
# compile-command: "makepkg -sm" && mksrcinfo
# End:
