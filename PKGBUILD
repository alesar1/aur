# Maintainer: DCNick3 <nikita6 at bk dot ru>

pkgname=lotech-git
pkgver=1.0
pkgrel=1
license=("custom")
source=("git+https://github.com/ianmaclarty/lotech.git"
        "linux.patch")

sha256sums=('SKIP'
            '4423d8d1dd95b603001c6537eaf239593bd874fed3e5327c7ed87298f0766123')

arch=('x86_64')

depends=('lua51' 'libpng' 'curl' 'zlib' 'openal' 'glew' 'glfw2' 'box2d')

makedepends=('git')

provides=('lotech')

prepare()
{
    cd "${srcdir}/lotech/"
    #rm -rf clients/android clients/ouya
    git apply -p1 < "${srcdir}/linux.patch"
}

build() 
{
    cd "${srcdir}/lotech/"
    make
}

package()
{
    cd "${srcdir}/lotech/"
    install -d "${pkgdir}/usr/bin"
    install -m755 ltclient "${pkgdir}/usr/bin"
}

