# Maintainer: Borhaneddine GUEMIDI <guemidiborhane@gmail.com>
pkgname=youtube-dl-gui
_pkgname=youtube-dl-gui
pkgver=2.4.0
pkgrel=1
pkgdesc='A cross-platform GUI for youtube-dl made in Electron and node.js'
arch=('x86_64')
license=('ISC')
depends=('nodejs' 'npm' 'python-mutagen')
url="https://github.com/jely2002/youtube-dl-gui"
options=('!strip')
source=("https://github.com/jely2002/${pkgname}/archive/refs/tags/v${pkgver}.tar.gz")
md5sums=('f4d2e5faaeb47cfa3c1294be80fb8f49')
installpath=('/opt/youtube-dl-gui')
iconpath='renderer/img/icon.png'

prepare() {
    cd ${srcdir}/${pkgname}-${pkgver}
    npm install
}

build() {
    cd ${pkgname}-${pkgver}
    npx electron-builder --linux tar.xz --config ../../electron-builder.yml
}

package() {
    mkdir -p ${pkgdir}/opt
    mkdir -p ${pkgdir}/usr/share/applications
    mkdir -p ${pkgdir}/usr/bin
    mkdir -p ${pkgdir}/usr/share/pixmaps/

    tar -xf ${srcdir}/${pkgname}-${pkgver}/dist/${pkgname}-${pkgver}.tar.xz -C $pkgdir/opt
    mv ${pkgdir}/opt/${pkgname}-${pkgver} ${pkgdir}/opt/${pkgname}
    cp ../${pkgname}.desktop ${pkgdir}/usr/share/applications/
    cp ${srcdir}/${pkgname}-${pkgver}/${iconpath} ${pkgdir}/usr/share/pixmaps/${pkgname}.png
    ln -fs /opt/${pkgname}/${pkgname} ${pkgdir}/usr/bin/${pkgname}
}
