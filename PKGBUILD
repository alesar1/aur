# Maintainer: Jonathan Liu <net147@gmail.com>
pkgname=psmouse-thinkpad-l570-dkms
_basepkgname=psmouse-thinkpad-l570
_srcname=linux-4.15
pkgver=4.15.2
pkgrel=1
pkgdesc="psmouse kernel module with support for Lenovo Thinkpad L570 ALPS touchpad"
arch=('any')
url="https://www.kernel.org/"
license=('GPL2')
depends=('dkms')
source=(
  "https://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.xz"
  "https://www.kernel.org/pub/linux/kernel/v4.x/${_srcname}.tar.sign"
  "https://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.xz"
  "https://www.kernel.org/pub/linux/kernel/v4.x/patch-${pkgver}.sign"
  'alps.patch'
  'dkms.conf'
)
validpgpkeys=(
  'ABAF11C65A2970B130ABE3C479BE3E4300411886'  # Linus Torvalds
  '647F28654894E3BD457199BE38DBBDC86092693E'  # Greg Kroah-Hartman
)
sha256sums=('5a26478906d5005f4f809402e981518d2b8844949199f60c4b6e1f986ca2a769'
            'SKIP'
            '812499c5d0cc5183606dc9388084df162ca2eb5fa374d8f8b00136fd82825847'
            'SKIP'
            '06ce2cb1cd713124f4f4e8b196e3b483fb173f21964a90bfb69499154ea5fd54'
            '63c52529f831a9a433d18465b6cf694fc3270d1ff2c11172e50ab05cab04356b')

prepare() {
  cd "${_srcname}"
  patch -Np1 -i ../patch-${pkgver}
  patch -Np1 -i ../alps.patch
}

package() {
  cd "${_srcname}"
  install -Dm644 ../dkms.conf "${pkgdir}/usr/src/${_basepkgname}-${pkgver}/dkms.conf"
  sed -e "s/@PKGVER@/${pkgver}/" -i "${pkgdir}/usr/src/${_basepkgname}-${pkgver}/dkms.conf"
  cp -a drivers/input/mouse/* "${pkgdir}/usr/src/${_basepkgname}-${pkgver}/"
}

# vim:set ts=2 sw=2 et:
