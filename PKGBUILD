#Maintainer: Bjoern Franke <bjo@nord-west.org>

pkgname=rambox-os-bin
_pkgname=rambox-os
pkgver=0.5.18
pkgrel=1
pkgdesc='Forked Free and Open Source messaging and emailing app that combines common web applications into one'
arch=('x86_64')
depends=('alsa-lib' 'bash' 'desktop-file-utils' 'gconf' 'gtk2' 'libnotify' 'libxtst' 'libxss' 'nss')
provides=('rambox-os')
conflicts=('rambox')
url='https://github.com/TheGoddessInari/rambox'
license=('GPL3')
source=("$_pkgname-$pkgver.tar.gz::https://ci.appveyor.com/api/projects/TheGoddessInari/rambox/artifacts/dist/Rambox-$pkgver.tar.gz?job=Image%3A%20Ubuntu&branch=master"
	"${_pkgname}.desktop" "${_pkgname}.png")
sha256sums=('6d0ff493da1ff6df08f8449c5dc87f79b9c1aa3a6369053a3277788e2669bcc4'
            '7a12969771bb16b8afb1a0755558c3692a90b97a16ae9ddcea46f9757d5af169'
            '0bf4d0c849ad6151f77b346fea0424fab910f434378f9890b16fd15a32a10064')


package() {
    install -d ${pkgdir}/{opt/rambox-os,usr/{bin,share/pixmaps}}
    cp -R ${srcdir}/${_path}/* ${pkgdir}/opt/${_pkgname}/
    install -Dm644 $srcdir/${_pkgname}.png ${pkgdir}/usr/share/pixmaps/${_pkgname}.png
    desktop-file-install ${srcdir}/${_pkgname}.desktop --dir ${pkgdir}/usr/share/applications/
}
