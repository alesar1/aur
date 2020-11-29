# Maintainer: Michał Przybyś <michal@przybys.eu>
pkgname=roslynpad
pkgver=15.1
pkgrel=2
pkgdesc='A cross-platform C# editor based on Roslyn and AvalonEdit'
arch=(any)
url='https://roslynpad.net/'
license=(Apache)
depends=("dotnet-runtime"
    desktop-file-utils)
makedepends=("dotnet-sdk")
source=("https://github.com/aelij/RoslynPad/archive/${pkgver}.tar.gz"
    config_path.patch
    roslynpad
    roslynpad.desktop
    roslynpad.install)
md5sums=(e39bab8bfafb9a27ef5edf3602793234
    7d8cd9ff78a48d5b5a9a2f282322ba11
    18214346078c30228f41454d4ad73e42
    d6788321c8bf62a8b5198039dbbee2d3
    a91349cbede88402f0b44728ad9b443f)

prepare() {
    cd "${srcdir}/RoslynPad-${pkgver}"
    rm global.json

    cd "${srcdir}/RoslynPad-${pkgver}/src"
    patch -Np1 -i "${srcdir}/config_path.patch"

}

build() {
    cd "${srcdir}/RoslynPad-${pkgver}/src/RoslynPad.Avalonia"
    dotnet build -c Release /p:DebugType=None /p:TreatWarningsAsErrors=False
}

package() {
    cd "${srcdir}/RoslynPad-${pkgver}/src/RoslynPad.Avalonia"
    dotnet publish --no-build -c Release -o "${pkgdir}/opt/roslynpad" /p:DebugType=None || :

    cd "${srcdir}"
    install -Dm755 roslynpad "${pkgdir}/usr/bin/roslynpad"
    install -Dm644 roslynpad.desktop "${pkgdir}/usr/share/applications/roslynpad.desktop"
    install -Dm644 "RoslynPad-${pkgver}/src/RoslynPad/Resources/RoslynPad.svg" "${pkgdir}/usr/share/pixmaps/roslynpad.svg"
}
