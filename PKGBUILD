# Maintainer: Ouyang Jun <ouyangjun1999@gmail.com>
# Maintainer: Astro Benzene <universebenzene at sina dot com>
# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: Jove Yu <yushijun110 [at] gmail.com>
# Contributor: Ariel AxionL <axionl at aosc dot io>

pkgname=wps-office-stable
pkgver=10.1.0.6757
#_pkgver=10.1.0.5707~a21
pkgrel=1
pkgdesc="Kingsoft Office (WPS Office) is an office productivity suite"
arch=('i686' 'x86_64')
license=("custom")
url="http://wps-community.org/"
depends=('fontconfig' 'xorg-mkfontdir' 'libxrender' 'desktop-file-utils' 'shared-mime-info' 'xdg-utils' 'glu' 'openssl-1.0' 'sdl2' 'libpulse' 'hicolor-icon-theme')
optdepends=('cups: for printing support'
            'libjpeg-turbo: JPEG image codec support'
            'pango: for complex (right-to-left) text support'
            'curl: An URL retrieval utility and library'
            'ttf-wps-fonts: Symbol fonts required by wps-office'
            'ttf-ms-fonts: Microsft Fonts recommended for wps-office')
conflicts=('kingsoft-office' 'wps-office')
provides=('wps-office')
options=('!emptydirs')
install=${pkgname}.install
[[ "$CARCH" = "i686" ]] && _archext=x86 || _archext=x86_64
source_i686=("http://kdl.cc.ksosoft.com/wps-community/download/6757/wps-office_${pkgver}_x86.tar.xz")
source_x86_64=("http://kdl.cc.ksosoft.com/wps-community/download/6757/wps-office_${pkgver}_x86_64.tar.xz")







PKGEXT=".pkg.tar"

prepare() {
    cd wps-office_${pkgver}_$_archext

    sed -i 's|/opt/kingsoft/wps-office|/usr/lib|' wps wpp et
#   sed -i 's|/office6/${gApp}  ${gOptExt}|/office6/${gApp} -style gtk+ ${gOptExt}|' wps
#   sed -i 's|/office6/${gApp} ${gOptExt}|/office6/${gApp} -style gtk+ ${gOptExt}|' wpp et
}

package() {
    cd wps-office_${pkgver}_$_archext

    install -d "${pkgdir}/usr/lib"
    cp -r office6 "${pkgdir}/usr/lib"

    install -d "${pkgdir}/usr/bin"
    install -m755 wps wpp et "${pkgdir}/usr/bin"

    install -d "${pkgdir}/usr/share/applications"
    cp -r resource/applications/* "${pkgdir}/usr/share/applications"

    install -d "${pkgdir}/usr/share/icons"
    cp -r resource/icons/* "${pkgdir}/usr/share/icons"

    install -d "${pkgdir}/usr/share/mime"
    cp -r resource/mime/* "${pkgdir}/usr/share/mime"

    #cp -r "$srcdir/usr/share" "${pkgdir}/usr/"

    install -d "${pkgdir}/usr/share/fonts/wps-office"
    #cp -r fonts/* "${pkgdir}/usr/share/fonts/wps-office"

    install -Dm644 office6/mui/default/EULA.txt "${pkgdir}/usr/share/licenses/$pkgname/EULA.txt"
}
