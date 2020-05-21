# Maintainer: Nazar Vinnichuk <nazar.vinnichuk at tutanota dot com>
pkgname=pacwall-git
_pkgname=${pkgname%-git}
pkgver=1.0.1
pkgrel=1
pkgdesc="Dependency graph of installed packages on your wallpaper."
url="http://github.com/Kharacternyk/${_pkgname}"
arch=('any')
license=('GPL-3')
depends=('graphviz' 'pacman-contrib')
optdepends=('feh: wallpaper setting using feh'
            'hsetroot: wallpaper setting using hsetroot'
            'imagemagick: DE integration'
            'xorg-xdpyinfo: DE integration')
makedepends=('git')
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/Kharacternyk/${_pkgname}.git#branch=master")
sha256sums=(SKIP)

pkgver() {
    cd "${srcdir}/${_pkgname}"
    local _version="$(git describe --tags)"
    printf "${_version#v}"
}

package() {
    install -Dm755 "${srcdir}/${_pkgname}/pacwall.sh" "${pkgdir}/usr/bin/pacwall"
    install -Dm644 "${srcdir}/${_pkgname}/README.rst" "${pkgdir}/usr/share/doc/${_pkgname}/README.rst"
}
