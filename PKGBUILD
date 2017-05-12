# Maintainer: Max Liebkies <mail at maxliebkies dot de>
# Credit: Yurii Kolesnykov
# Credit: g00d
# Credit: Aaron Brodersen <aaron at abrodersen dot com>

pkgname=dotnet-cli
pkgver="1.0.4"
pkgrel=1
epoch=1
pkgdesc="A command line utility for building, testing, packaging and running .NET Core applications and libraries"
arch=(x86_64)
url="https://www.microsoft.com/net/core"
license=('MIT')
depends=('dotnet')
optdepends=('dotnet-sdk: enable building applications')
conflicts=('dotnet-bin')
options=('staticlibs')

source=("${pkgname}-${pkgver}.tar.gz::https://download.microsoft.com/download/D/7/A/D7A9E4E9-5D25-4F0C-B071-210CB8267943/dotnet-ubuntu.16.10-x64.1.1.2.tar.gz")

sha256sums=('0a4d4061931e0154c9186446dbc8d4c3e69ba49537699be98185d55fc24a1b56')

package() {
  mkdir -p "${pkgdir}/opt/dotnet/"

  install -m 755 -o root -g root -D "${srcdir}/host/fxr/1.1.0/libhostfxr.so" "${pkgdir}/opt/dotnet/host/fxr/1.1.0/libhostfxr.so"
  install -m 755 -o root -g root -D "${srcdir}/dotnet" "${pkgdir}/opt/dotnet/dotnet"
  
  install -m 644 -o root -g root -D "${srcdir}/LICENSE.txt" "${pkgdir}/usr/share/licenses/dotnet/LICENSE"
  install -m 644 -o root -g root -D "${srcdir}/ThirdPartyNotices.txt" "${pkgdir}/usr/share/licenses/dotnet/ThirdPartyNotices"

  mkdir -p "${pkgdir}/usr/bin/"
  ln -s "/opt/dotnet/dotnet" "${pkgdir}/usr/bin/dotnet"
}

# vim:set ts=2 sw=2 et:
