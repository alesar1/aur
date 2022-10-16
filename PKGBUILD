# Maintainer: Zhong Lufan <lufanzhong@gmail.com>

pkgname=qqmusic-electron
_pkgname=qqmusic
pkgver=1.1.5
pkgrel=1
pkgdesc="Tencent QQMusic, Run with system Electron."
arch=('any')
url="https://y.qq.com/"
license=('CC0-1.0')
depends=('electron13')
makedepends=('asar')
provides=("$_pkgname")
conflicts=('qqmusic-bin')
source=(
    "https://test.mini-proxy.mivm.cn/qqmusic-electron/qqmusic_${pkgver}-${pkgrel}.asar"
    "${_pkgname}.desktop"
    "${_pkgname}.sh"
)
sha512sums=('cb1f60e0dd0e8b739f911ddbf6baf600bf04da3c35d7cb3f128e955f0bc80494afab031f311d0950a7312a0ff859a4f2f2163c4e6242688e26335915d66a84b2'
            'a872d410a02700b66ae9c55ee10a59bc6831caf403f3e62a96b7baa3ea39a8d239a1b829d2b13db4947b97daa9b9eb588deeea05ed125a6ac6892f43d6aa300f'
            'e15125f812c7d0b1ba0ecce090e8ac3543423f224a2b13b09e27c5ff0b9083ae13769792a962edfb0a706332cc26c4e196e63b2a14e9fe74cfdea5c3ce61c706')

prepare() {
    cd "${srcdir}"
    asar ef qqmusic_${pkgver}-${pkgrel}.asar logo.png
}

package(){
    cd "${srcdir}"
    
    install -Dm755 ${_pkgname}.sh "${pkgdir}/usr/bin/qqmusic"
    install -Dm644 qqmusic_${pkgver}-${pkgrel}.asar "${pkgdir}/usr/lib/qqmusic/app.asar"
    install -Dm644 ${_pkgname}.desktop "${pkgdir}/usr/share/applications/qqmusic.desktop"
    install -Dm644 logo.png "${pkgdir}/usr/share/pixmaps/qqmusic.png"
}
 
