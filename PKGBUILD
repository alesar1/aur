# Maintainer: Zhong Lufan <lufanzhong@gmail.com>

pkgname=qqmusic-electron
_pkgname=qqmusic
pkgver=1.1.4
pkgrel=4
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
sha512sums=('63e53d24fc6014cc9129a50cc76af83ce4816aea6de8396df9f4573bb1a0cf05e1e08ebd519e0abaadbff3a6db44aa96ba577579fd533d9368bd51c957b0c08b'
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
 
