# Maintainer: jtmb <packaging at technologicalwizardry dot com>
pkgname=msbuild-stable
_pkgver=16.0+xamarinxplat.2018.09.26.17.53-0xamarin3+ubuntu1404b1
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
sha256sums=('1649b21df7b2864539b0fe8cfe44546cf8b344f9464859bd4d753a99bd5eb0be')

package() {
    cd "${srcdir}"

    bsdtar xf data.tar.xz
    chmod -R g-w usr
    mv usr "${pkgdir}"
}
