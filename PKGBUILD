# Maintainer: SebRmv
_pkgbase=ia32_aout
pkgname=ia32_aout-dkms
pkgver=4.0
pkgrel=2
pkgdesc='ia32_aout kernel module, for running an a.out binary format (DKMS)'
arch=('x86_64')
depends=('dkms')
url="https://www.kernel.org"
conflicts=("${_pkgbase}")
provides=("${_pkgbase}")
license=("GPLv3")
options=('!strip')
source=("https://raw.githubusercontent.com/torvalds/linux/v{$pkgver}/arch/x86/ia32/ia32_aout.c"
        'Makefile'
        'dkms.conf')
# updpkgsums
sha1sums=('c635114660009c57014eb2a38e50e3abbb5f2e5f'
          '0917bffa1791e7004e85b75e76a191d058d023d8'
          '42244650cd11033033f49a7909e5825584afd0cb')

package() {
  # Copy dkms.conf
  install -Dm644 dkms.conf "${pkgdir}"/usr/src/${_pkgbase}-${pkgver}/dkms.conf

  # Copy sources (including Makefile)
  cp ia32_aout.c Makefile dkms.conf "${pkgdir}"/usr/src/${_pkgbase}-${pkgver}/  

  # Set name and version
  sed -e "s/@_PKGBASE@/${_pkgbase}/" \
      -e "s/@PKGVER@/${pkgver}/" \
      -i "${pkgdir}"/usr/src/${_pkgbase}-${pkgver}/dkms.conf
}
