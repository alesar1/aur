# Maintainer: Andreas Manthey <abamanthey@gmail.com>
pkgname=rtl8822bu-dkms-git
_pkgbase=rtl8822bu
pkgver=1.0.0.9_p1.1
pkgrel=2
pkgdesc="Kernel module for Edimax EW7822ULC USB3 and Asus AC53 Nano USB 802.11ac adapter."
url="https://github.com/jeremyb31/rtl8822bu"
license=("GPL")
arch=('armv7h' 'x86_64')
makedepends=('git')
depends=('dkms')
source=('git+https://github.com/jeremyb31/rtl8822bu.git' 
        '001-fix-compile-against-kernel-4.12.patch' 
        '002-fix-compile-against-kernel-4.14.patch'
        'dkms.conf'
        )
sha256sums=('SKIP'
            'c42a9c930ec7f5286b74a57c216bd15004d6342bc8167085748465324436e7c6'
            'cfaa8fecd603d867850406dd279d7902a2d416bd'
            '470b74a26d924adbe721b47617f806b8a571b6f4ec06c5e079653da8915f4d89'
           )
install="${pkgname}.install"
prepare() {
  sed -e "s/@PKGNAME@/${_pkgbase}/" \
      -e "s/@PKGVER@/${pkgver}/" \
      -i "${srcdir}/dkms.conf"      
  (cd ${srcdir}/${_pkgbase} \
  && patch -p1 -i ${srcdir}/001-fix-compile-against-kernel-4.12.patch \
  && patch -p1 -i ${srcdir}/002-fix-compile-against-kernel-4.14.patch \
  )
}
package() {
  install -D "${srcdir}/dkms.conf" "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"
  cp -r "${srcdir}/${_pkgbase}"/* "${pkgdir}/usr/src/${_pkgbase}-${pkgver}"
}
