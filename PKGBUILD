# Maintainer: Conor Anderson <conor.anderson@mail.utoronto.ca>
pkgname=wire-desktop
_pkgname=wire
pkgver=2.11.2662
pkgrel=2
pkgdesc='Modern, private messenger. Based on Electron.'
arch=('x86_64' 'i686')
url='https://wire.com/'
license=('GPL3')
conflicts=('wire-desktop-bin')
depends=('nss' 'alsa-lib' 'libxss' 'gconf' 'gtk2' 'libxtst')
makedepends=('npm' 'nodejs-grunt-cli' 'gendesk' 'python2')
provides=('wire-desktop')
source=("https://github.com/wireapp/wire-desktop/archive/release/"$pkgver".tar.gz"
        "Gruntfile.patch")        
sha256sums=('39cde051451300085153f74fc6a660355dc6e896da7602768bb86843c80df0d0'
            'fc8a2d5badde0b3049df843f497a999a8cfeff05a261343d9094d3ba35ca4202')

prepare() {
  gendesk -f -n --name=Wire --pkgname=${pkgname} --pkgdesc="${pkgdesc}" --exec="${_pkgname}" --categories="Network"
  cd ${srcdir}/${pkgname}-release-${pkgver}
  patch -p0 < $startdir/Gruntfile.patch
}

build() {
	cd ${srcdir}/${pkgname}-release-${pkgver}
	npm install
	grunt linux-prod
}

package() {
  # Place files
  install -d ${pkgdir}/opt/${pkgname}
  if [ $CARCH == 'x86_64' ]; then
    cp -a ${srcdir}/${pkgname}-release-${pkgver}/wrap/build/Wire-linux-x64/* ${pkgdir}/opt/${pkgname}
  else
    cp -a ${srcdir}/${pkgname}-release-${pkgver}/wrap/build/Wire-linux-ia32/* ${pkgdir}/opt/${pkgname}
  fi
  
  # Symlink main binary
  install -d ${pkgdir}/usr/bin
  ln -s "/opt/${pkgname}/Wire" "${pkgdir}/usr/bin/${_pkgname}"
  
  # Place desktop entry and icon
  install -Dm644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
  install -Dm644 ${srcdir}/${pkgname}-release-${pkgver}/electron/img/wire.png ${pkgdir}/usr/share/pixmaps/${pkgname}.png

  # Place license files
  install -Dm644 "${pkgdir}/opt/${pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${pkgdir}/opt/${pkgname}/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSES.chromium.html"
  rm "${pkgdir}/opt/${pkgname}/LICENSE"
  rm "${pkgdir}/opt/${pkgname}/LICENSES.chromium.html"
}
