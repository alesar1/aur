# Maintainer: kyndair <kyndair at gmail dot com>
pkgname=devilutionx-hellfire-git
_pkgname=devilutionX
pkgver=1.1.0.r978.g5d2af51d
pkgrel=1
pkgdesc="Diablo & Hellfire devolved"
arch=('i686' 'pentium4' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/diasurgical/devilutionX"
license=('custom')
depends=('sdl2_ttf' 'sdl_mixer' 'libsodium' 'hellfire-data')
makedepends=('cmake')
provides=('devilutionx')
conflicts=('devilutionx' 'devilutionx-git' 'devilutionx-hellfire')
source=('git+https://github.com/diasurgical/devilutionX.git'
        'diablo1.desktop'
        'hellfire.desktop')
sha256sums=('SKIP'
        '696de98c061387e2aee25dc9c9c5bedf468e53dab23ac37ee8afa8408fe5e424'
        '8c15c30c7818b4e7bb59b4505c6afc0fafd9e6410e97bf36b833e8d395820300')

# update the package version to the current git version
pkgver() {
        cd "${srcdir}/$_pkgname"
        git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

# compile devilutionX with Hellfire enabled
build() {
    cd "${_pkgname}"/build
    cmake .. -DHELLFIRE=ON
    make
}

package() {
    # install game icons
    install -Dm644 "${srcdir}/$_pkgname/Packaging/resources/icon.png" "${pkgdir}/usr/share/pixmaps/diablo-$_pkgname.png"
    install -Dm644 "${srcdir}/$_pkgname/Packaging/resources/hellfire.png" "${pkgdir}/usr/share/pixmaps/hellfire-$_pkgname.png"
    # install required font
    install -Dm644 "${srcdir}/$_pkgname/Packaging/resources/CharisSILB.ttf" "${pkgdir}/usr/share/fonts/Charis/CharisSILB.ttf"
    # install game documents
    install -Dm644 "${srcdir}/$_pkgname/README.md" "${pkgdir}/usr/share/doc/${_pkgname}/$_pkgname-readme.md"
    install -Dm644 "${srcdir}/$_pkgname/docs/BACKGROUND.md" "${pkgdir}/usr/share/doc/${_pkgname}/$_pkgname-background.md"
    install -Dm644 "${srcdir}/$_pkgname/docs/CHANGELOG.md" "${pkgdir}/usr/share/doc/${_pkgname}/$_pkgname-changelog.md"
    install -Dm644 "${srcdir}/$_pkgname/docs/CONTRIBUTING.md" "${pkgdir}/usr/share/doc/${_pkgname}/$_pkgname-contributing.md"
    install -Dm644 "${srcdir}/$_pkgname/docs/debug.md" "${pkgdir}/usr/share/doc/${_pkgname}/$_pkgname-debug.md"
    install -Dm644 "${srcdir}/$_pkgname/docs/mods.md" "${pkgdir}/usr/share/doc/${_pkgname}/$_pkgname-mods.md"
    install -Dm644 "${srcdir}/$_pkgname/docs/TODO.md" "${pkgdir}/usr/share/doc/${_pkgname}/$_pkgname-todo.md"
    # install devilutionX licenses
    install -Dm644 "${srcdir}/$_pkgname/LICENSE"  "${pkgdir}/usr/share/licenses/${_pkgname}/$_pkgname-license"
    install -Dm644 "${srcdir}/$_pkgname/Packaging/resources/LICENSE.CharisSILB.txt"  "${pkgdir}/usr/share/licenses/${_pkgname}/CharisSILB-font-license.txt"
    # install devilutionX executable
    install -Dm755 "${srcdir}/$_pkgname/build/devilutionx" "${pkgdir}/opt/${_pkgname}/devilutionx"
    mkdir "${pkgdir}/usr/bin"
    ln -s /opt/devilutionX/devilutionx "${pkgdir}/usr/bin/devilutionx"
    # install launchers
    install -Dm644 "${srcdir}/diablo1.desktop" "${pkgdir}/usr/share/applications/diablo1.desktop"
    install -Dm644 "${srcdir}/hellfire.desktop" "${pkgdir}/usr/share/applications/hellfire.desktop"
}
