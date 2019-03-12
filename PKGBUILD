# Maintainer: Miguel Useche <migueluseche@skatox.com>
# Contributor: mncarbone <mncarbone@gmail.com>
# Contributor: Cristophero <cristophero.alvarado@gmail.com>
pkgname=pseint
pkgver=20190311
pkgrel=1
pkgdesc="A tool for learning programming basis with a simple spanish pseudocode"
arch=('i686' 'x86_64')
url="http://pseint.sourceforge.net"
license=('GPL')
groups=()
depends=('libpng12' 'glu')
makedepends=()
optdepends=()
source_i686=(https://razaoinfo.dl.sourceforge.net/project/${pkgname}/${pkgver}/$pkgname-l32-${pkgver}.tgz)
source_x86_64=(https://razaoinfo.dl.sourceforge.net/project/${pkgname}/${pkgver}/$pkgname-l64-${pkgver}.tgz)
noextract=()
sha256sums_x86=("d7c0f75b14653b8a2ff60ccc3694fac5e0bfe67e53c56bb080f3047a2b97f4be")
sha256sums_x86_64=("091be54707352b4e99636e6f33916a2553bf76a9fdfd9c91a5563ac8e43b2a10")

package() {
    mkdir -p "${pkgdir}/opt/${pkgname}"
    cp -rv "${srcdir}/${pkgname}/"* "${pkgdir}/opt/${pkgname}"
    mkdir -p "${pkgdir}/usr/share/applications/"
    desktopfile="${pkgdir}/opt/${pkgname}/${pkgname}.desktop"
    touch $desktopfile
    echo "[Desktop Entry]" >> $desktopfile
    echo "Type=Application" >> $desktopfile
    echo "Name=PSeInt" >> $desktopfile
    echo "Comment=${pkgdesc}" >> $desktopfile
    echo "Comment[es]=Una herramienta para aprender las bases de la programación mediante pseudocodigo en español" >> $desktopfile
    echo "Exec=${pkgname}" >> $desktopfile
    echo "Icon=/opt/${pkgname}/imgs/icon.svg" >> $desktopfile
    echo "Terminal=false" >> $desktopfile
    echo "Categories=Development;IDE;" >> $desktopfile
    mkdir -p "${pkgdir}/usr/share/applications/"
    cp $desktopfile "${pkgdir}/usr/share/applications/"
    mkdir -p "${pkgdir}/usr/bin/"
    touch "${pkgdir}/usr/bin/${pkgname}"
    echo "#!/usr/bin/env sh" >> "${pkgdir}/usr/bin/${pkgname}"
    echo "/opt/${pkgname}/wxPSeInt" >> "${pkgdir}/usr/bin/${pkgname}"
    chmod +x "${pkgdir}/usr/bin/${pkgname}"
}
