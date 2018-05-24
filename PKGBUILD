# Maintainer: Jan Neumann <neum dot ja at gmail dot com>


pkgname=qtwebflix-git
_gitname=qtwebflix
pkgver=r70.c46f537
pkgrel=1
pkgdesc='Standalone HD Netflix Browser using qt5-webengine (also supports Amazon prime, HBO Go, Hulu, Crunchy Roll)'
arch=('any')
url='https://github.com/gort818/qtwebflix'
license=('GPL3')
depends=('xdg-utils' 'qt5-webengine-widevine')
optdepends=('pepper-flash: Needed for some streaming services')
makedepends=('git')
source=("git+${url}.git"
        "${_gitname}.desktop"
        "cadmium.patch")
sha256sums=('SKIP'
            '571b202d64ba9a0e1144e6abdabc7288a843985624da01cc03ff43020bee521b'
            '993ad1d6d6f370656beec246a0d41dad0bb2ceda71c45015404ab1789518b09b')

pkgver() {
   cd ${srcdir}/${_gitname}
   
   printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

prepare(){
   cd ${srcdir}/${_gitname}
   patch -p0 -i  ${srcdir}/cadmium.patch
   
}
            
build() {
   cd ${srcdir}/${_gitname}

   qmake -config release
   make
   
}

package() {
   
   install -Dm755 ${srcdir}/${_gitname}/${_gitname} ${pkgdir}/usr/bin/${_gitname}
   install -Dm644 ${srcdir}/${_gitname}/data/netflix-desktop.svg ${pkgdir}/usr/share/pixmaps/netflix-desktop.svg
   install -Dm755 ${srcdir}/${_gitname}.desktop ${pkgdir}/usr/share/applications/${_gitname}.desktop

}
