# Maintainer: Sebastian Lau <archlinux _at_ slau _dot_ info>

_mintrel=rosa
pkgname=nemo-compare
pkgver=2.8.0
pkgrel=1
pkgdesc="Context menu comparison extension for Nemo file manager"
arch=("any")
url="https://github.com/linuxmint/nemo-extensions"
license=('GPL3')
depends=('nemo>=1' 'nemo-python>=1.0' 'python-xdg' 'python2' 'meld')
optdepends=('kdiff3: Additional comparison options (preferred diff, three-way, multi-compare)'
	   'diffuse: Additional comparison options (preferred diff, three-way, multi-compare)'
	   'kompare: Additional comparison options (preferred diff, three-way, multi-compare)'
	   'fldiff: Additional comparison options (preferred diff, three-way, multi-compare)')
install=${pkgname}.install
source=("http://packages.linuxmint.com/pool/main/n/${pkgname}/${pkgname}_${pkgver}%2b${_mintrel}.tar.gz")
sha256sums=('fc50805d5912e9916a37763d6bb5be8ef2ff5f4257b71ca4bc2a64d9021f9398')


package() {
  cd ${pkgname}-${pkgver}+${_mintrel}

  install -D data/nemo-compare-preferences.desktop -t "${pkgdir}/usr/share/applications"
  install -D data/nemo-compare-notification -t "${pkgdir}/usr/share/${pkgname}"
  install -D src/* -t "${pkgdir}/usr/share/${pkgname}/"

  install -d "${pkgdir}/usr/share/nemo-python/extensions"
  install -d "${pkgdir}/usr/bin"

  ln -s /usr/share/nemo-compare/nemo-compare.py "${pkgdir}/usr/share/nemo-python/extensions/nemo-compare.py"
  ln -s /usr/share/nemo-compare/nemo-compare-preferences.py "${pkgdir}/usr/bin/nemo-compare-preferences"
}
