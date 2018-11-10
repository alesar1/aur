# Maintainer: jtmb <packaging at technologicalwizardry dot com>
pkgname=msbuild-stable
_pkgver=15.8+xamarinxplat.2018.07.31.22.43-0xamarin6+ubuntu1404b1
pkgver=${_pkgver//[+-]/_}
pkgrel=1
pkgdesc="Xamarin implementation of the Microsoft build system"
arch=('x86_64')
depends=('mono>=5.0.0')
provides=('msbuild')
conflicts=('msbuild')
url="https://github.com/mono/msbuild"
license=('MIT')
source=("msbuild-amd64-v${_pkgver}.deb::http://download.mono-project.com/repo/ubuntu/pool/main/m/msbuild/msbuild_${_pkgver}_all.deb")
sha256sums=('29a8cb700235cf6004135c5dc787f559605613da3397084944cab90af6f315ec')

package() {
    cd "${srcdir}"

    bsdtar xf data.tar.xz
    chmod -R g-w usr
    mv usr "${pkgdir}"
}
