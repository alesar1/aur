#
# PKGBUILD: vasm
#
# Maintainer: uffe Jakobsen <_microtop_-at-_starion_-_dot_-_dk_>
#

_pkgver="1_8h"

pkgname=vasm
pkgver=1.8h
pkgrel=1
pkgdesc="Portable and retargetable 6502 6800 arm c16x jagrisc m68k ppc test tr3200 vidcore x86 z80 assembler."
arch=('i686' 'x86_64')
url="http://sun.hasenbraten.de/vasm/"
license=('custom')
depends=()
#source=(http://sun.hasenbraten.de/vasm/release/vasm.tar.gz) # latest unversioned source url
source=(http://server.owl.de/~frank/tags/${pkgname}${_pkgver}.tar.gz)
md5sums=('748ef165a895a29c59e549f8088e15b7')


CPU_LIST="6502 6800 arm c16x jagrisc m68k ppc test tr3200 vidcore x86 z80"
SYNTAX_LIST="std madmac mot oldstyle" # test
OUTPUT_LIST="aout bin elf hunk test tos vobj"

prepare()
{
  cd ${srcdir}/${pkgname}
}

build()
{
  cd ${srcdir}/${pkgname}
  #make doc/vasm.pdf
  #make doc/vasm.html
  for CPU in ${CPU_LIST}; do
    for SYNTAX in ${SYNTAX_LIST}; do
      make CPU=${CPU} SYNTAX=${SYNTAX}
    done
  done
}

package()
{
  cd ${srcdir}/${pkgname}
  mkdir -p ${pkgdir}/usr/bin
  for CPU in ${CPU_LIST}; do
    for SYNTAX in ${SYNTAX_LIST}; do
      cp vasm${CPU}_${SYNTAX} ${pkgdir}/usr/bin
    done
  done
}

#
# EOF
#
