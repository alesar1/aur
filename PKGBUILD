#Maintainer: Janek Thomaschewski <janek@jbbr.net>

pkgname=rambox-bin
_pkgname=rambox
pkgver=0.5.14
pkgrel=1
pkgdesc='Free and Open Source messaging and emailing app that combines common web applications into one.'
arch=('i686' 'x86_64')
depends=('alsa-lib' 'bash' 'desktop-file-utils' 'gconf' 'gtk2' 'libnotify' 'libxtst' 'libxss' 'nss')
provides=("rambox")
url='http://rambox.pro/'
license=('GPL3')
source=("${_pkgname}.sh" "${_pkgname}.desktop" "${_pkgname}.png")
source_i686=("https://github.com/saenzramiro/rambox/releases/download/$pkgver/rambox-$pkgver-ia32.tar.gz")
source_x86_64=("https://github.com/saenzramiro/rambox/releases/download/$pkgver/rambox-$pkgver-x64.tar.gz")

sha256sums=('ee2573d62b580e8ee584335534976396761b5da53a009bccb881b9cf6cb2041d'
            '61ad70a929c402e24c79b8868208310f9b3c4d7801db2b791af38293231ee524'
            '0bf4d0c849ad6151f77b346fea0424fab910f434378f9890b16fd15a32a10064')
sha256sums_i686=('af22fd16f46f50a4ed007d9cb7b8ba3dc25e7a4cf632f1bd24d47052990027d6')
sha256sums_x86_64=('595531e02d0ebed3387d39f24a041617ad461515515ad245fc704b6a8c64d489')

# default path after extraction
_path="Rambox-${pkgver}"
# special path for i686
[[ "$CARCH" = "i686" ]] && _path="Rambox-${pkgver}-ia32"

package() {
    install -d ${pkgdir}/{opt/rambox,usr/{bin,share/pixmaps}}
    cp -R ${srcdir}/${_path}/* ${pkgdir}/opt/${_pkgname}/
    install -Dm755 $srcdir/${_pkgname}.sh ${pkgdir}/usr/bin/${_pkgname}
    install -Dm644 $srcdir/${_pkgname}.png ${pkgdir}/usr/share/pixmaps/${_pkgname}.png
    desktop-file-install ${srcdir}/${_pkgname}.desktop --dir ${pkgdir}/usr/share/applications/
}
